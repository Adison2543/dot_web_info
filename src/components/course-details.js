import React from 'react';
import { useEffect } from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import CourseDetails from './section-components/course-details';
import Footer from './global-components/footer';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div>
        <Navbar />
        <PageHeader headertitle="Courses Details"  />
        <CourseDetails />
        <Footer />
    </div>
}

export default AboutPage

