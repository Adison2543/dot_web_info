import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-use';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Testimonial from './section-components/testimonial-use';
import coursenewList from './data/coursenew-list'
import { Link } from "react-router-dom";



const CourseNew = () => {
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    let publicUrl = process.env.PUBLIC_URL + '/';

    return <div>
        <Navbar />
        <PageHeader headertitle={t('new_course')}  />

            <div>
				<div className="contact-list pd-top-60 pd-bottom-60">
					<div className="container">
						{coursenewList.map((item)=>(
                            
                                <div className="row " key={item.course_id}>
                                    <div className=" text-center col-12 col-md-4">
                                    <Link to={`/course-new-details/${item.course_code}`}>
                                    <img className="" src={publicUrl+'assets/img/course/'+item.course_code+'.jpg'} style={{objectFit: 'cover'}} width={180}  alt={"img-" + item.course_code} />
                                    </Link>
                                    </div>

                                    <div className="col-12 col-md-8 py-2">
                                        <p className="fw-bold fs-4">{item.course_code} - { item.course_name_lo} 
                                            <br/> {item.course_name_en}
                                        </p>
                                        <p>
                                            <Link to={`/course-new-details/${item.course_code}`} className='btn btn-base'>{t('seemore')}</Link>
                                        </p>
                                    </div>
                                    <hr className='mt-5 border border-dark' />
                                </div>
                            
						))}
					</div>
				</div>
			</div>


        <Testimonial />
        <Footer />
    </div>
}

export default CourseNew

