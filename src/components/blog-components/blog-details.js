import React, { useEffect } from 'react';
import Sidebar from './sidebar2';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { FacebookShareButton, FacebookShareCount, TwitterShareButton, FacebookIcon, TwitterIcon, XIcon } from 'react-share';
import { FacebookProvider, Like, Comments  } from 'react-facebook';


const BlogDetails = () => {
	const {t} = useTranslation();
	const { news_id } = useParams();
	const [news, setNews] = useState({})
	const [loading, setLoading] = useState(false);
	const currentUrl = window.location.href;


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
				let fetchNews1 = await axios.get(`https://dot-api.mpwt.gov.la/news/get/${news_id}`, 
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

	// Dynamically set OG tags in the document head
	useEffect(() => {
		const ogTitle = news?.news_title || 'Default Title';
		const ogDescription = news?.news_description || 'Default Description';
		const ogImage = news?.news_cover || 'default-image-url';
	
		document.title = ogTitle;
	
		// Create meta elements for OG tags
		const metaOgTitle = document.createElement('meta');
		metaOgTitle.setAttribute('property', 'og:title');
		metaOgTitle.content = ogTitle;
	
		const metaOgDescription = document.createElement('meta');
		metaOgDescription.setAttribute('property', 'og:description');
		metaOgDescription.content = ogDescription;
	
		const metaOgImage = document.createElement('meta');
		metaOgImage.setAttribute('property', 'og:image');
		metaOgImage.content = ogImage;

		// Create meta elements for X tags
		const metaXImage = document.createElement('meta');
		metaXImage.setAttribute('name', 'twitter:image');
		metaXImage.content = ogImage;

		const metaXTitle = document.createElement('meta');
		metaXTitle.setAttribute('name', 'twitter:title');
		metaXTitle.content = ogTitle;
	
		// Append meta elements to the head
		document.head.appendChild(metaOgTitle);
		document.head.appendChild(metaOgDescription);
		document.head.appendChild(metaOgImage);

		document.head.appendChild(metaXImage);
		document.head.appendChild(metaXTitle);
	
		// Clean up by removing added meta elements on component unmount
		return () => {
		  document.head.removeChild(metaOgTitle);
		  document.head.removeChild(metaOgDescription);
		  document.head.removeChild(metaOgImage);

		  document.head.removeChild(metaXImage);
		  document.head.removeChild(metaXTitle);
		};
	}, [news]);

    return (
		<div className="blog-area pd-top-120 pd-bottom-120">
		  <div className="container">
			{loading ? <div className='w-100 d-flex justify-content-center align-items-center'><ReactLoading type='bars' color="var(--main-color)" height={200} width={100} /></div>
			:
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="blog-details-page-content">
		          <div className="single-blog-inner">
				  	<div className='d-flex justify-content-end py-2 gap-2'>
						<FacebookShareButton
							url={currentUrl}
							quote={news?.news_title}
							hashtag="#DOTSmartApp"
						>
							<FacebookIcon size={32} round />
						</FacebookShareButton>
						<TwitterShareButton
							url={currentUrl}
							quote={news?.news_title}
							hashtag="#DOTSmartApp"
						>
							<TwitterIcon size={32} round />
						</TwitterShareButton>
						<FacebookShareCount url={currentUrl}>
							{(shareCount) => <span className="myShareCountWrapper">{shareCount}</span>}
						</FacebookShareCount>
					</div>
		            <div className="thumb"
						style={{
							maxHeight: '450px',
							overflow: 'hidden'
						}}
					>
		              <img src={news?.news_cover ? `https://dot-api.mpwt.gov.la/media_file/file/?f=${news?.news_cover}` : process.env.PUBLIC_URL +"/assets/img/logoPWT.png"} 
					  	className='w-100' alt="img" />
		            </div>
		            <div className="details">
		              <ul className="blog-meta">
		                <li><i className="fa fa-user" /> {t('by')} {news?.user_update? news?.user_update : news?.user_create}</li>
		                <li><i className="fa fa-calendar-check-o" />{gatFDate(news?.udp_date ? news.udp_date : news.crt_date)}</li>
		              </ul>
		              <h3 className="title">{news?.news_title}</h3>
		              <p>{news?.news_description}</p>
		            </div>
		          </div>
		        </div>
		      </div>
		       <Sidebar id={news?.news_type? news.news_type : 0} tran={t}/>
		    </div>
			}
		  </div>

		  	{/* Add dynamic Open Graph meta tags */}
			{/* <Helmet>
				<meta property="og:title" content={news? news.news_title : 'Default Title'} />
				<meta property="og:description" content={news? news.news_description : 'Default Description'} />
				<meta property="og:image" content={news?.news_cover} />
				<meta property="og:url" content={currentUrl} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={news?.news_title} />
				<meta name="twitter:description" content={news?.news_description} />
				<meta name="twitter:image" content={news?.news_cover} />
			</Helmet> */}
		</div>
    )
  }

export default BlogDetails;
