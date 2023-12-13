import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/banner.css'

const Banner = ({tran}) => {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-1 bg-gray go-top" style={{backgroundImage: 'url("'+publicUrl+'assets/img/banner/b1.jpg")', backgroundSize: 'cover'}}>
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
			        <div className="thumb b-animate-thumb">
			          {/* <img src={publicUrl+"assets/img/banner/1.png"} alt="img" /> */}
			        </div>
			      </div>
			      <div className="col-lg-7 order-lg-1 align-self-center">
			        <div className="fadeL banner-inner text-center text-lg-left mt-5 mt-lg-0 p-4 banner-title" >
						<img src={publicUrl+"assets/img/banner/1.png"} alt="img" className='shape-backg'></img>
			          <h6 className="b-animate-1 ">Ministry of Public Works and Transport</h6>
			          <h1 className="b-animate-2 title">ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ</h1>
			          <div className='btnContainer'>
						{/* <Link className="btn btn-base b-animate-3 mr-sm-3 mr-2" to="/">Get A Quote</Link> */}
						<a className="btn btn-base b-animate-3 mr-sm-3 mr-2" href="http://course.iddriver.com/course" target='_blank'>{tran('lesson')}</a>
						{/* <Link className="btn btn-border-black b-animate-3" to="/">Read More</Link> */}
						<a className="btn btn-border-black b-animate-3" href="http://course.iddriver.com/exam" target='_blank'>{tran('test')}</a>
					  </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
}

export default Banner