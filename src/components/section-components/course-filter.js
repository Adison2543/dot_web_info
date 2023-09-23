import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './course-card';
import { useTranslation } from 'react-i18next';

const CourseFilter = () => {
	const [courses, setCourse] = useState([]);
	const {t} = useTranslation();

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
			          <h2 className="title">{t('topcourse')}</h2>
			        </div>
			      </div>
			    </div>
			    <div className="tab-content go-top" id="myTabContent">
					<div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
						<div className="row">
							{courses?.map((item) => (
								<CourseCard key={item.course_id} course={item} tran={t}></CourseCard>
							))}
						</div>
					</div>
			    </div>
				
				{courses ? 
				<div className='row'>
					<div className='d-flex justify-content-end'>
						<Link to={"/course"}><button className='seemoreBtn'><span>{t('seemore')}</span></button></Link>
					</div>
				</div>
				: <><div className='text-center'><span className="badge text-bg-warning">{t('notfound')}</span></div></>}
			  </div>
			</div>
		</>
	)
}

export default CourseFilter