import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import Course from './components/course';
import CourseDetails from './components/course-details';
import About from './components/about';
import Event from './components/event';
import EventDetails from './components/event-details';
import Instructor from './components/instructor';
import InstructorDetails from './components/instructor-details';
import Pricing from './components/pricing';
import Gallery from './components/gallery';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import Policy from './components/policy';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import menu_en from './trans/en/trans.json';
// import menu_th from './trans/th/trans.json'
import menu_lo from './trans/lo/trans.json';


i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: menu_en,
      },
      // th: {
      //   translation: menu_th,
      // },
      lo: {
        translation: menu_lo,
      },
    },
    fallbackLng: 'lo', // Default language
    debug: true, // Set to true for debugging
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

const Root = () => {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
                        <Route exact path="/" component={HomeV1} />
                        <Route path="/home-v2" component={HomeV2} />
                        <Route path="/home-v3" component={HomeV3} />
                        <Route path="/course" component={Course} />
                        <Route path="/course-details/:course_id/:course_name" component={CourseDetails} />
                        <Route path="/about" component={About} />
                        <Route path="/event" component={Event} />
                        <Route path="/event-details" component={EventDetails} />
                        <Route path="/instructor" component={Instructor} />
                        <Route path="/instructor-details" component={InstructorDetails} />
                        <Route path="/pricing" component={Pricing} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/contact-us" component={Contact} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/blog-details/:news_id/:news_title" component={BlogDetails} />
                        <Route path="/policy" component={Policy} />
	                </Switch>
	                </div>
                </HashRouter>
        )
}

export default Root;

ReactDOM.render(
<I18nextProvider i18n={i18n}>
<Root />
</I18nextProvider>,
document.getElementById('edumint'));
