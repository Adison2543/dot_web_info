import React from 'react';
import '../css/banner.css';
import { HashLink as Link} from 'react-router-hash-link';
import { LINK_LEARNING } from '../../appConfig';

const Banner = ({tran}) => {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-1 bg-gray go-top" style={{backgroundImage: 'url("'+publicUrl+'assets/img/banner/b1.webp")', backgroundSize: 'cover'}}>
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
			        <div className="thumb b-animate-thumb">
			          {/* <img src={publicUrl+"assets/img/banner/1.png"} alt="img" /> */}
			        </div>
			      </div>
			      <div className="col-lg-7 order-lg-1 align-self-center">
			        <div className="fadeL banner-inner text-center text-lg-left mt-5 mt-lg-0 p-4 banner-title" >
						{/* <img src={publicUrl+"assets/img/banner/1.png"} alt="img" className='shape-backg'></img>
			          <h6 className="b-animate-1 ">Ministry of Public Works and Transport</h6>
			          <h1 className="b-animate-2 title text-center">ກະຊວງໂຍທາທິການ <br/> ແລະ ຂົນສົ່ງ</h1> */}
			          <p className="b-animate-2 fs-4 text-center">Under the project immprovement of driving license system in <span className='fw-bold main-title'>Lao PDR, Department of Transport</span> has jointly developed a <b>Mobile App</b> and <b>Online Course</b></p>
			          <div className='btnContainer flex-wrap gap-2 gap-md-0'>
						{/* <Link className="btn btn-base b-animate-3 mr-sm-3 mr-2" to="/">Get A Quote</Link> */}
						<Link className="btn btn-base b-animate-3 mr-sm-3 mr-2" to="/about-app">Download DoT Smart App</Link>
						{/* <a className="btn btn-base b-animate-3 mr-sm-3 mr-2" href="https://dot-learning.mpwt.gov.la/course" target='_blank'>Download DoT Smart App</a> */}
						{/* <Link className="btn btn-border-black b-animate-3" to="/">Read More</Link> */}
						<Link className="btn btn-border-black b-animate-3" to='/about-the-project'>Read more About project</Link>
					  </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
}

export default Banner