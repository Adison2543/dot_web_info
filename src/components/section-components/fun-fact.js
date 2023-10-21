import React, { useEffect, useRef } from 'react';


const Funfact = ({tran}) => {

	const fadeLelement = useRef();
	const fadeRelement = useRef();

	useEffect(() => {
		const element = fadeLelement.current;
		const elementR = fadeRelement.current;

		const observer = new IntersectionObserver(
			(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
				// Element is in the viewport, add your animation class here
				element.classList.add('fadeL');
				elementR.classList.add('fadeR');
				element.classList.remove('hideElement');
				elementR.classList.remove('hideElement');
				}
			});
			},
			{ threshold: 0.5 } // Adjust the threshold as needed
		);

		observer.observe(element);
		observer.observe(elementR);

		// Cleanup observer on component unmount
		return () => {
			observer.unobserve(element);
			observer.unobserve(elementR);
		};
	}, []);

    return (
		<>
			<div className="counter-area bg-gray">
			  <div className="container">
			    <div className="counter-area-inner pd-top-120 pd-bottom-120" style={{backgroundImage: 'url("'+process.env.PUBLIC_URL+'/assets/img/other/1.png")'}}>
			      <div className="row">
			        <div className="col-lg-8 mb-5 mb-lg-0 hideElement" ref={fadeLelement}>
			          <div className="section-title mb-0">
			            <h6 className="sub-title right-line">OAS</h6>
			            <h2 className="title">{tran('oas')}</h2>
			            <p className="content pb-3">{tran('oas-detail')}</p>
			            {/* <div className="btn-counter bg-base mt-4">
			              <h3 className="left-val align-self-center"><span className="counter">2.4</span>k+</h3>
			              <div className="right-val align-self-center">
			                Successful <br /> students
			              </div>
			            </div> */}
			          </div>
			        </div>
			        <div className="col-lg-4 align-self-center hideElement" ref={fadeRelement}>
			          <ul className="single-list-wrap">
						<li className="single-list-inner style-box-bg">
							<div className="media">
								<div className="media-left">
									<img src={process.env.PUBLIC_URL + "/assets/img/icon/1.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h5>{tran('oas1')}</h5>
								</div>
							</div>
							</li>
							<li className="single-list-inner style-box-bg">
							<div className="media">
								<div className="media-left">
									<img src={process.env.PUBLIC_URL + "/assets/img/icon/2.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h5>{tran('oas2')}</h5>
								</div>
							</div>
							</li>
							<li className="single-list-inner style-box-bg">
							<div className="media">
								<div className="media-left">
									<img src={process.env.PUBLIC_URL + "/assets/img/icon/3.png"} alt="img" />
								</div>
								<div className="media-body align-self-center">
									<h5>{tran('oas3')}</h5>
								</div>
							</div>
							</li>
			            {/* <li className="single-list-inner style-box-bg">
			              <div className="media">
			                <div className="media-left">
			                  <img src={process.env.PUBLIC_URL + "/assets/img/icon/1.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5><span className="counter">1200</span>+</h5>
			                  <p>Learners &amp; counting</p>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-box-bg">
			              <div className="media">
			                <div className="media-left">
			                  <img src={process.env.PUBLIC_URL + "/assets/img/icon/2.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5><span className="counter">320</span>+</h5>
			                  <p>Total courses</p>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-box-bg">
			              <div className="media">
			                <div className="media-left">
			                  <img src={process.env.PUBLIC_URL + "/assets/img/icon/3.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5><span className="counter">1340</span>+</h5>
			                  <p>Successful students</p>
			                </div>
			              </div>
			            </li> */}
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
		</>
	);
}

export default Funfact