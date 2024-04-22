import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-use';
import { useTranslation } from 'react-i18next';

const AboutApp = () => {
    const {t} = useTranslation();
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <div>
        <Navbar />
        <PageHeader headertitle={t('about_app')}  />

        <div className="contact-list pd-top-100">
            <div className="container">
                <div className="row mb-4">
                    <div className='col'>
                        <img className='mx-2' src={publicUrl + "assets/img/dotapplogo.webp"} width={'80px'} alt="img" />
                    </div>
                    <div className='col'>
                        <div className='d-flex align-items-center justify-content-end flex-wrap'>
                            <p className='mb-0 fs-5 text-nowrap'>{t('download')}:</p>
                            <div className='d-flex flex-nowrap'>
                                <a href="https://play.google.com/store/apps/details?id=link.mpwt.dotsmart&hl=en-TH" target='_BLANK'><img className='mx-2' src={publicUrl + "assets/img/googleplay.png"} width={'200px'} alt="img" /></a>
                                {/* <a className="d-flex" href="#"><img className='mx-2 align-self-center' src={publicUrl + "assets/img/appstore.svg"} width={'160px'} alt="img" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <p className='fw-bold fs-5'>{t('introduction')}</p>
                    <p>{t('dotapp_intro')}</p>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 px-4 mb-3">
                        <img className='mx-2' src={publicUrl + "assets/img/phoneapp.webp"} alt="img" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-8">
                        <p className='fw-bold fs-5'>{t('features')}</p>
                        <p>{t('dotapp_feature')}</p>
                        <div className="row text-center">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/featureIcon/22.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>{t('dotapp_feature1')}</p>
                                        <p>{t('dotapp_feature1_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/featureIcon/33.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>{t('dotapp_feature2')}</p>
                                        <p>{t('dotapp_feature2_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/featureIcon/66.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>{t('dotapp_feature3')}</p>
                                        <p>{t('dotapp_feature3_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/featureIcon/44.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>{t('dotapp_feature4')}</p>
                                        <p>{t('dotapp_feature4_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/featureIcon/55.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>{t('dotapp_feature5')}</p>
                                        <p>{t('dotapp_feature5_desc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="single-intro-inner text-center">
                                    <div className="thumb">
                                        <img src={publicUrl+"assets/img/featureIcon/11.png"} style={{ width:'90px', height:'90px' }} alt="img" />
                                    </div>
                                    <div className="details">
                                        <p className='px-2 fw-bold'>{t('dotapp_feature6')}</p>
                                        <p>{t('dotapp_feature6_desc')}</p>
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

export default AboutApp

