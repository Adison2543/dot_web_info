import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import SingleBlog from './single-blog';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';
import ReactLoading from 'react-loading';

const Blog = () => {

		const [news, setNews] = useState([]);
		const [page, setPage] = useState(1);
		const [loading, setLoading] = useState(false);
		const [cata, setCata] = useState(1);

		const setType = (num) => {
			setCata(num);
		}

		useEffect(() => {

			let abortController = new AbortController();
			const fetchCourse = async () => {
				try {
					setLoading(true);
					let fetchNews1 = await axios.post(`https://oasapi.iddriver.com/news/list?news_type=${cata}`, 
						{
							signal: abortController.signal,
							page: page,
							per_page: 8,
							search: ""

						}, {
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

			fetchCourse();
			return () => abortController.abort();
		}, [page,cata]);
		// Paginate
		const prevPage = () => {
			setPage((page) => page - 1)
		}

		const nextPage = () => {
			setPage((page) => page + 1)
		}

		// Calculate the range of pages to display (e.g., 5 pages before and after the current page).
		const pageRange = 3;
		const startPage = Math.max(1, page - pageRange);
		const endPage = Math.min(news?.total_page, page + pageRange);

		const pageItems = [];

		for (let i = startPage; i <= endPage; i++) {
			pageItems.push(
				<Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
					{i}
				</Pagination.Item>
			);
		}

    return (
		<div className="blog-area pd-top-120 pd-bottom-120 go-top">
		  <div className="container">
		  	{loading ? <div className='w-100 d-flex justify-content-center align-items-center'><ReactLoading type='bars' color="var(--main-color)" height={200} width={100} /></div> :
				<div className="row">
				<div className="col-lg-8">
					{news?.data?.map((item) => (
						<SingleBlog key={item.news_id} news={item}/>
					))}
					{news?.length > 0 ? 
					<Pagination>
						<Pagination.Prev disabled={page === 1 ? true : false} onClick={prevPage}/>
						{pageItems}
						<Pagination.Next disabled={page === news?.total_page ? true : false} onClick={nextPage}/>
					</Pagination>
					: <></> }
				</div>
				<Sidebar setType={setType} type={cata}/>
				</div>
			}
		  </div>
		</div>

    )
  }

export default Blog;
