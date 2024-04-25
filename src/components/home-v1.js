import React, { lazy, Suspense } from 'react';
import Navbar from './global-components/navbar-use2';
// import Banner from './section-components/banner';
import Intro from './section-components/intro-use';
// import CourseFilter from './section-components/course-filter';
import Testimonial from './section-components/testimonial-use';
// import LatestPost from './blog-components/latest-news';
import Footer from './global-components/footer-use';
import Loading from 'react-loading';
import { useTranslation } from 'react-i18next';

const CourseFilter = lazy(() => import('./section-components/course-filter'));
const LatestPost = lazy(() => import('./blog-components/latest-news'));
const Banner = lazy(() => import('./section-components/banner'));



const Home_V1 = () => {
    const {t} = useTranslation();

    return <>
        <Navbar />
        <Suspense fallback={<Loading />}>
            <Banner tran={t}/>
        </Suspense>
        <Intro  tran={t}/>
        <Suspense fallback={<Loading />}>
            <LatestPost/>
        </Suspense>
        <Suspense fallback={<Loading />}>
            <CourseFilter />
        </Suspense>
        <Testimonial />
        <Footer />
    </>
}

export default Home_V1

