import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import '../css/testimonialV2.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 

class TestimonialV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="testimonial-area pd-top-110 pd-bottom-120" style={{backgroundImage: 'url('+publicUrl+'assets/img/testimonial/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
	  <div className="container">
	    <div className="row justify-content-center">
	      <div className="col-xl-6 col-lg-7 col-md-11">
	        <div className="section-title text-center">
	          <h6 className="sub-title double-line">Our History</h6>
	          <h2 className="title">ປະຫວັດສາດ</h2>
	        </div>
	      </div>
	    </div>
		

		<div className='carousel-container'>
			<div className="row justify-content-center">
				<div className="col-xl-8 col-lg-9 col-md-12">
					<OwlCarousel 
						className='testimonial-slider-2 owl-theme'
						items={1}  
						autoplay
						loop
						autoplaySpeed={1000}
						autoplayTimeout={5000}
						margin={0} > 

						{/* Item 1 */}
						<div className='item px-5'>
							<div className="single-testimonial-inner">
								<span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
								<p>ເອີ້ນວ່າ ກະຊວງ​ ຄົມມະນາຄົມ ​ໂຍທາ ​ແລະ ​ຂົນ​ສົ່ງ</p>
								<div className="media-body align-self-center">
									<div>
										<h6 className='text-center yeartext hr-lines1'><span className='ytext'>1975 – 1982</span></h6>
									</div>
								</div>
							</div>	
						</div>  

						{/* Item 2 */}
						<div className='item px-5'>
							<div className="single-testimonial-inner">
								<span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
								<p>ແບ່ງອອກເປັນ 3 ກະຊວງ ຄື: ກະຊວງ​ກໍ່ສ້າງ, ກະຊວງ​ສະໜອງວັດຖຸ – ​ເຕັກນິກ ແລະ ກະຊວງ​ຂົນ​ສົ່ງ​ໄປສະນີ</p>
								<div className="media-body align-self-center yeartext">
									<h6 className='text-center yeartext hr-lines2'><span className='ytext'>1982 – 1989</span></h6>
								</div>
							</div>	
						</div>

						{/* Item 1 */}
						<div className='item px-5'>
							<div className="single-testimonial-inner">
								<span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
								<p>ເອີ້ນວ່າ ກະຊວງ​ ຄົມມະນາຄົມ ​ໂຍທາ ​ແລະ ​ຂົນ​ສົ່ງ</p>
								<div className="media-body align-self-center yeartext">
									<h6 className='text-center yeartext hr-lines3'><span className='ytext'>1989 – 2007</span></h6>
								</div>
							</div>	
						</div>  

						{/* Item 2 */}
						<div className='item px-5'>
							<div className="single-testimonial-inner">
								<span className="testimonial-quote"><i className="fa fa-quote-right" /></span>
								<p>ເອີ້ນວ່າ ກະຊວງໂຍທາທິການ ແລະ ຂົນສົ່ງ ໂດຍໄດ້ແຍກວຽກງານໄປສະນີ ແລະ ໂທລະຄົມມະນາຄົມອອກໃນປີ 2007 ໃຫ້ເປັນອົງການທຽບເທົ່າກະຊວງແລ້ວໃນປີ 2011 ໄດ້ຍົກລະດັບເປັນກະຊວງໄປສະນີໂທລະຄົມມະນາຄົມ ແລະ ສື່ສານ</p>
								<div className="media-body align-self-center yeartext">
									<h6 className='text-center yeartext hr-lines4'><span className='ytext'>2007 – ປະຈຸບັນ (2020)</span></h6>
								</div>
							</div>	
						</div>   
					</OwlCarousel>
				</div>
			</div>
		</div>
	  </div>
	</div>

  }
}

export default TestimonialV2