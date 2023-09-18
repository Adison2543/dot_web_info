import React, { Component } from 'react';
import { HashLink as Link} from 'react-router-hash-link';

class Navbar extends Component {

   componentDidMount() {

     const $ = window.$;

     $( 'body' ).removeClass( 'home-3' );

   }

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
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
                  <Link to="/"><img src={publicUrl+"assets/img/LogoPWT.png"} alt="img" width={'140px'} /></Link>
                </div>
                <div className="nav-right-part nav-right-part-mobile">
                  <a className="signin-btn" href="signin.html">Sign In</a>
                  <a className="btn btn-base" href="blog.html">Sign Up</a>
                  {/* <a className="search-bar" href="#"><i className="fa fa-search" /></a> */}
                </div>
                <div className="collapse navbar-collapse go-top" id="edumint_main_menu">
                  <ul className="navbar-nav menu-open">
                    <li className=" current-menu-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="">
                        <Link to="#news" smooth>News</Link>
                    </li>
                    <li className="">
                      <Link to="#course" smooth>Course</Link>
                    </li>
                    <li className="">
                      <Link to="#activity" smooth>Activity</Link>
                    </li>
                    <li><Link to="#footer" smooth>Contact Us</Link></li>
                  </ul>
                </div>
                <div className="nav-right-part nav-right-part-desktop">
                  <Link className="signin-btn" to="/sign-in">Sign In</Link>
                  <Link className="btn btn-base" to="/sign-up">Sign Up</Link>
                  {/* <a className="search-bar" href="#"><i className="fa fa-search" /></a> */}
                </div>
              </div>
            </nav>
          </div>


        )
    }
}


export default Navbar