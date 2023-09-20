import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './course-card';

const CourseFilter = () => {
	const [courses, setCourse] = useState([]);

	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", "ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p");

		try {
			const data = fetch("https://oasapi.iddriver.com/course/list", {
				method: 'POST',
				headers: myHeaders,
				body: JSON.stringify({
					"page": 1,
					"per_page": 6,
					"search": ""
				}),
				redirect: 'follow'
			})
			.then(response => response.json())
			.then(result => {
				console.log("res: " + JSON.stringify(result.data));
				setCourse(result.data);
			})
			.catch(error => console.log('error', error));
		} catch (error) {
			console.log("Fetch Error: ", error);
		}
	}, []);

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
			    {/* <div className="edmt-nav-tab style-white text-center">
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
			    </div> */}
			    <div className="tab-content go-top" id="myTabContent">
					<div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
						<div className="row">
							{courses?.map((item) => (
								<CourseCard key={item.course_id} course={item}></CourseCard>
							))}
						</div>
					</div>
			    </div>
				
				{courses ? 
				<div className='row'>
					<div className='d-flex justify-content-end'>
						<Link to={"/course"}><button className='seemoreBtn'><span>See more</span></button></Link>
					</div>
				</div>
				: <><div className='text-center'><span className="badge text-bg-warning">ไม่พบข้อมูลบทเรียน</span></div></>}
			  </div>
			</div>
		</>
	)
}

export default CourseFilter