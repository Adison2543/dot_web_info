import React, { useEffect } from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import '../css/navbar.css';
import { LINK_LEARNING } from '../../appConfig';

const Navbar = () => {
    const {t, i18n } = useTranslation();

    useEffect(() => {
      const $ = window.$;
      $('body').removeClass('home-3');
    }, []);

    const changeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
    };
    const getlange = () => {
      return i18n.language;
    }

    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="navbar-area">
        <nav className="navbar navbar-area-1 navbar-area navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button className="menu toggle-btn d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#edumint_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link to="/"><img src={publicUrl+"assets/img/logoPWT02.png"} alt="img" width={'140px'} /></Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <a className="btn btn-base" href={LINK_LEARNING}>{t('signup')}</a>
            </div>
            <div className="collapse navbar-collapse go-top" id="edumint_main_menu">
              <ul className="navbar-nav menu-open ps-lg-1">
                <li className=" current-menu-item">
                  <Link to="/">{t('home')}</Link>
                </li>
                <li className="menu-item-has-children">
			            <Link to="#">{t('info_menu')}</Link>
			            <ul className="sub-menu">
				            <li><Link to="/about-the-project">{t('about_proj')}</Link></li>
	                  <li><Link to="/about-dot">{t('about_dot')}</Link></li>
	                  <li><Link to="/about-app">{t('about_app')}</Link></li>
	                  <li><Link to="/course">{t('online_course')}</Link></li>
			            </ul>
			          </li>
                <li className="">
                  <Link to="/license-procedure" smooth="true">{t('license_proc')}</Link>
                </li>
                <li className="">
                    <Link to="/blog" smooth="true">{t('news')}</Link>
                </li>
                <li><Link to="/contact-us" smooth="true">{t('contact')}</Link></li>
                <li>
                  <div className="nav-right-part-mobile">
                    <select className="form-select" value={getlange()}  onChange={changeLanguage} aria-label="Default select example">
                      <option value="lo" >ລາວ</option>
                      {/* <option value="th">ไทย</option> */}
                      <option value="en">English</option>
                    </select>
                  </div>
                </li>
                <li>
                  <a className="btn btn-base nav-right-part-mobile" href={LINK_LEARNING}>{t('signup')}</a>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              {/* <div style={{display: "inline-block"}}>
                <i className="bi bi-globe"></i>
              </div> */}
              <div style={{display: "inline-block"}}>
                <select className="" id='lang_select' value={getlange()}  onChange={changeLanguage} aria-label="Default select example">
                  <option value="lo" >ລາວ</option>
                  {/* <option value="th" >ไทย </option> */}
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <Link className="btn btn-success text-white" to="/about-app">Download App</Link>
              <a className="btn btn-base" href={LINK_LEARNING} >{t('signup')}</a>
            </div>
            {/* <div className="nav-right-part nav-right-part-desktop">
              <Link className="signin-btn" to="/sign-in">Sign In</Link>
              <Link className="btn btn-base" to="/sign-up">Sign Up</Link>
            </div> */}
          </div>
        </nav>
      </div>


    )
}


export default Navbar