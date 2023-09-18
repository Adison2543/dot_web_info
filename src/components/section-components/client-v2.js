import React from 'react';
import ptn from '../data/partner_data.js'
import '../css/partner.css'


const ClientV2 = () => {

	const showPtn = (key) => {
		// You can use SweetAlert in your React component
		const ptn_data = ptn.find((item) => item.partn === key)
		return ptn_data;
	};

    return  <div className="client-area pd-top-100 pd-bottom-100">
			  <div className="container">
				<div className='row text-center'>
					<div className="section-title">
						<h6 className="sub-title double-line fs-2">Partnerships</h6>
					</div>
				</div>
			    <div className="row">
			      <div className="partn-container d-flex flex-wrap justify-content-center gap-5">
				  	<img src={process.env.PUBLIC_URL + "/assets/img/partners/p01"} alt="img" data-bs-toggle="modal" data-bs-target="#goaModal" />
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p03"} alt="img" data-bs-toggle="modal" data-bs-target="#gogModal" />
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p04"} alt="img" data-bs-toggle="modal" data-bs-target="#gosModal" />
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p06"} alt="img" data-bs-toggle="modal" data-bs-target="#gotModal" />
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p05"} alt="img" data-bs-toggle="modal" data-bs-target="#gojModal" />
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p07"} alt="img" data-bs-toggle="modal" data-bs-target="#govModal" />
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p02"} alt="img" data-bs-toggle="modal" data-bs-target="#gocModal" />
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p08"} alt="img" data-bs-toggle="modal" data-bs-target="#wbModal"  />
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p09"} alt="img" data-bs-toggle="modal" data-bs-target="#undpModal"/>
					<img src={process.env.PUBLIC_URL + "/assets/img/partners/p10"} alt="img" data-bs-toggle="modal" data-bs-target="#adbModal" />
			        {/* <div className="institute-slider owl-carousel">
			          <div className="item">
			            <img src={process.env.PUBLIC_URL + "/assets/img/institute/1.png"} alt="img" />
			          </div>
			          <div className="item">
			            <img src={process.env.PUBLIC_URL + "/assets/img/institute/2.png"} alt="img" />
			          </div>
			          <div className="item">
			            <img src={process.env.PUBLIC_URL + "/assets/img/institute/3.png"} alt="img" />
			          </div>
			          <div className="item">
			            <img src={process.env.PUBLIC_URL + "/assets/img/institute/4.png"} alt="img" />
			          </div>
			          <div className="item">
			            <img src={process.env.PUBLIC_URL + "/assets/img/institute/5.png"} alt="img" />
			          </div>
			        </div> */}
			      </div>
			    </div>

				{/* Modal */}
				<div className="modal fade" id="goaModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('goa').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('goa').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="gocModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('goc').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('goc').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="gogModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('gog').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('gog').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="gosModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('gos').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('gos').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="gojModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('goj').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('goj').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="gotModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('got').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('got').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="govModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('gov').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('gov').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="wbModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('wb').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('wb').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="undpModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('undp').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('undp').detail}</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="adbModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-scrollable">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">{showPtn('adb').title}</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">{showPtn('adb').detail}</div>
						</div>
					</div>
				</div>
				
			  </div>
			</div>

}

export default ClientV2