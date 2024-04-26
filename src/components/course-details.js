import React from 'react';
import { useEffect } from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import CourseDetails from './section-components/course-details';
import Footer from './global-components/footer-use';
import { useTranslation } from 'react-i18next';
import Testimonial from './section-components/testimonial-use';
import { Link } from 'react-router-dom';


const AboutPage = () => {
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    let publicUrl = process.env.PUBLIC_URL + '/';

    return <div>
        <Navbar />
        <PageHeader headertitle={t('coursedetail')}  />
        <div className="container"  style={{"padding-top": "8px"}}> 

            <Link to="/course" smooth="true" className='btn btn-base b-animate-3'>{t('back_to')} {t('online_course')}</Link>
        </div>
       
        
        <CourseDetails tran={t}/>
        <Testimonial />
        <Footer />
    </div>
}

export default AboutPage

