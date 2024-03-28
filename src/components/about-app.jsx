import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-use';

const about_app = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <div>
        <Navbar />
        <PageHeader headertitle={'DoT Smart App'}  />

        <div className="contact-list pd-top-100">
            <div className="container">
                <div className="row mb-4">
                    <div className='col'>
                        <img className='mx-2' src={publicUrl + "assets/img/dotapplogo.png"} width={'80px'} alt="img" />
                    </div>
                    <div className='col'>
                        <div className='d-flex align-items-center flex-wrap'>
                            <p className='mb-0 fs-5 text-nowrap'>Download Now:</p>
                            <div className='d-flex flex-nowrap'>
                                <a href="https://play.google.com/store/apps/details?id=link.mpwt.dotsmart&hl=en-TH" target='_BLANK'><img className='mx-2' src={publicUrl + "assets/img/googleplay.png"} width={'200px'} alt="img" /></a>
                                <a className="d-flex" href="https://play.google.com/store/apps/details?id=link.mpwt.dotsmart"><img className='mx-2 align-self-center' src={publicUrl + "assets/img/appstore.svg"} width={'160px'} alt="img" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <p className='fw-bold fs-5'>Introduction</p>
                    <p>DoT Smart App is a mobile application running on iOS and Android, to make it easy for public to access information from Department of Transport, as well as learning online about the driving course before take the real exam and other feature related to driving license. We hope the public can gain more knowledge about driving and road safety thru this app.</p>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 px-4 mb-3">
                        <img className='mx-2' src={publicUrl + "assets/img/phoneapp.png"} alt="img" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-8">
                        <p className='fw-bold fs-5'>Features</p>
                        <p>DoT Smart App is a mobile application running on iOS and Android, to make it easy for public to access information from Department of Transport, as well as learning online about the driving course before take the real exam and other feature related to driving license. We hope the public can gain more knowledge about driving and road safety thru this app.</p>
                        <div className="row text-center">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>Online learning Course</p>
                                        <p>At your own time and place, learn about traffic rule, sign, road safety, driving techniques, ethics, Maintenance ...etc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>Practice Theory Test</p>
                                        <p>Try doing a theory test to familiarize the test questions and format for your selected license type</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>News Update</p>
                                        <p>Got news update and announcement about driving license and activities from Department of Transport</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>Appointment for Exam</p>
                                        <p>Select your convenient time to take the driving license exam after your have fulfill all requirements</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>View Exam results</p>
                                        <p>Check your driving license exam result after you have taken the exam and see your Driving license on the App!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>Notify of Expiry</p>
                                        <p>Get notified when your driving license is abbout expire</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mt-5 border border-dark' />
            </div>
        </div>

        <Footer />
    </div>
}

export default about_app

