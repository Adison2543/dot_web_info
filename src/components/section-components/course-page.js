import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from './course-card2';
import { Pagination } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { API_BASE_URL, API_HEADERS } from '../../apiConfig';



const CoursePage = ({tran}) => {

		const [courses, setCourse] = useState([]);
		const [page, setPage] = useState(1);
		const [loading, setLoading] = useState(false);
		const [searchdata, setSearch] = useState("");

		useEffect(() => {

			let abortController = new AbortController();
			const fetchCourse = async () => {
				try {
					setLoading(true);
					let fetchCourses = await axios.post(`${API_BASE_URL}/course/list`, 
						{
							signal: abortController.signal,
							page: page,
							per_page: 8,
							search: searchdata

						}, {
							headers: API_HEADERS
					})
					setCourse(fetchCourses.data);
				} catch (error) {
					console.error('POST Error:', error);
				} finally {
					setLoading(false);
				}
			}

			fetchCourse();
			return () => abortController.abort();
		}, [page, searchdata]);

		const prevPage = () => {
			setPage((page) => page - 1)
		}

		const nextPage = () => {
			setPage((page) => page + 1)
		}
		
		const letSearch = (e) => {
			e.preventDefault();
			const inputValue = e.target.elements.searchWord.value;
			setSearch(inputValue);
		}


		const totalPages = courses?.total_page;
		const pageRange = 3;
		const startPage = Math.max(1, page - pageRange);
		const endPage = Math.min(totalPages, page + pageRange);

		const pageItems = [];

		for (let i = startPage; i <= endPage; i++) {
			pageItems.push(
				<Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
					{i}
				</Pagination.Item>
			);
		}

    return <div className="blog-area pd-top-120 pd-bottom-120">
			  <div className="container">
				{loading ? <div className='w-100 d-flex justify-content-center align-items-center'><ReactLoading type='bars' color="var(--main-color)" height={200} width={100} /></div> :
					<div className="row">
						<div className="col-lg-8 order-lg-12">
							<div className="row go-top">
								{courses?.data?.map((item) => (
									<CourseCard key={item.course_id} course={item} tran={tran}></CourseCard>
								))}
							</div>
							<Pagination>
								<Pagination.Prev disabled={page === 1 ? true : false} onClick={prevPage}/>
								{pageItems}
								<Pagination.Next disabled={page === courses?.total_page ? true : false} onClick={nextPage}/>
							</Pagination>
						</div>

					{/* sidebar */}
					<div className="col-lg-4 order-lg-1 col-12">
						<div className="td-sidebar mt-5 mt-lg-0">
						<div className="widget widget_search_course">    
							<h4 className="widget-title">{tran('search')}</h4>                               
							<form className="search-form single-input-inner" onSubmit={letSearch}>
							<input type="text" placeholder={`${tran('search')}`} maxLength={100}  name="searchWord"/>
							<button className="btn btn-base w-100 mt-3" type="submit"><i className="fa fa-search" />{tran('search')}</button>
							</form>
						</div> 
						</div>
					</div>
					</div>	
				}
			  </div>
			</div>
    }
export default CoursePage