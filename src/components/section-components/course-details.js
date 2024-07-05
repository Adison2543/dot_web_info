import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { API_BASE_URL, API_HEADERS } from '../../appConfig';
import { useTranslation } from 'react-i18next';

const CourseDetails = ({tran}) => {
	const {course_id} = useParams();
	const [course, setCourse] = useState({});
	const [loading, setLoading] = useState(false);
	const [lesson, setLesson] = useState({});
	const [condition, setCondition] = useState([]);
	const { i18n } = useTranslation();
  	const [currentLang, setCurrentLang] = useState(i18n.language);
	const [sumQuestion, setSumQuestion] = useState(0);

	useEffect(() => {
		setCurrentLang(i18n.language);
	}, [i18n.language]);

	const fetchCondition = async () => {
		try {
			const res = await axios.get(`${API_BASE_URL}/course/condition/list/?course_id=${course_id}`, {
							headers: API_HEADERS
						});

			if (res) {
				setCondition(res.data);
			} else {
				throw new Error("Failed to fetch condition data.")
			}
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		fetchCondition();
	}, [])
	console.log('Condition : ' + JSON.stringify(condition));
	useEffect(() => {

		let abortController = new AbortController();
		const fetchCourse = async () => {
			try {
				setLoading(true);
				let fetchCourses = await axios.post(`${API_BASE_URL}/course/list`, 
					{
						signal: abortController.signal,
						page: 1,
						per_page: 100,
						search: "",
						active_include: [1]

					}, {
						headers: API_HEADERS
				})
				const courseData = fetchCourses.data.data
				setCourse(courseData.filter(item => item.course_id === parseInt(course_id, 10))[0]);
				let fetchLesson = await axios.post(`${API_BASE_URL}/course/lesson/list/${courseData.filter(item => item.course_id === parseInt(course_id, 10))[0].course_id}`, 
					{
						page: 1,
						per_page: 50,
						search: ""

					}, {
						headers: API_HEADERS
				})
				setLesson(fetchLesson.data.data);
			} catch (error) {
				console.error('POST Error:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchCourse();
		return () => abortController.abort();
	}, []);

	const sumQuest = () => {
		return condition.reduce((acc, current) => acc + current.total_question, 0);
	}


	// const gatFDate = (dateData) => {
	// 	const date = new Date(dateData);
	// 	const monthNames = [
	// 		"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
	// 		"JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
	// 	];
	// 	const day = date.getDate();
	// 	const month = monthNames[date.getMonth()];
	// 	const year = date.getFullYear();
	// 	return `${day} ${month}, ${year}`;
	// };

    return  <div className="course-single-area pd-top-60 pd-bottom-60">
			  <div className="container">
			  	{loading ? <div className='w-100 d-flex justify-content-center align-items-center'><ReactLoading type='bars' color="var(--main-color)" height={200} width={100} /></div> :
					<div className="row">
						<div className='col-12 col-md-4'>
							<div className="thumb">
								<img src={`${API_BASE_URL}/media_file/file/?f=${course?.course_cover}`} alt="img" />
							</div>
						</div>
						<div className="col-12 col-md-8 mt-3 mt-md-0">
							<div className="course-course-detaila-inner">
								<div className="details-inner">
									<h4 className="title">{currentLang == 'lo' ? course?.course_name_lo : course?.course_name_eng}</h4>
									<h5 className="">{course?.course_remark_a}</h5>
									
								</div>
								<div className="tab-content" id="myTabContent">
									<div className="tab-pane fade show active" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
										<div className="course-details-content">
											<p style={{whiteSpace: "pre-wrap"}}>{course?.course_description}</p>

											<table className="table table-borderless">
												<thead>
													<tr>
														<th>{tran('lesson_subject')}</th>
														{/* <th className='text-center'>ຈຳນວນບົດຮຽນ</th> */}
														<th className='text-center'>{tran('num_question')}</th>
													</tr>
												</thead>
												<tbody>
													{condition?.map((data, index) => (
														<tr key={index}>
															<td>{currentLang == 'lo' ? data.cg_name_lo : data.cg_name_eng}</td>
															{/* <td className='text-center'>{data.cc_value_a}</td> */}
															<td className='text-center'>{data.total_question}</td>
														</tr>
													))}
												</tbody>
													{condition ?
														<tfoot>
															<tr className='text-center'>
																<td></td>
																{/* <td>{condition.sum_val_a}</td> */}
																<td>{sumQuest()}</td>
															</tr>
														</tfoot>
													: ''}
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			  </div>
			</div>

        }

export default CourseDetails