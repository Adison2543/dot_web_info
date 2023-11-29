import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/newsLast.css";

const LatestNews = () => {
	const [news, setNews] = useState([])

	var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		myHeaders.append("Authorization", "ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p");

	var raw = JSON.stringify({
		"page": 1,
		"per_page": 5,
		"search": ""
	});

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


	async function fetchData() {
		const res = await fetch("https://dot-api.mpwt.gov.la/news/list?news_type=2", {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		});
		// {
		// 	"id": ,
		// 	"title": "",
		// 	"price": ,
		// 	"description": "",
		// 	"category": "",
		// 	"image": "",
		// 	"rating": {
		// 	  "rate": ,
		// 	  "count": 
		// 	}
		// }
		res.json()
			.then(res => {
				setNews(res.data);
			})
			.catch(err => console.log("error!!!"));
	}

	useEffect(() => {
		fetchData();

		// Set up an interval to call fetchData() every 10 min
		const intervalId = setInterval(fetchData, 1000*60*10);

		// Clean up the interval when the component unmounts
		return () => {
			clearInterval(intervalId);
		};
	}, [])
    return (
    	<>
			<div className="blog-area pd-top-80 pd-bottom-90 go-top" id="news">
				<div className="container">
					<div className="row">
                        <div className="col-lg-8">
                            <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="single-blog-inner">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL+"/assets/img/blog/1.png"} alt="img" />
                                    <span className="date">{gatFDate(news[0]?.udp_date ? news[0].udp_date : Date())}</span>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> BY {news[0]?.user_update ? news[0].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news[0]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
                                    </ul>
                                    <h5 ><Link to="/blog-details">{news[0]?.news_title ? news[0].news_title : "-"}</Link></h5>
                                    <Link className="read-more-text" to="/blog-details"><b className='fs-5'>ອ່ານ​ຕື່ມ</b> <i className="fa fa-angle-right" /></Link>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-blog-inner">
                                <div className="thumb">
                                    <img src={process.env.PUBLIC_URL+"/assets/img/blog/2.png"} alt="img" />
                                    <span className="date">{gatFDate(news[1]?.udp_date ? news[1].udp_date : Date())}</span>
                                </div>
                                <div className="details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> BY {news[1]?.user_update ? news[1].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news[1]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
                                    </ul>
                                    <h5><Link to="/blog-details">{news[1]?.news_title ? news[1].news_title : "-"}</Link></h5>
                                    <Link className="read-more-text" to="/blog-details"><b className='fs-5'>ອ່ານ​ຕື່ມ</b> <i className="fa fa-angle-right" /></Link>
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
                                    <span>{gatMonth(news[2]?.udp_date ? news[2].udp_date : Date())}</span><br/>
                                    {gatDay(news[2]?.udp_date ? news[2].udp_date : Date())}
                                </div>
                                <div className="media-body details">
                                    <ul className="blog-meta">
                                    <li><i className="fa fa-user" /> BY {news[2]?.user_update ? news[2].user_update : "-"}</li>
                                    <li><i className="fa fa-folder-open-o" />{news[2]?.news_type === 1 ? "กรมขนส่ง" : "กรมโยธา"}</li>
                                    </ul>
                                    <h5><Link to="/blog-details">{news[2]?.news_title ? news[2].news_title : "-"}</Link></h5>
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
                                    <h5><Link to="/blog-details">{news[3]?.news_title ? news[3].news_title : "-"}</Link></h5>
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
                                    <h5><Link to="/blog-details">{news[4]?.news_title ? news[4].news_title : "-"}</Link></h5>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
					</div>
				</div>
			</div>
		</>
    )
}

export default LatestNews;
