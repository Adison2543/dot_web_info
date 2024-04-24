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
                <div className="row mb-4">
                    <p className='fw-bold fs-5'>{t('abdot_resp')}</p>
                    <ol>
                        <li>{t('abdot_resp1_desc')}</li>
                        <li>{t('abdot_resp2_desc')}</li>
                        <li>{t('abdot_resp3_desc')}</li>
                        <li>{t('abdot_resp4_desc')}</li>
                        <li>{t('abdot_resp5_desc')}</li>
                        <li>{t('abdot_resp6_desc')}</li>
                        <li>{t('abdot_resp7_desc')}</li>
                        <li>{t('abdot_resp8_desc')}</li>
                        <li>{t('abdot_resp9_desc')}</li>
                        <li>{t('abdot_resp10_desc')}</li>
                        <li>{t('abdot_resp11_desc')}</li>
                        <li>{t('abdot_resp12_desc')}</li>
                        <li>{t('abdot_resp13_desc')}</li>
                        <li>{t('abdot_resp14_desc')}</li>
                        <li>{t('abdot_resp15_desc')}</li>
                    </ol>
                </div>
                <div className="row">
                    <p className='fw-bold fs-5'>{t('abdot_dia')}</p>
                    <img className='mx-2' src={publicUrl + "assets/img/dot-orgchart-"+t('cur_lang')+".png"} alt="img" />
                    <p>{t('last_update')}: 01/03/2024</p>
                </div>

                <hr className='mt-5 border border-dark' />
            </div>
        </div>

        <Footer />
    </div>
}

export default AboutDoT

