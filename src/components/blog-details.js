import React from 'react';
import Navbar from './global-components/navbar-use2';
import PageHeader from './global-components/page-header';
import Blog from './blog-components/blog-details';
import Footer from './global-components/footer';

const BlogDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="News"  />
        <Blog />
        <Footer />
    </div>
}

export default BlogDetails

