import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Blog from './blog-components/blog-details';
import Footer from './global-components/footer';
import { useTranslation } from 'react-i18next';

const BlogDetails = () => {
    const {t} = useTranslation();
    return <div>
        <Navbar />
        <PageHeader headertitle={t('news')}  />
        <Blog />
        <Footer />
    </div>
}

export default BlogDetails

