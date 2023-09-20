import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Course from './section-components/course-page';
import Footer from './global-components/footer';
import { useEffect } from 'react';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div>
        <Navbar />
        <PageHeader headertitle="Courses"  />
        <Course />
        <Footer />
    </div>
}

export default AboutPage

