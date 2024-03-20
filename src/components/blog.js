import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Blog from './blog-components/blog';
import Footer from './global-components/footer-use';
import { useTranslation } from 'react-i18next';


const SingUpPage = () => {
    const {t} = useTranslation();
    return <div>
        <Navbar />
        <PageHeader headertitle={t('allnews')}  />
        <Blog />
        <hr className='mt-5 border border-dark' />
        <Footer />
    </div>
}

export default SingUpPage

