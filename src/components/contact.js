import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import ContactPage from './section-components/contact-page';
import Footer from './global-components/footer-use';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const {t} = useTranslation();
    return <div>
        <Navbar />
        <PageHeader headertitle={t('contactus')}  />
        <ContactPage tran={t}/>
        <Footer />
    </div>
}

export default Contact

