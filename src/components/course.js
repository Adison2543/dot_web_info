import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Course from './section-components/course-page';
import Footer from './global-components/footer-use';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Testimonial from './section-components/testimonial-use';

const AboutPage = () => {
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div>
        <Navbar />
        <PageHeader headertitle={t('course')}  />
        <Course tran={t}/>
        <Testimonial />
        <Footer />
    </div>
}

export default AboutPage

