import React from 'react';
import Navbar from './global-components/navbar-use';
import Banner from './section-components/banner';
import Intro from './section-components/intro';
import CourseFilter from './section-components/course-filter';
import FunFact from './section-components/fun-fact';
import HowToWork from './section-components/how-to-work';
import Testimonial from './section-components/testimonial-v2';
import LatestPost from './blog-components/latest-news';
import Footer from './global-components/footer-v2';
import Client from './section-components/client-v2';
import { Suspense } from 'react';
import Loading from 'react-loading';

const Home_V1 = () => {
    return <Suspense fallback={<Loading />}>
            <Navbar />
            <Banner />
            <Intro  />
            <LatestPost/>
            <FunFact />
            <CourseFilter />
            <Testimonial />
            <Client />
            <HowToWork />
            <Footer />
    </Suspense>
}

export default Home_V1

