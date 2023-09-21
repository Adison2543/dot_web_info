import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Page_header = ({headertitle, subheader}) => {

		const {t} = useTranslation();
        let HeaderTitle = headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Subheader = subheader ? subheader : HeaderTitle

        return (


	<div className="breadcrumb-area bg-overlay" style={{backgroundImage: 'url("'+publicUrl+'assets/img/bg/3.png")'}}>
	  <div className="container">
	    <div className="breadcrumb-inner">
	      <div className="section-title mb-0 text-center">
	        <h2 className="page-title">{ HeaderTitle }</h2>
	        <ul className="page-list">
	          <li><Link to="/">{t('home')}</Link></li>
	          <li>{ Subheader }</li>
	        </ul>
	      </div>
	    </div>
	  </div>
	</div>



        )
    }


export default Page_header