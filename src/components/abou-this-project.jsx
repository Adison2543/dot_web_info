import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-use';

const about_this_project = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <div>
        <Navbar />
        <PageHeader headertitle={'About the Project'}  />

        <div className="contact-list pd-top-120 pd-bottom-90">
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div class="col-12 col-md-2 fw-bold">Project:</div>
                    <div class="col-12 col-md-8">Improvement of Driving License System in Lao PDR</div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div class="col-12 col-md-2 fw-bold">Assignment title:</div>
                    <div class="col-12 col-md-8">Consultancy Services for improving the quality of the driving licensing system, undertaking and to provide           technical assistance to Department of Transport, Ministry of Public Works and Transport in Lao PDR.</div>
                </div>
                <div className="row justify-content-center mb-3">
                    <div class="col-12 col-md-2 fw-bold">Introduction:</div>
                    <div class="col-12 col-md-8">The Department of Transport (DOT), Ministry of Public Works and Transport, Lao PDR has approved and supported the Driving License System Improvement Program under the United Nations Road Safety Fund (UNRSF) proposal and the project proposal submitted by the United Nations ESCAP. Driving license issuing system in Laos PDR by signing an agreement between UNESCAP and the Department of Transport, Lao PDR under a Letter of Agreement (LoA). which aims to jointly reduce traffic problems on the road injury and deaths in Lao PDR by improving road safety awareness and knowledge of all drivers. including introducing an online driving license issuing system and aims for cooperation in leveraging knowledge and experience from developed countries with good highway safety. To improve driving skills, training, safety education, there is a need to develop and deploy the online application system (OAS) and Driving test system (E-Driving) for Savannakhet Province as a pilot, and results from the trial of the developed system will be summarized and expect to be used throughout the country in the Lao PDR. Therefore, the Department of Transport, Ministry of Public Works and Transport organized a project to improve and develop the driving license system in Lao PDR.</div>
                </div>
                <div className="row justify-content-center">
                    <div class="col-12 col-md-2 fw-bold">Period:</div>
                    <div class="col-12 col-md-8">Jan 2022 - Apr 2024</div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div class="col-12 col-md-2 fw-bold">Sponsored and Supported by:</div>
                    <div class="col-12 col-md-8">
                        <img className='mx-2' src={publicUrl + "assets/img/partners/ursf2.jpg"} width={'110px'} alt="img" />
                        <img className='mx-2' src={publicUrl + "assets/img/partners/escap.png"} width={'130px'} alt="img" style={{ objectFit: 'contain' }} />
                    </div>
                </div>

                <hr className='mt-5 border border-dark' />
            </div>
        </div>

        <Footer />
    </div>
}

export default about_this_project

