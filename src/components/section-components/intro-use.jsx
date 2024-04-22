import React from 'react';

const Intro = ({tran}) => {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area intro-area--top">
			  <div className="container">
			    <div className="intro-area-inner intro-home-1 bg-black">
                    <div className="row no-gutters p-3">
                        <h3 className='text-white'>{tran('features')}</h3>
                    </div>
                    <div className="row px-5 text-center">
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/featureIcon/22.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 mt-1 fw-bold'>{tran('dotapp_feature1')}</h5>
                                    <p>{tran('dotapp_feature1_desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/featureIcon/33.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 mt-1 fw-bold'>{tran('dotapp_feature2')}</h5>
                                    <p>{tran('dotapp_feature2_desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/featureIcon/66.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 mt-1 fw-bold'>{tran('dotapp_feature3')}</h5>
                                    <p>{tran('dotapp_feature3_desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/featureIcon/44.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 mt-1 fw-bold'>{tran('dotapp_feature4')}</h5>
                                    <p>{tran('dotapp_feature4_desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/featureIcon/55.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 mt-1 fw-bold'>{tran('dotapp_feature5')}</h5>
                                    <p>{tran('dotapp_feature5_desc')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="single-intro-inner style-white text-center">
                                <div className="thumb">
                                    <img src={publicUrl+"assets/img/featureIcon/11.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                </div>
                                <div className="details">
                                    <h5 className='px-2 mt-1 fw-bold'>{tran('dotapp_feature6')}</h5>
                                    <p>{tran('dotapp_feature6_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
			    </div>
			  </div>
			</div>
        }

export default Intro