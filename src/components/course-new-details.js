import React from 'react';
import { useEffect } from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import CourseDetails from './section-components/course-details';
import Footer from './global-components/footer-use';
import { useTranslation } from 'react-i18next';
import Testimonial from './section-components/testimonial-use';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {  Route, Switch } from "react-router-dom";
import CourseDetailsA1 from './section-components/coursenew-details/A1';
import CourseDetailsA2 from './section-components/coursenew-details/A2';
import CourseDetailsC from './section-components/coursenew-details/C';
import CourseDetailsC1 from './section-components/coursenew-details/C1';
import CourseDetailsC2 from './section-components/coursenew-details/C2';
import CourseDetailsD from './section-components/coursenew-details/D';
import CourseDetailsD2 from './section-components/coursenew-details/D2';


const CourseNewDetails = () => {
    const {course_code} = useParams();
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    let publicUrl = process.env.PUBLIC_URL + '/';

    return <div>
        <Navbar />
        <PageHeader headertitle={t('coursedetail')}  />
        <div className="container"  style={{"padding-top": "8px"}}> 
           <Link to="/course-new" smooth="true" className='btn btn-base b-animate-3'> <span className='fa fa-chevron-left'/> {t('back_to')} {t('new_course')}</Link>
        </div>

        <Switch>
            <Route path="/course-new-details/A1" component={CourseDetailsA1} />
            <Route path="/course-new-details/A2" component={CourseDetailsA2} />
            <Route path="/course-new-details/C" component={CourseDetailsC} />
            <Route path="/course-new-details/C1" component={CourseDetailsC1} />
            <Route path="/course-new-details/C2" component={CourseDetailsC2} />
            <Route path="/course-new-details/D" component={CourseDetailsD} />
            <Route path="/course-new-details/D2" component={CourseDetailsD2} />
        </Switch>

        <Testimonial />
        <Footer />
    </div>
}

export default CourseNewDetails

