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
			<footer className="footer-area">
				<div className="footer-top">
					<div className="container">
						<div className="row">
                            <div className="col-lg-4 col-md-6">
								<div className="widget widget_nav_menu">
									<h6 className="">{t('foot_dot')}</h6>
									<img src={publicUrl + "assets/img/LogoPWT.webp"} width={'130px'} alt="img" />
                                    <hr />
                                    <h6 className="">{t('foot_sponsor_by')}:</h6>
                                    <div className='d-flex gap-2'>
                                        <img src={publicUrl + "assets/img/partners/ursf2.webp"} width={'110px'} alt="img" />
                                        <img src={publicUrl + "assets/img/partners/escap.webp"} width={'130px'} alt="img" style={{ objectFit: 'contain' }} />
                                    </div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="widget widget_contact">
									<h4 className="widget-title">{t('foot_contact')}</h4>
									<ul className="details">
										<li>
                                            <p><i className="fa fa-map-marker" />{t('foot_address')}</p>
                                            <a href='https://goo.gl/maps/jaLiar7ATJGSsCSa7' target='_BLANK' rel="noopener noreferrer" className='text-primary'>{t('foot_open_map')}</a>
                                            </li>
										<li><i className="fa fa-envelope" /> depttransportlaos@gmail.com</li>
										<li><i className="fa fa-phone" /> +856-21 412270</li>
										<li><i className="fa fa-facebook-square"></i> <a href="" className='text-primary'>ກົມຂົນສົ່ງ ກຊ ຍທຂ</a></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 go-top">
								<div className="widget widget_blog_list">
									<h4 className="widget-title">{t('foot_links')}</h4>
									<ul>
										<li>
											<a href="" className='text-primary'>{t('lnk_mpwt')}</a>
										</li>
										<li>
											<a href="" className='text-primary'>{t('lnk_vientiane_vrdl')}</a>
										</li>
										<li>
											<a href="" className='text-primary'>{t('lnk_relate_gov_web')}</a>
										</li>
										<li>
                                            <Link to="/policy" smooth="true" className='text-primary'>{t('lnk_term_policy')}</Link>
											{/* <a href="/policy" className='text-primary'>{t('lnk_term_policy')}</a> */}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom" style={{ backgroundColor: 'var(--main-color)' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-7 col-sm-12 align-self-center">
                                <p>{t('foot_copyright')}</p>
							</div>
							<div className="col-sm-12 col-lg-5 order-lg-8 text-lg-end align-self-center mt-lg-0 mt-3">
								<p>{t('developed_by')}: <a href="https://www.datacom.la/" target='_BLANK' className='text-primary'>Datacom Co.,Ltd</a> & <a href="https://iddrives.co.th/web/" className='text-primary' target='_BLANK'>ID Drives Co., Ltd</a></p>
							</div>
						</div>
					</div>
				</div>
			</footer>

		)
	}


export default Footer_v1