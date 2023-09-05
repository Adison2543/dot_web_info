import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Intro from './section-components/intro';
import About from './section-components/about';
import CourseFilter from './section-components/course-filter';
import FunFact from './section-components/fun-fact';
import HowToWork from './section-components/how-to-work';
import Testimonial from './section-components/testimonial-v2';
import Team from './section-components/team';
import LatestPost from './blog-components/latest-news';
import Contact from './section-components/contact';
import Footer from './global-components/footer-v2';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Intro />
        <LatestPost />
        {/* <About /> */}
        <FunFact />
        <CourseFilter />
        <Testimonial />
        <HowToWork />
        {/* <Team /> */}
        {/* <Contact /> */}
        <Footer />
    </div>
}

export default Home_V1

