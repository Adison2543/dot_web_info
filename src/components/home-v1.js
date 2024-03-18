import React from 'react';
import Navbar from './global-components/navbar-use';
import Banner from './section-components/banner';
import Intro from './section-components/intro-use';
import CourseFilter from './section-components/course-filter';
import FunFact from './section-components/fun-fact';
import HowToWork from './section-components/how-to-work';
import Testimonial from './section-components/testimonial-use';
import LatestPost from './blog-components/latest-news';
import Footer from './global-components/footer-use';
import { Suspense } from 'react';
import Loading from 'react-loading';
import { useTranslation } from 'react-i18next';

const Home_V1 = () => {
    const {t} = useTranslation();

    return <Suspense fallback={<Loading />}>
            <Navbar />
            <Banner tran={t}/>
            <Intro  tran={t}/>
            <LatestPost/>
            {/* <FunFact tran={t}/> */}
            <CourseFilter />
            <Testimonial />
            {/* <Client /> */}
            {/* <HowToWork /> */}
            <Footer />
    </Suspense>
}

export default Home_V1

