import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Blog from './blog-components/blog';
import Footer from './global-components/footer';

const SingUpPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="All News"  />
        <Blog />
        <Footer />
    </div>
}

export default SingUpPage

