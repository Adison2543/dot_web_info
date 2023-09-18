import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV4 extends Component {

    componentDidMount() {

     const $ = window.$;

     $( 'body' ).removeClass( 'home-3' );

   }
   
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
			<div className="navbar-area">
        <nav className="navbar bg-white navbar-area-1 navbar-area navbar-expand-lg go-top">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button className="menu toggle-btn d-block d-lg-none" data-target="#edumint_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <Link to="/"><img src={publicUrl+"assets/img/LogoPWT.png"} alt="img" width={'140px'} /></Link>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <Link className="signin-btn" to="/">Sign In</Link>
              <Link className="btn btn-base" to="/">Sign Up</Link>
              <a className="search-bar" href="/"><i className="fa fa-search" /></a>
            </div>
            <div className="collapse navbar-collapse" id="edumint_main_menu">
              <ul className="navbar-nav menu-open">
                <li className="menu-item-has-children current-menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to={"/blog"}>News</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to={"/course"}>Course</Link>
                </li>
              </ul>
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <Link className="signin-btn" to="/">Sign In</Link>
              <Link className="btn btn-base" to="/">Sign Up</Link>
            </div>
          </div>
        </nav>
      </div>

        )
    }
}


export default NavbarV4