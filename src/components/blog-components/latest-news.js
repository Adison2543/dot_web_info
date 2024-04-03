import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/newsLast.css";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { API_BASE_URL, API_HEADERS } from '../../appConfig';

const LatestNews = () => {
	const [news, setNews] = useState([]);
	// const [news2, setNews2] = useState([]);
	const {t} = useTranslation();
 
	const gatDay = (dateData) => {
		const date = new Date(dateData);
		return date.getUTCDate();
	};

	const gatMonth = (dateData) => {
		const date = new Date(dateData);
		const monthAbbreviations = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
		return monthAbbreviations[date.getUTCMonth()];
	};

	const gatFDate = (dateData) => {
		const date = new Date(dateData);
		const monthNames = [
			t('january'), t('february'), t('march'), t('april'), t('may'), t('june'),
			t('july'), t('august'), t('september'), t('october'), t('november'), t('december')
		];
		const day = date.getDate();
		const month = monthNames[date.getMonth()];
		const year = date.getFullYear();
		return `${day} ${month}, ${year}`;
	};

	useEffect(() => {
		let isMounted = true;
		async function fetchData() {
			try {
				let fetchNews1 = await axios.post(`${API_BASE_URL}/news/list?news_type=1`, 
					{
						page: 1,
						per_page: 5,
						search: ''

					}, {
						headers: API_HEADERS
				});
				if (isMounted) {
					setNews(fetchNews1.data.data);
				}	
			} catch (error) {
				console.log("Fetch error: ")
			}
			
		}

		fetchData();

		return () => {
			isMounted = false; // Mark the component as unmounted
			// Cancel any ongoing tasks or subscriptions here
		};
	}, []);
	
    return (
    	<>
			<div className="blog-area pd-top-80 pd-bottom-90 go-top" id="news">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-7">
							<div className="section-title text-center">
								<h6 className="sub-title double-line">{t('lastestnews')}</h6>
								<h2 className="title">{t('fnews')}</h2>
							</div>
						</div>
					</div>
					
					{/* กรมขนส่ง */}
					{news?.length > 0 ?  
					<div className="row">
						{news?.length > 2 &&
						<div className="col-lg-4">
							<ul className="single-blog-list-wrap mb-5 mb-lg-0 type-1">
								{news[2] && 
								<li>
									<Link to={`/blog-details/${news[2]?.news_id}/${news[2]?.news_friendly}`}>
										<div className="media single-blog-list-inner">
										<div className="media-left date">
											<span>{gatMonth(news[2]?.udp_date ? news[2].udp_date : Date())}</span><br/>
											{gatDay(news[2]?.udp_date ? news[2].udp_date : Date())}
										</div>
										<div className="media-body details">
											<ul className="blog-meta">
											{/* <li><i className="fa fa-user" /> {t('by')} {news[2]?.user_update ? news[2]?.user_update : "-"}</li> */}
											<li><i className="fa fa-folder-open-o" />{news[2]?.news_type === 1 ? t('dot') : t('mpw')}</li>
											</ul>
											<h5 className='newstitle'>{news[2]?.news_title ? news[2]?.news_title : "-"}</h5>
										</div>
										</div>
									</Link>
								</li> }
								{news[3] &&
								<li>
									<Link to={`/blog-details/${news[3]?.news_id}/${news[3]?.news_friendly}`}>
										<div className="media single-blog-list-inner">
										<div className="media-left date">
											<span>{gatMonth(news[3]?.udp_date ? news[3].udp_date : Date())}</span><br/>
											{gatDay(news[3]?.udp_date ? news[3].udp_date : Date())}
										</div>
										<div className="media-body details">
											<ul className="blog-meta">
											{/* <li><i className="fa fa-user" /> {t('by')} {news[3]?.user_update ? news[3].user_update : "-"}</li> */}
											<li><i className="fa fa-folder-open-o" />{news[3]?.news_type === 1 ? t('dot') : t('mpw')}</li>
											</ul>
											<h5 className='newstitle'>{news[3]?.news_title ? news[3].news_title : "-"}</h5>
										</div>
										</div>
									</Link>
								</li>  }
								{news[4] &&
								<li>
									<Link to={`/blog-details/${news[4]?.news_id}/${news[4]?.news_friendly}`}>
										<div className="media single-blog-list-inner">
											<div className="media-left date">
												<span>{gatMonth(news[4]?.udp_date ? news[4].udp_date : Date())}</span><br/>
												{gatDay(news[4]?.udp_date ? news[4].udp_date : Date())}
											</div>
											<div className="media-body details">
												<ul className="blog-meta">
												{/* <li><i className="fa fa-user" /> {t('by')} {news[4]?.user_update ? news[4].user_update : "-"}</li> */}
												<li><i className="fa fa-folder-open-o" />{news[4]?.news_type === 1 ? t('dot') : t('mpw')}</li>
												</ul>
												<h5 className='newstitle'>{news[4]?.news_title ? news[4].news_title : "-"}</h5>
											</div>
										</div>
									</Link>
								</li> }
							</ul>
						</div> }
						<div className="col-lg-8">
							<div className="row justify-content-center">
								{news[0] && 
								<div className="col-md-6">
									<Link to={`/blog-details/${news[0]?.news_id}/${news[0]?.news_friendly}`}>
										<div className="single-blog-inner type-1">
										<div className="thumb">
											<img src={`${API_BASE_URL}/media_file/file/?f=` + news[0]?.news_cover} style={{objectFit: 'cover'}} width={370} height={250} />
											<span className="date">{gatFDate(news[0]?.udp_date ? news[0].udp_date : Date())}</span>
										</div>
										<div className="details">
											<ul className="blog-meta">
											{/* <li><i className="fa fa-user" /> {t('by')} {news[0]?.user_update ? news[0].user_update : "-"}</li> */}
											<li><i className="fa fa-folder-open-o" />{news[0]?.news_type === 1 ? t('dot') : t('mpw')}</li>
											</ul>
											<h5 className='newstitle' >{news[0]?.news_title ? news[0].news_title : "-"}</h5>
											{t('readmore')}<i className="fa fa-angle-right" />
										</div>
										</div>
									</Link>
								</div> }
								{news[1] &&
								<div className="col-md-6">
									<Link to={`/blog-details/${news[1]?.news_id}/${news[1]?.news_friendly}`}>
										<div className="single-blog-inner type-1">
										<div className="thumb">
											<img src={`${API_BASE_URL}/media_file/file/?f=` + news[1]?.news_cover} style={{objectFit: 'cover'}} width={370} height={250} />
											<span className="date">{gatFDate(news[1]?.udp_date ? news[1].udp_date : Date())}</span>
										</div>
										<div className="details">
											<ul className="blog-meta">
											{/* <li><i className="fa fa-user" /> {t('by')} {news[1]?.user_update ? news[1].user_update : "-"}</li> */}
											<li><i className="fa fa-folder-open-o" />{news[1]?.news_type === 1 ? t('dot') : t('mpw')}</li>
											</ul>
											<h5 className='newstitle'>{news[1]?.news_title ? news[1].news_title : "-"}</h5>
											{t('readmore')}<i className="fa fa-angle-right" />
										</div>
										</div>
									</Link>
								</div> }
							</div>
						</div>
					</div>
					: <></>}

					{/* กรมโยธา */}
					{/* {news2?.length > 0 ?
					<div className="row">
                        <div className="col-lg-8">
                            <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="single-blog-inner">
                                <div className="thumb">
                                    <img src={"https://dot-api.mpwt.gov.la/media_file/file/?f=" + news2[0]?.news_cover} style={{objectFit: 'cover'}} width={370} height={250} alt="img" />
                                    <span className="date type-2">{gatFDate(news2[0]?.udp_date ? news2[0].udp_date : Date())}</span>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> {t('by')} {news2[0]?.user_update ? news2[0].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[0]?.news_type === 1 ? t('dot') : t('mpw')}</li>
                                    </ul>
                                    <h5 className='newstitle' ><Link className='readmore2' to={`/blog-details/${news2[0].news_id}/${news2[0].news_friendly}`}>{news2[0]?.news_title ? news2[0].news_title : "-"}</Link></h5>
                                    <Link className="read-more-text readmore2" to={`/blog-details/${news2[0].news_id}/${news2[0].news_friendly}`}>{t('readmore')}<i className="fa fa-angle-right" /></Link>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-blog-inner">
                                <div className="thumb">
                                    <img src={"https://dot-api.mpwt.gov.la/media_file/file/?f=" + news2[1]?.news_cover} style={{objectFit: 'cover'}} width={370} height={250} alt="img" />
                                    <span className="date type-2">{gatFDate(news2[1]?.udp_date ? news2[1].udp_date : Date())}</span>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> {t('by')} {news2[1]?.user_update ? news2[1].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[1]?.news_type === 1 ? t('dot') : t('mpw')}</li>
                                    </ul>
                                    <h5 className='newstitle'><Link className='readmore2' to={`/blog-details/${news2[1].news_id}/${news2[1].news_friendly}`}>{news2[1]?.news_title ? news2[1].news_title : "-"}</Link></h5>
                                    <Link className="read-more-text readmore2" to={`/blog-details/${news2[1].news_id}/${news2[1].news_friendly}`}>{t('readmore')}<i className="fa fa-angle-right" /></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ul className="single-blog-list-wrap mb-5 mb-lg-0">
                            <li>
                                <div className="media single-blog-list-inner">
                                <div className="media-left date type-2">
                                    <span>{gatMonth(news2[2]?.udp_date ? news2[2].udp_date : Date())}</span><br/>
                                    {gatDay(news2[2]?.udp_date ? news2[2].udp_date : Date())}
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> {t('by')} {news2[2]?.user_update ? news2[2].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[2]?.news_type === 1 ? t('dot') : t('mpw')}</li>
                                    </ul>
                                    <h5 className='newstitle'><Link className='readmore2' to={`/blog-details/${news2[2].news_id}/${news2[2].news_friendly}`}>{news2[2]?.news_title ? news2[2].news_title : "-"}</Link></h5>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="media single-blog-list-inner">
                                <div className="media-left date type-2">
                                    <span>{gatMonth(news2[3]?.udp_date ? news2[3].udp_date : Date())}</span><br/>
                                    {gatDay(news2[3]?.udp_date ? news2[3].udp_date : Date())}
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> {t('by')} {news2[3]?.user_update ? news2[3].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[3]?.news_type === 1 ? t('dot') : t('mpw')}</li>
                                    </ul>
                                    <h5 className='newstitle'><Link className='readmore2' to={`/blog-details/${news2[3].news_id}/${news2[3].news_friendly}`}>{news2[3]?.news_title ? news2[3].news_title : "-"}</Link></h5>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="media single-blog-list-inner">
                                <div className="media-left date type-2">
                                    <span>{gatMonth(news2[4]?.udp_date ? news2[4].udp_date : Date())}</span><br/>
                                    {gatDay(news2[4]?.udp_date ? news2[4].udp_date : Date())}
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> {t('by')} {news2[4]?.user_update ? news2[4].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[4]?.news_type === 1 ? t('dot') : t('mpw')}</li>
                                    </ul>
                                    <h5 className='newstitle'><Link className='readmore2' to={`/blog-details/${news2[4].news_id}/${news2[4].news_friendly}`}>{news2[4]?.news_title ? news2[4].news_title : "-"}</Link></h5>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
					</div>
					: <></>} */}


					{news ?
					<div className='row'>
						<div className='d-flex justify-content-end'>
							<Link to={"/blog"} ><button className='seemoreBtn'><span>{t('seemore')}</span></button></Link>
						</div>
					</div>
					: <><div className='text-center'><span className="badge text-bg-warning">{t('notfound')}</span></div></>}
				</div>
			</div>
		</>
    )
}

export default LatestNews;
