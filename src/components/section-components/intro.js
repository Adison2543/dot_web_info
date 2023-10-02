import React, { Component } from 'react';

const Intro = ({tran}) => {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area intro-area--top">
			  <div className="container">
			    <div className="intro-area-inner intro-home-1 bg-black">
			      <div className="row no-gutters">
			        <div className="col-lg-4 text-lg-left text-center">
			          <div className="intro-title">
			            <h3 >{tran('bya')}</h3>
			            <ul>
			              <li><i className="fa fa-check" /> {tran('course')} </li>
			              <li><i className="fa fa-check" /> {tran('news')}</li>
						  <li><i className="fa fa-check" /> {tran('lesson')} </li>
			              <li><i className="fa fa-check" /> {tran('app')}</li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-8 align-self-center">
			          <ul className="row no-gutters">
			            <li className="col-md-4">
			              <div className="single-intro-inner style-white text-center">
			                <div className="thumb">
			                  <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h5 className='px-2'>{tran('ieu')}</h5>
			                </div>
			              </div>
			            </li>
			            <li className="col-md-4">
			              <div className="single-intro-inner style-white text-center">
			                <div className="thumb">
			                  <img src={publicUrl+"assets/img/intro/2.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h5 className='px-2'>{tran('ikp')}</h5>
			                </div>
			              </div>
			            </li>
			            <li className="col-md-4">
			              <div className="single-intro-inner style-white text-center">
			                <div className="thumb">
			                  <img src={publicUrl+"assets/img/intro/3.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h5 className='px-2'>{tran('urr')}</h5>
			                </div>
			              </div>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }

export default Intro