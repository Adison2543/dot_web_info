import React from 'react';

const Intro = ({tran}) => {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area intro-area--top">
			  <div className="container">
			    <div className="intro-area-inner intro-home-1 bg-black">
                    <div className="row no-gutters p-3">
                        <h3 className='text-white'>Features</h3>
                    </div>
                    <div className="row px-5 text-center">
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 fw-bold'>Online learning Course</h5>
                                    <p>At your own time and place, learn about traffic rule, sign, road safety, driving techniques, ethics, Maintenance ...etc</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 fw-bold'>Practice Theory Test</h5>
                                    <p>Try doing a theory test to familiarize the test questions and format for your selected license type</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 fw-bold'>News Update</h5>
                                    <p>Got news update and announcement about driving license and activities from Department of Transport</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 fw-bold'>Appointment for Exam</h5>
                                    <p>Select your convenient time to take the driving license exam after your have fulfill all requirements</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 fw-bold'>View Exam results</h5>
                                    <p>Check your driving license exam result after you have taken the exam and see your Driving license on the App!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 fw-bold'>Notify of Expiry</h5>
                                    <p>Get notified when your driving license is abbout expire</p>
                                </div>
                            </div>
                        </div>
                    </div>
			    </div>
			  </div>
			</div>
        }

export default Intro