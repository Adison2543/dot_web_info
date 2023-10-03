import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer_v1 = () => {
	const {t} = useTranslation();
	useEffect(() => {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}, [])

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<footer className="footer-area bg-gray">
				{/* <div className="footer-subscribe">
					<div className="container">
						<form className="footer-subscribe-inner">
							<div className="row">
								<div className="col-lg-5">
									<div className="single-input-inner style-border-bottom">
										<input type="text" placeholder="Your Full Name" />
									</div>
								</div>
								<div className="col-lg-5">
									<div className="single-input-inner style-border-bottom">
										<input type="text" placeholder="Your Email Address" />
									</div>
								</div>
								<div className="col-lg-2">
									<a className="btn btn-base" href="#">Subscribe</a>
								</div>
							</div>
						</form>
					</div>
				</div> */}
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_contact">
									<h4 className="widget-title">{t('contactus')}</h4>
									<ul className="details">
										<li><i className="fa fa-map-marker" /><a href='https://goo.gl/maps/jaLiar7ATJGSsCSa7' target='_BLANK' rel="noopener noreferrer"><i className="fa fa-map-marker" />{t('pwt')}</a></li>
										<li><i className="fa fa-envelope" /> {t('fax')}: 856-21 412250</li>
										<li><i className="fa fa-phone" /> 856-21 412255 , {t('hotline')} 1518</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_nav_menu">
									<h4 className="widget-title">{t('course')}</h4>
									<ul className="go-top">
										<li><Link to={"/course"}>{t('allcourse')}</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 go-top">
								<div className="widget widget_blog_list">
									<h4 className="widget-title">{t('lastestnews')}</h4>
									<ul>
										<li>
											<Link to={"/blog"}>{t('allnews')}</Link>
											{/* <span className="date"><i className="fa fa-calendar" />December 7, 2021</span> */}
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_contact">
									<h4 className="widget-title">{t('maps')}</h4>
									<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15180.631023576447!2d102.620475!3d17.971396!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31246878b7435caf%3A0x215a427216976433!2sMinistry%20of%20Public%20Travel%20and%20Transport!5e0!3m2!1slo!2sla!4v1696299481356!5m2!1slo!2sla" 
										width="600" 
										height="150" 
										style={{border: 0}}
										allowfullscreen="" 
										loading="lazy" 
										referrerpolicy="no-referrer-when-downgrade"
										title="Ministry of Public Travel and Transport Map"
										></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-sm-2 col-md-4 align-self-center">
								<a href="index.html"><img src={publicUrl + "assets/img/LogoPWT.png"} width={'130px'} alt="img" /></a>
							</div>
							{/* <div className="col-lg-4  col-md-6 order-lg-12 text-md-right align-self-center">
								<ul className="social-media mt-md-0 mt-3">
									<li><a className="facebook" href="https://www.facebook.com/"><i className="fa fa-facebook" /></a></li>
									<li><a className="twitter" href="https://www.twitter.com/"><i className="fa fa-twitter" /></a></li>
									<li><a className="instagram" href="https://www.youtube.com/"><i className="fa fa-instagram" /></a></li>
									<li><a className="youtube" href="https://www.youtube.com/"><i className="fa fa-youtube" /></a></li>
									<li><a className="pinterest" href="https://www.pinterest.com/"><i className="fa fa-pinterest" /></a></li>
								</ul>
							</div> */}
							<div className="col-sm-8 col-lg-6 order-lg-8 text-lg-center align-self-center mt-lg-0 mt-3">
								<p>Copyright © Ministry of Public Works and Transport</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

		)
	}


export default Footer_v1