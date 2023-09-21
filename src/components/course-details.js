import React from 'react';
import { useEffect } from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import CourseDetails from './section-components/course-details';
import Footer from './global-components/footer';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div>
        <Navbar />
        <PageHeader headertitle={t('coursedetail')}  />
        <CourseDetails tran={t}/>
        <Footer />
    </div>
}

export default AboutPage

