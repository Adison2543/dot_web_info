import React, { useEffect } from 'react';
import Sidebar from './sidebar2';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';


const BlogDetails = () => {
	const { news_id } = useParams();
	console.log("id" , news_id)
	const [news, setNews] = useState({})
	const [loading, setLoading] = useState(false);



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
		let abortController = new AbortController();
		const fetchNews = async () => {
			try {
				setLoading(true);
				let fetchNews1 = await axios.get(`https://oasapi.iddriver.com/news/get/${news_id}`, 
					{
						headers: { 
							'Content-Type': 'application/json', 
							'Authorization': 'ZeBuphebrltl3uthIFraspubroST80Atr9tHuw5bODowi26p'
						}
				});
				setNews(fetchNews1.data);
			} catch (error) {
				console.error('POST Error:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchNews();
		return () => abortController.abort();
	}, []);

    return (
		<div className="blog-area pd-top-120 pd-bottom-120">
		  <div className="container">
			{loading ? <div className='w-100 d-flex justify-content-center align-items-center'><ReactLoading type='bars' color="var(--main-color)" height={200} width={100} /></div>
			:
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="blog-details-page-content">
		          <div className="single-blog-inner">
		            <div className="thumb">
		              <img src={`https://oasapi.iddriver.com/media_file/file/?f=${news?.news_cover}`} alt="img" />
		            </div>
		            <div className="details">
		              <ul className="blog-meta">
		                <li><i className="fa fa-user" /> BY {news?.user_update? news?.user_update : news?.user_create}</li>
		                <li><i className="fa fa-calendar-check-o" />{gatFDate(news?.udp_date ? news.udp_date : news.crt_date)}</li>
		              </ul>
		              <h3 className="title">{news?.news_title}</h3>
		              <p>{news?.news_description}</p>
		            </div>
		          </div>
		        </div>
		      </div>
		       <Sidebar id={news?.news_type? news.news_type : 0}/>
		    </div>
			}
		  </div>
		</div>


    )
  }

export default BlogDetails;
