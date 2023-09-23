import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';

const CourseDetails = ({tran}) => {
	const {course_id} = useParams();
	const [course, setCourse] = useState({})
	const [loading, setLoading] = useState(false);
	const [lesson, setLesson] = useState({})

	useEffect(() => {

		let abortController = new AbortController();
		const fetchCourse = async () => {
			try {
				setLoading(true);
				let fetchCourses = await axios.post(`https://oasapi.iddriver.com/course/list`, 
					{
						signal: abortController.signal,
						page: 1,
						per_page: 100,
						search: ""

					}, {
						headers: { 
							'Content-Type': 'application/json', 
							'Authorization': 'ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p'
						}
				})
				const courseData = fetchCourses.data.data
				setCourse(courseData.filter(item => item.course_id === parseInt(course_id, 10))[0]);
				let fetchLesson = await axios.post(`https://oasapi.iddriver.com/course/lesson/list/${courseData.filter(item => item.course_id === parseInt(course_id, 10))[0].course_id}`, 
					{
						page: 1,
						per_page: 50,
						search: ""

					}, {
						headers: { 
							'Content-Type': 'application/json', 
							'Authorization': 'ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p'
						}
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
	console.log("course: ",course)
	console.log("Lesson: ",lesson)


	const gatFDate = (dateData) => {
		const date = new Date(dateData);
		const monthNames = [
			"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
			"JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
		];
		const day = date.getDate();
		const month = monthNames[date.getMonth()];
		const year = date.getFullYear();
		return `${day} ${month}, ${year}`;
	};

    return  <div className="course-single-area pd-top-120 pd-bottom-90">
			  <div className="container">
			  	{loading ? <div className='w-100 d-flex justify-content-center align-items-center'><ReactLoading type='bars' color="var(--main-color)" height={200} width={100} /></div> :
					<div className="row">
					<div className="col-lg-8">
						<div className="course-course-detaila-inner">
						<div className="details-inner">
							<h3 className="title"><a href="course-details.html">{course?.course_name}</a></h3>
						</div>
						<div className="thumb">
							<img src={`https://oasapi.iddriver.com/media_file/file/?f=${course?.course_cover}`} alt="img" />
						</div>
						<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade show active" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
							<div className="course-details-content">
								<h4 className="title">{tran('overview')}</h4>
								<p>{course?.course_description}</p>
								<div id="accordion" className="accordion-area mt-4">
								{Array.isArray(lesson) && lesson.map((item, index) => (
									<div className="card single-faq-inner style-no-border" key={index}>
										<div className="card-header" id={`ff-${index}`}>
										<h5 className="mb-0">
											<button className="btn-link collapsed" data-toggle="collapse" data-target={`#f-${index}`} aria-expanded="true" aria-controls={`f-${index}`}>
											{index + 1}.  {item.cs_name}
											<i className="fa fa-eye" />
											</button>
										</h5>
										</div>
										<div id={`f-${index}`} className="collapse" aria-labelledby={`ff-${index}`} data-parent="#accordion">
										<div className="card-body">
											{item.cs_description}
										</div>
										</div>
									</div>
								))}
								</div>
							</div>
							</div>
						</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="td-sidebar">
						<div className="widget widget_feature">
							<h4 className="widget-title">{tran('coursefeature')}</h4>                                 
							<ul>
								<li><i className="fa fa-tags" /><span>{tran('coursecode')}:</span>{course?.course_code}</li>
							<li><i className="fa fa-user" /><span>{tran('lecturer')} :</span>{course?.user_update ? course.user_update : course.user_create}</li>
							<li><i className="fa fa-clock-o" /><span>{tran('create')} :</span>{course?.crt_date && gatFDate(course?.crt_date)}</li>
							<li><i className="fa fa-clock-o" /><span>{tran('lastupdate')} :</span>{course?.udp_date && gatFDate(course?.udp_date)}</li>
							<li><i className="fa fa-clipboard" /><span>{tran('lesson')} :</span>{Array.isArray(lesson) && lesson.length}</li>
							{/* <li><i className="fa fa-clone" /><span>Categories:</span> Technology</li>
							<li><i className="fa fa-clipboard" /><span>Instructor:</span> Ethan Dean</li> */}
							</ul>
						</div>
						</div>
					</div>
					</div>
				}
			  </div>
			</div>

        }

export default CourseDetails