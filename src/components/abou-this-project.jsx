import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-use';
import { useTranslation } from 'react-i18next';


const AboutThisProject = () => {
    const {t} = useTranslation();
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <div>
        <Navbar />
        <PageHeader headertitle={t('about_proj')}  />

        <div className="contact-list pd-top-100">
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-12 col-md-2 fw-bold">{t('abproj_proj')}:</div>
                    <div className="col-12 col-md-8">{t('abproj_projd')}</div>
                </div>
               
                <div className="row justify-content-center mb-3">
                    <div className="col-12 col-md-2 fw-bold">{t('abproj_intro')}:</div>
                    <div className="col-12 col-md-8">{t('abproj_introd')}</div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-2 fw-bold">{t('abproj_period')}:</div>
                    <div className="col-12 col-md-8">{t('abproj_periodd')}</div>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-12 col-md-2 fw-bold">{t('abproj_supp')}:</div>
                    <div className="col-12 col-md-8">
                        <img className='mx-2' src={publicUrl + "assets/img/partners/ursf2.webp"} width={'110px'} alt="img" />
                        <img className='mx-2' src={publicUrl + "assets/img/partners/escap.webp"} width={'130px'} alt="img" style={{ objectFit: 'contain' }} />
                    </div>
                </div>

                <hr className='mt-5 border border-dark' />
            </div>
        </div>

        <Footer />
    </div>
}

export default AboutThisProject

