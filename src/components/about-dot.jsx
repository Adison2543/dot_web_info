import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-use';
import { useTranslation } from 'react-i18next';


const AboutDoT = () => {
    const {t} = useTranslation();
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <div>
        <Navbar />
        <PageHeader headertitle={t('about_dot')}  />

        <div className="contact-list pd-top-100">
            <div className="container">
                <div className="row mb-4">
                    <p className='fw-bold fs-5'>{t('abdot_rol')}</p>
                    <p>{t('abdot_rold')}</p>
                </div>
                <div className="row">
                    <p className='fw-bold fs-5'>{t('abdot_dia')}</p>
                    <img className='mx-2' src={publicUrl + "assets/img/aboutdot.webp"} alt="img" />
                    <p>{t('last_update')}: 01/03/2024</p>
                </div>

                <hr className='mt-5 border border-dark' />
            </div>
        </div>

        <Footer />
    </div>
}

export default AboutDoT

