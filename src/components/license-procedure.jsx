import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer-use';
import { useTranslation } from 'react-i18next';


const LicenseProcedure = () => {
    const {t} = useTranslation();
    let publicUrl = process.env.PUBLIC_URL + '/'
    return <div>
        <Navbar />
        <PageHeader headertitle={t('license_proc')}  />

        <div className="contact-list pd-top-100">
            <div className="container">
                <div className="row mb-5">
                    <p>{t('proc_det')}:</p>
                </div>
                <div className="row mb-5">
                    <p className='fw-bold fs-5'>{t('proc_det1')}</p>
                    <ul className='px-5'>
                        <li>{t('proc_det11')}</li>
                        <li>{t('proc_det12')}</li>
                        <li>{t('proc_det13')}</li>
                        <li>{t('proc_det14')}</li>
                    </ul>
                </div>
                <div className="row mb-5">
                    <p className='fw-bold fs-5'>{t('proc_det2')}</p>
                    <ul className="px-5">
                        <li>{t('proc_det21')}</li>
                        <li>{t('proc_det22')}</li>
                        <li>{t('proc_det23')}</li>
                        <li>{t('proc_det24')}</li>
                        <li>{t('proc_det25')}</li>
                        <li>{t('proc_det26')}</li>
                    </ul>
                </div>
                
                <div className="row mb-5">
                    <p><i className="fa fa-file-pdf-o color-red" /> {t('proc_det3')} <span> - <a href={publicUrl + "assets/pdf/18942_ຄຳແນະນຳ_ວ່າດ້ວຍການຄຸ້ມຄອງໃບຂັບະຂີ່ຍານພາຫະນະຂົນສົ່ງທາງບົກ.pdf"} className='text-primary'>{t('download')}</a></span></p>
                    <p><i className="fa fa-file-pdf-o color-red" /> {t('proc_det4')} <span> - <a href={publicUrl + "assets/pdf/ຂັ້ນຕອນແລະຄຳແນະນຳການສອບເສັງໃບຂັບຂີ່.pdf"} className='text-primary'>{t('download')}</a></span></p>
                </div>
                <p>{t('last_update')}: 01/03/2024</p>
                <hr className='mt-5 border border-dark' />
            </div>
        </div>

        <Footer />
    </div>
}

export default LicenseProcedure

