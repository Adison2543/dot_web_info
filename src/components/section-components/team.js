import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Team extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="team-area pd-top-110 go-top">
				  <div className="container-fluid pl-4 pr-4">
				    <div className="row justify-content-center">
				      <div className="col-xl-6 col-lg-7">
				        <div className="section-title text-center">
				          <h6 className="sub-title double-line">Meet Our Team</h6>
				          <h2 className="title">Our Creative Team</h2>
				        </div>
				      </div>
				    </div>


				    <div className="team-slider owl-carousel slide" data-bs-ride="carousel">

				      <div className="item">
				        <div className="single-team-inner">
				          <div className="thumb">
				            <img src={publicUrl+"assets/img/team/1.png"} alt="img" />
				            <div className="social-wrap">  
				              <div className="social-wrap-inner">
				                <a className="social-share" href="/"><i className="fa fa-share-alt" /></a>
				                <ul>
				                  <li><a href="/"><i className="fa fa-facebook" /></a></li>
				                  <li><a href="/"><i className="fa fa-twitter" /></a></li>
				                  <li><a href="/"><i className="fa fa-pinterest" /></a></li>
				                  <li><a href="/"><i className="fa fa-linkedin" /></a></li>
				                </ul>
				              </div>
				            </div>
				          </div>
				          <div className="details"> 
				            <h4><Link to="/instructor-details">Doris Jordan</Link></h4>
				            <span>Design Expert</span>
				          </div>  
				        </div>
				      </div>

				      <div className="item">
				        <div className="single-team-inner">
				          <div className="thumb">
				            <img src={publicUrl+"assets/img/team/2.png"} alt="img" />
				            <div className="social-wrap">  
				              <div className="social-wrap-inner">
				                <a className="social-share" href="/"><i className="fa fa-share-alt" /></a>
				                <ul>
				                  <li><a href="/"><i className="fa fa-facebook" /></a></li>
				                  <li><a href="/"><i className="fa fa-twitter" /></a></li>
				                  <li><a href="/"><i className="fa fa-pinterest" /></a></li>
				                  <li><a href="/"><i className="fa fa-linkedin" /></a></li>
				                </ul>
				              </div>
				            </div>
				          </div>
				          <div className="details"> 
				            <h4><Link to="/instructor-details">Eugen Freman</Link></h4>
				            <span>Executive</span>
				          </div>  
				        </div>
				      </div>

				      <div className="item">
				        <div className="single-team-inner">
				          <div className="thumb">
				            <img src={publicUrl+"assets/img/team/3.png"} alt="img" />
				            <div className="social-wrap">  
				              <div className="social-wrap-inner">
				                <a className="social-share" href="/"><i className="fa fa-share-alt" /></a>
				                <ul>
				                  <li><a href="/"><i className="fa fa-facebook" /></a></li>
				                  <li><a href="/"><i className="fa fa-twitter" /></a></li>
				                  <li><a href="/"><i className="fa fa-pinterest" /></a></li>
				                  <li><a href="/"><i className="fa fa-linkedin" /></a></li>
				                </ul>
				              </div>
				            </div>
				          </div>
				          <div className="details"> 
				            <h4><Link to="/instructor-details">Jaction Leo</Link></h4>
				            <span>Developer</span>
				          </div>  
				        </div>
				      </div>

				      <div className="item">
				        <div className="single-team-inner">
				          <div className="thumb">
				            <img src={publicUrl+"assets/img/team/4.png"} alt="img" />
				            <div className="social-wrap">  
				              <div className="social-wrap-inner">
				                <a className="social-share" href="/"><i className="fa fa-share-alt" /></a>
				                <ul>
				                  <li><a href="/"><i className="fa fa-facebook" /></a></li>
				                  <li><a href="/"><i className="fa fa-twitter" /></a></li>
				                  <li><a href="/"><i className="fa fa-pinterest" /></a></li>
				                  <li><a href="/"><i className="fa fa-linkedin" /></a></li>
				                </ul>
				              </div>
				            </div>
				          </div>
				          <div className="details"> 
				            <h4><Link to="/instructor-details">Jordan Feg</Link></h4>
				            <span>Marketing Expert</span>
				          </div>  
				        </div>
				      </div>

				      <div className="item">
				        <div className="single-team-inner">
				          <div className="thumb">
				            <img src={publicUrl+"assets/img/team/5.png"} alt="img" />
				            <div className="social-wrap">  
				              <div className="social-wrap-inner">
				                <a className="social-share" href="/"><i className="fa fa-share-alt" /></a>
				                <ul>
				                  <li><a href="/"><i className="fa fa-facebook" /></a></li>
				                  <li><a href="/"><i className="fa fa-twitter" /></a></li>
				                  <li><a href="/"><i className="fa fa-pinterest" /></a></li>
				                  <li><a href="/"><i className="fa fa-linkedin" /></a></li>
				                </ul>
				              </div>
				            </div>
				          </div>
				          <div className="details"> 
				            <h4><Link to="/instructor-details">Walson Jordan</Link></h4>
				            <span>Ui/Ux Expert</span>
				          </div>  
				        </div>
				      </div>
				    </div>


					<div class="col-12">
						<div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

							<div class="carousel-inner">
								<div class="carousel-item active">
									<div class="row">

										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

												</div>

											</div>
										</div>
										
										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

												</div>
											</div>
										</div>
										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

												</div>
											</div>
										</div>

									</div>
								</div>
								<div class="carousel-item">
									<div class="row">

										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

												</div>

											</div>
										</div>
										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

												</div>
											</div>
										</div>
										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

												</div>
											</div>
										</div>

									</div>
								</div>
								<div class="carousel-item">
									<div class="row">

										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

												</div>

											</div>
										</div>
										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

												</div>
											</div>
										</div>
										<div class="col-md-4 mb-3">
											<div class="card">
												<img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"/>
												<div class="card-body">
													<h4 class="card-title">Special title treatment</h4>
													<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				  </div>
				</div>

        }
}

export default Team