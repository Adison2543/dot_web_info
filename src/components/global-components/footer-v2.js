import React, { Component } from 'react';
import { HashLink as Link} from 'react-router-hash-link';

class Footer_v2 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}
	

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<footer className="footer-area footer-area-2 bg-gray" id='footer'>
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_about text-center" style={{marginTop: '-140px'}}>
									<a href="index.html" ><img src={publicUrl+"assets/img/LogoPWT.png"} width={'150px'} alt="img" /></a>
									<div className="details">
										<p style={{fontSize:'12px'}}>ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ ຂຽນຫຍໍ້: “ຍ. ທ. ຂ” ຂຽນເປັນພາສາຝຣັ່ງ: Ministère de Travaux Public et de Transports (ຂຽນຫຍໍ້: MTPT) ແມ່ນກົງຈັກຂອງລັດຖະບານ, ມີພາລະບົດບາດ ເປັນເສນາທິການໃຫ້ແກ່ລັດຖະບານ ໃນການຄຸ້ມຄອງມະຫາພາກ ກ່ຽວກັບຂະແໜງການຄົມມະນາຄົມ, ຂົນສົ່ງ ທາງບົກ, ທາງນ້ຳ, ທາງອາກາດ, ທາງລົດໄຟ, ການເຄຫາສະຖານ, ຜັງເມືອງ ແລະ ນ້ຳປະປາ ໃນຂອບເຂດ ທົ່ວປະເທດ.</p>
										<ul className="social-media">
											<li><a href="https://www.facebook.com/solverwp/" className='mb-0'><i className="fa fa-facebook" /></a></li>
											<li><a href="https://www.twitter.com/solverwp" className='mb-0'><i className="fa fa-twitter" /></a></li>
											<li><a href="https://www.youtube.com/solverwp/" className='mb-0'><i className="fa fa-instagram" /></a></li>
											<li><a href="https://www.pinterest.com/solverwp/" className='mb-0'><i className="fa fa-pinterest" /></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_contact">
									<h4 className="widget-title">Contact Us</h4>
									<ul className="details">
										<li><a href='https://goo.gl/maps/jaLiar7ATJGSsCSa7' target='_BLANK' rel="noopener noreferrer"><i className="fa fa-map-marker" /> Ministry of Public Works and Transport of Lao PDR</a></li>
										<li><i className="fa fa-envelope" /> Fax: 856-21 412250</li>
										<li><i className="fa fa-phone" /> 856-21 412255 , ສາຍດ່ວນ 1518</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_blog_list">
									<h4 className="widget-title">News &amp; Blog</h4>
									<ul>
										<li>
											<h6><Link to="/blog-details">Big Ideas Of Business Branding Info.</Link></h6>
											<span className="date"><i className="fa fa-calendar" />December 7, 2021</span>
										</li>
										<li>
											<h6><Link to="/blog-details">Ui/Ux Ideas Of Business Branding Info.</Link></h6>
											<span className="date"><i className="fa fa-calendar" />December 7, 2021</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_nav_menu">
									<h4 className="widget-title">Course</h4>
									<ul className="go-top">
										<li><Link to="/blog">Branding design</Link></li>
										<li><Link to="/blog">Ui/Ux designing </Link></li>
										<li><Link to="/blog">Make Elements</Link></li>
										<li><Link to="/blog">Business</Link></li>
										<li><Link to="/blog">Graphics design</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-md-5 align-self-center">
								<p>Copyright © Ministry of Public Works and Transport</p>
							</div>
							<div className="col-md-7 text-md-right align-self-center mt-md-0 mt-2">
								<div className="widget_nav_menu">
									<ul className="go-top">
										<li><Link to="/">Home</Link></li>
										<li><Link to="#news" smooth>News</Link></li>
										<li><Link to="#course" smooth>Course</Link></li>
										<li><Link to="#activity" smooth>Activity</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		)
	}
}


export default Footer_v2