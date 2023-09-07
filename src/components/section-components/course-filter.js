import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import CourseCard from './course-card'

const CourseFilter = () => {
	const [hasError, setError] = useState(false)
	const [allCourse, setBlog] = useState([])

	async function fetchData() {
		const res = await fetch('https://fakestoreapi.com/products');
		// {
		// 	"id": ,
		// 	"title": "",
		// 	"price": ,
		// 	"description": "",
		// 	"category": "",
		// 	"image": "",
		// 	"rating": {
		// 	  "rate": ,
		// 	  "count": 
		// 	}
		// }
		res.json()
			.then(res => setBlog(res))
			.catch(err => setError(err));
		console.log(allCourse)
	}

	useEffect(() => {
		fetchData();
	}, [])
	
    return  (
		<>
			<div className="course-area pd-top-100 pd-bottom-90" id="course">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-8 col-lg-10 col-md-11">
			        <div className="section-title style-white text-center">
			          <h2 className="title">Top Featured Courses</h2>
			        </div>
			      </div>
			    </div>
			    <div className="edmt-nav-tab style-white text-center">
			      <ul className="nav nav-tabs" id="myTab" role="tablist">
			        <li className="nav-item">
			          <a className="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">men's clothing</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">jewelery</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">electronics</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">women's clothing</a>
			        </li>
			      </ul>
			    </div>
			    <div className="tab-content go-top" id="myTabContent">
					<div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
						<div className="row">
							{allCourse.filter(item=>item.category == "men's clothing").map((course) => (
								<CourseCard key={course.id} blog={course}></CourseCard>
							))}
						</div>
					</div>
			      <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
			        <div className="row">
						{allCourse.filter(item=>item.category == "jewelery").map((course) => (
							<CourseCard key={course.id} blog={course}></CourseCard>
						))}
			        </div>
			      </div>
			      <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
			        <div className="row">
						{allCourse.filter(item=>item.category == "electronics").map((course) => (
							<CourseCard key={course.id} blog={course}></CourseCard>
						))}
			        </div>
			      </div>
			      <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
			        <div className="row">
						{allCourse.filter(item=>item.category == "women's clothing").map((course) => (
							<CourseCard key={course.id} blog={course}></CourseCard>
						))}
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		</>
	)
}

export default CourseFilter