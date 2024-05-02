import React from 'react';
import '../css/testimonialV2.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { useTranslation } from 'react-i18next';
import { LINK_LEARNING } from '../../appConfig';

const TestimonialV2 = () => {

	let publicUrl = process.env.PUBLIC_URL+'/'
	const {t} = useTranslation();

    return <div className="testimonial-area pd-top-100 pd-bottom-100" style={{backgroundImage: 'url('+publicUrl+'assets/img/testimonial/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-10 col-md-11">
                    <div className="text-center">
                        <p className="fs-5 sub-title">{t('signup_title')}</p>
                        <a className="btn btn-base b-animate-3" href={LINK_LEARNING + '/register'} >{t('signup_btn')}</a>
                    </div>
                </div>
            </div>
        </div>
	</div>

  }

export default TestimonialV2