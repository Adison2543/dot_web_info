import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Blog from './blog-components/blog';
import Footer from './global-components/footer';
import { useTranslation } from 'react-i18next';

const SingUpPage = () => {
    const {t} = useTranslation();
    return <div>
        <Navbar />
        <PageHeader headertitle={t('allnews')}  />
        <Blog />
        <Footer />
    </div>
}

export default SingUpPage

