import React, { cloneElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/newsLast.css";

var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", "ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p");

	var raw = JSON.stringify({
		"page": 1,
		"per_page": 5,
		"search": ""
	});

const LatestNews = () => {
	const [news, setNews] = useState([]);
	const [news2, setNews2] = useState([]);
 
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
			"JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
			"JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
		];
		const day = date.getDate();
		const month = monthNames[date.getMonth()];
		const year = date.getFullYear();
		return `${day} ${month}, ${year}`;
	};

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch("https://oasapi.iddriver.com/news/list?news_type=1", {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				}).catch(err => console.log("Fetch1 error!!!"));
				const res2 = await fetch("https://oasapi.iddriver.com/news/list?news_type=2", {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				}).catch(err => console.log("Fetch2 error!!!"));
	
				res.json()
				.then(res => {
					setNews(res.data);
				})
				.catch(err => console.log("error1!!!"));
				res2.json()
				.then(res2 => {
					setNews2(res2.data);
				})
				.catch(err => console.log("error2!!!"));
			} catch (error) {
				console.log("Fetch error: ", error)
			}
			
		}

		fetchData();
	}, [])
	console.log("news: " + JSON.stringify(news))
    return (
    	<>
			<div className="blog-area pd-top-80 pd-bottom-90 go-top" id="news">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-7">
							<div className="section-title text-center">
								<h6 className="sub-title double-line">Latest News</h6>
								<h2 className="title">กรมโยธา &amp; กรมขนส่ง</h2>
							</div>
						</div>
					</div>
					
					{/* กรมขนส่ง */}
					{news?.length > 0 ?  
					<div className="row">
						<div className="col-lg-4">
							<ul className="single-blog-list-wrap mb-5 mb-lg-0">
								<li>
									<div className="media single-blog-list-inner">
									<div className="media-left date">
										<span>{gatMonth(news[2]?.udp_date ? news[2].udp_date : Date())}</span><br/>
										{gatDay(news[2]?.udp_date ? news[2].udp_date : Date())}
									</div>
									<div className="media-body details">
										<ul className="blog-meta">
										<li><i className="fa fa-user" /> BY {news[2]?.user_update ? news[2].user_update : "-"}</li>
										<li><i className="fa fa-folder-open-o" />{news[2]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
										</ul>
										<h5 className='newstitle'><Link to={`/blog-details/${news[2].news_id}/${news[2]?.news_title}`}>{news[2]?.news_title ? news[2].news_title : "-"}</Link></h5>
									</div>
									</div>
								</li>
								<li>
									<div className="media single-blog-list-inner">
									<div className="media-left date">
										<span>{gatMonth(news[3]?.udp_date ? news[3].udp_date : Date())}</span><br/>
										{gatDay(news[3]?.udp_date ? news[3].udp_date : Date())}
									</div>
									<div className="media-body details">
										<ul className="blog-meta">
										<li><i className="fa fa-user" /> BY {news[3]?.user_update ? news[3].user_update : "-"}</li>
										<li><i className="fa fa-folder-open-o" />{news[3]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
										</ul>
										<h5 className='newstitle'><Link to={`/blog-details/${news[3].news_id}/${news[3].news_title}`}>{news[3]?.news_title ? news[3].news_title : "-"}</Link></h5>
									</div>
									</div>
								</li>
								<li>
									<div className="media single-blog-list-inner">
										<div className="media-left date">
											<span>{gatMonth(news[4]?.udp_date ? news[4].udp_date : Date())}</span><br/>
											{gatDay(news[4]?.udp_date ? news[4].udp_date : Date())}
										</div>
										<div className="media-body details">
											<ul className="blog-meta">
											<li><i className="fa fa-user" /> BY {news[4]?.user_update ? news[4].user_update : "-"}</li>
											<li><i className="fa fa-folder-open-o" />{news[4]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
											</ul>
											<h5 className='newstitle'><Link to={`/blog-details/${news[4].news_id}/${news[4].news_title}`}>{news[4]?.news_title ? news[4].news_title : "-"}</Link></h5>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div className="col-lg-8">
							<div className="row justify-content-center">
								<div className="col-md-6">
									<div className="single-blog-inner">
									<div className="thumb">
										<img src={"https://oasapi.iddriver.com/media_file/file/?f=" + news[0]?.news_cover} style={{objectFit: 'cover'}} width={370} height={250}  alt="img" />
										<span className="date">{gatFDate(news[0]?.udp_date ? news[0].udp_date : Date())}</span>
									</div>
									<div className="details">
										<ul className="blog-meta">
										<li><i className="fa fa-user" /> BY {news[0]?.user_update ? news[0].user_update : "-"}</li>
										<li><i className="fa fa-folder-open-o" />{news[0]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
										</ul>
										<h5 className='newstitle' ><Link to={`/blog-details/${news[0].news_id}/${news[0].news_title}`}>{news[0]?.news_title ? news[0].news_title : "-"}</Link></h5>
										<Link className="read-more-text" to={`/blog-details/${news[0].news_id}/${news[0].news_title}`}><b className='fs-5'>ອ່ານ​ຕື່ມ</b> <i className="fa fa-angle-right" /></Link>
									</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="single-blog-inner">
									<div className="thumb">
										<img src={"https://oasapi.iddriver.com/media_file/file/?f=" + news[1]?.news_cover} style={{objectFit: 'cover'}} width={370} height={250} alt="img" />
										<span className="date">{gatFDate(news[1]?.udp_date ? news[1].udp_date : Date())}</span>
									</div>
									<div className="details">
										<ul className="blog-meta">
										<li><i className="fa fa-user" /> BY {news[1]?.user_update ? news[1].user_update : "-"}</li>
										<li><i className="fa fa-folder-open-o" />{news[1]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
										</ul>
										<h5 className='newstitle'><Link to={`/blog-details/${news[1].news_id}/${news[1].news_title}`}>{news[1]?.news_title ? news[1].news_title : "-"}</Link></h5>
										<Link className="read-more-text" to={`/blog-details/${news[1].news_id}/${news[1].news_title}`}><b className='fs-5'>ອ່ານ​ຕື່ມ</b> <i className="fa fa-angle-right" /></Link>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					: <></>}

					{/* กรมโยธา */}
					{news2?.length > 0 ?
					<div className="row">
                        <div className="col-lg-8">
                            <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="single-blog-inner">
                                <div className="thumb">
                                    <img src={"https://oasapi.iddriver.com/media_file/file/?f=" + news2[0]?.news_cover} style={{objectFit: 'cover'}} width={370} height={250} alt="img" />
                                    <span className="date">{gatFDate(news2[0]?.udp_date ? news2[0].udp_date : Date())}</span>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> BY {news2[0]?.user_update ? news2[0].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[0]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
                                    </ul>
                                    <h5 className='newstitle' ><Link to={`/blog-details/${news2[0].news_id}/${news2[0].news_title}`}>{news2[0]?.news_title ? news2[0].news_title : "-"}</Link></h5>
                                    <Link className="read-more-text" to={`/blog-details/${news2[0].news_id}/${news2[0].news_title}`}><b className='fs-5'>ອ່ານ​ຕື່ມ</b> <i className="fa fa-angle-right" /></Link>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-blog-inner">
                                <div className="thumb">
                                    <img src={"https://oasapi.iddriver.com/media_file/file/?f=" + news2[1]?.news_cover} style={{objectFit: 'cover'}} width={370} height={250} alt="img" />
                                    <span className="date">{gatFDate(news2[1]?.udp_date ? news2[1].udp_date : Date())}</span>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> BY {news2[1]?.user_update ? news2[1].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[1]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
                                    </ul>
                                    <h5 className='newstitle'><Link to={`/blog-details/${news2[1].news_id}/${news2[1].news_title}`}>{news2[1]?.news_title ? news2[1].news_title : "-"}</Link></h5>
                                    <Link className="read-more-text" to={`/blog-details/${news2[1].news_id}/${news2[1].news_title}`}><b className='fs-5'>ອ່ານ​ຕື່ມ</b> <i className="fa fa-angle-right" /></Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ul className="single-blog-list-wrap mb-5 mb-lg-0">
                            <li>
                                <div className="media single-blog-list-inner">
                                <div className="media-left date">
                                    <span>{gatMonth(news2[2]?.udp_date ? news2[2].udp_date : Date())}</span><br/>
                                    {gatDay(news2[2]?.udp_date ? news2[2].udp_date : Date())}
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> BY {news2[2]?.user_update ? news2[2].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[2]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
                                    </ul>
                                    <h5 className='newstitle'><Link to={`/blog-details/${news2[2].news_id}/${news2[2].news_title}`}>{news2[2]?.news_title ? news2[2].news_title : "-"}</Link></h5>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="media single-blog-list-inner">
                                <div className="media-left date">
                                    <span>{gatMonth(news2[3]?.udp_date ? news2[3].udp_date : Date())}</span><br/>
                                    {gatDay(news2[3]?.udp_date ? news2[3].udp_date : Date())}
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> BY {news2[3]?.user_update ? news2[3].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[3]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
                                    </ul>
                                    <h5 className='newstitle'><Link to={`/blog-details/${news2[3].news_id}/${news2[3].news_title}`}>{news2[3]?.news_title ? news2[3].news_title : "-"}</Link></h5>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="media single-blog-list-inner">
                                <div className="media-left date">
                                    <span>{gatMonth(news2[4]?.udp_date ? news2[4].udp_date : Date())}</span><br/>
                                    {gatDay(news2[4]?.udp_date ? news2[4].udp_date : Date())}
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> BY {news2[4]?.user_update ? news2[4].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news2[4]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
                                    </ul>
                                    <h5 className='newstitle'><Link to={`/blog-details/${news2[4].news_id}/${news2[4].news_title}`}>{news2[4]?.news_title ? news2[4].news_title : "-"}</Link></h5>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
					</div>
					: <></>}


					{news ||  news2 ?
					<div className='row'>
						<div className='d-flex justify-content-end'>
							<Link to={"/blog"} ><button className='seemoreBtn'><span>See more</span></button></Link>
						</div>
					</div>
					: <><div className='text-center'><span className="badge text-bg-warning">ไม่พบข้อมูลข่าวสาร</span></div></>}
				</div>
			</div>
		</>
    )
}

export default LatestNews;
