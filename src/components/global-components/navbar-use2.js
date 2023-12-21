import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbaruse2 = () => {
      const {t, i18n } = useTranslation();

      useEffect ( () => {
        const $ = window.$;
        $( 'body' ).removeClass( 'home-3' );
      },[])

      const changeLanguage = (e) => {
        console.log("ChangeLanguage: ",e.target.value);
        i18n.changeLanguage(e.target.value);
      };
      const getlange = () => {
        return i18n.language;
      }
   

        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
			<div className="navbar-area">
        <nav className="navbar bg-white navbar-area-1 navbar-area navbar-expand-lg go-top">
        <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button className="menu toggle-btn d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#edumint_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link to="/"><img src={publicUrl+"assets/img/LogoPWT.png"} alt="img" width={'140px'} /></Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <a className="btn btn-base" href="/">{t('signup')}</a>
              {/* <a className="search-bar" href="#"><i className="fa fa-search" /></a> */}
            </div>
            <div className="collapse navbar-collapse go-top" id="edumint_main_menu">
              <ul className="navbar-nav menu-open">
                <li className=" current-menu-item">
                    <Link to="/">{t('home')}</Link>
                </li>
                <li className="">
                    <Link to="/blog" smooth>{t('news')}</Link>
                </li>
                <li className="">
                    <Link to="/course" smooth>{t('course')}</Link>
                </li>
                <li>
                  <div className="nav-right-part-mobile">
                    <select className="form-select" value={getlange()}  onChange={changeLanguage} aria-label="Default select example">
                      <option value="lo" >ລາວ</option>
                      {/* <option value="th">ไทย</option> */}
                      <option value="en">English</option>
                    </select>
                  </div>
                </li>
                <li><Link className="nav-right-part-mobile btn btn-base" to="/">{t('signup')}</Link></li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <div style={{display: "inline-block"}}>
                <i className="bi bi-globe"></i>
              </div>
              <div style={{display: "inline-block"}}>
                <select className="" id='lang_select' value={getlange()}  onChange={changeLanguage} aria-label="Default select example">
                  <option value="lo" >ລາວ</option>
                  {/* <option value="th" >ไทย </option> */}
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <a className="btn btn-base" href="https://dot-learning.mpwt.link/" target='_blank'>{t('signup')}</a>
              {/* <a className="search-bar" href="#"><i className="fa fa-search" /></a> */}
            </div>
          </div>
        </nav>
      </div>

        )
    }

export default Navbaruse2