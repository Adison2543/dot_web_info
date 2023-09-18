import React, { Component } from 'react';
import '../css/howToWork.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class HowToWork extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  items: 4, // Default number of items
		};
	  }
	
	  componentDidMount() {
		// Add a listener for window resize events
		window.addEventListener('resize', this.handleResize);
		this.handleResize(); // Call the function once to set the initial state
	  }
	
	  componentWillUnmount() {
		// Remove the resize event listener when the component unmounts
		window.removeEventListener('resize', this.handleResize);
	  }
	
	  handleResize = () => {
		// Check the screen width and set the number of items accordingly
		if (window.innerWidth < 768 && window.innerWidth > 400) {
		  	this.setState({ items: 2 });
		} else if (window.innerWidth < 400) {
			this.setState({ items: 1 });
		} else {
		  	this.setState({ items: 4 });
		}
	  };

    render() {
		const { items } = this.state;
        let publicUrl = process.env.PUBLIC_URL+'/';

    return <div className="work-area pd-top-110 go-top" id='activity'>
			  <div className="container">
			    <div className="section-title">
			      <div className="row">
			        <div className="col-lg-6 align-self-center">
			          <h6 className="sub-title right-line">Activity</h6>
			          <h2 className="title">ກິດ​ຈະ​ກໍາ​</h2>
			        </div>
			        <div className="col-lg-6 align-self-center">
			          <p className="content mt-lg-0">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs when MTV ax quiz</p>
			        </div>
			      </div>
			    </div>
				<OwlCarousel 
					className='testimonial-slider-2'
					items={items}  
					autoplay
					loop
					autoplaySpeed={2000}
					autoplayTimeout={3000}
					margin={10} >
					<div className="item">
						<div>
							<div className="single-intro-inner style-icon-bg bg-gray text-center" id='act1'>
							<div className="thumb">
								
							</div>
							<div className="details">
								<h5>Sign up</h5>
								<p>ຊາວໜຸມກະຊວງ ຍທຂ ຈັດການແຂ່ງຂັນກິລາດອກປີກໄກ່ ຊິງຂັນສະຫາຍເລຂາຊາວໜຸ່ມກະຊວງ ຍທຂ</p>
								{/* <Link className="read-more-text" to="/course-details">Read More <i className="fa fa-angle-right" /></Link> */}
							</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="single-intro-inner style-icon-bg bg-gray text-center" id='act1'>
						<div className="bg-img">
							<img src={publicUrl+"assets/img/ac2"} alt="" />
						</div>
						<div className="details">
							<h5>Select course</h5>
							<p>ກົມຂົນສົ່ງ ກະຊວງ ຍທຂ ລົງໂຄສະນາເຜີຍແຜ່, ປູກຈິດສໍານຶກ ແລະ ການນໍາໃຊ້ກົດໝາຍ ດ້ານຄວາມປອດໄພທາງຫຼວງ ໃຫ້ກັບນ້ອງໆນັກຮຽນ</p>
							{/* <Link className="read-more-text" to="/course-details">Read More <i className="fa fa-angle-right" /></Link> */}
						</div>
						</div>
					</div>
					<div className="item">
						<div className="single-intro-inner style-icon-bg bg-gray text-center" id='act1'>
							<div className="bg-img">
								<img src={publicUrl+"assets/img/ac3"} alt="" />
							</div>
						<div className="details">
							<h5>Start Learning</h5>
							<p>ຄະນະບໍລິຫານງານຊາວໜຸ່ມກະຊວງ ຍທຂ ເຄື່ອນໄຫວຢ້ຽມຢາມ ອະນຸສອນສະຖານ ປະທານ ສຸພານຸວົງ ຄົບຮອບ114 ປີ</p>
							{/* <Link className="read-more-text" to="/course-details">Read More <i className="fa fa-angle-right" /></Link> */}
						</div>
						</div>
					</div>
					<div className="item">
						<div className="single-intro-inner style-icon-bg bg-gray text-center" id='act1'>
							<div className="bg-img">
								<img src={publicUrl+"assets/img/ac4"} alt="" />
							</div>
						<div className="details">
							<h5>Get Certificate</h5>
							<p>ແຂ່ງຂັນກິລາມິດຕະພາບ ກົມນິຕິກຳ ລະຫວ່າງ ກົມທາງລົດໄຟ</p>
							{/* <Link className="read-more-text" to="/course-details">Read More <i className="fa fa-angle-right" /></Link> */}
						</div>
						</div>
					</div>
				</OwlCarousel>
			  </div>
			</div>
        }
}

export default HowToWork