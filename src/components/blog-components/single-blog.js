import React from 'react'
import { Link } from 'react-router-dom'

const singleblog = ({news}) => {

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

  return (
    <>
        <div className="single-blog-inner style-border">
            <div className="thumb">
                <img src={process.env.PUBLIC_URL+"/assets/img/blog/4.png"} alt="img" />
            </div>
            <div className="details">
                <ul className="blog-meta">
                    <li><i className="fa fa-user" /> {news.user_update ? news.user_update : news.user_create}</li>
                    <li><i className="fa fa-calendar-check-o" /> {gatFDate(news.udp_date ? news.udp_date : news.crt_date)}</li>
                </ul>
                <h3 className="title"><Link to="/blog-details">{news.news_title ? news.news_title : "..."}</Link></h3>
                <p>{news.news_description ? news.news_description.slice(0, 200) + '...' : "..."}</p>
                <a className="read-more-text" href="/blog-details">READ MORE <i className="fa fa-angle-right" /></a>
            </div>
        </div>
    </>
  )
}

export default singleblog