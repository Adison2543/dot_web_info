import React from 'react';
import contactList from '../data/contact-list'

const ContactPage = ({tran}) => {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div>
				<div className="contact-list pd-top-120 pd-bottom-90">
					<div className="container">
						{contactList.map((item)=>(
							<div className="row mb-5" key={item.id}>
								<div className="col-12 col-md-6" style={{ height: '300px', backgroundImage: 'url("'+publicUrl+'assets/img/contact/' + (item.cover ? item.cover : 'default.png') +'")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' , backgroundPosition: 'center' }}></div>
								<div className="col-12 col-md-6 py-2">
									<p className="fw-bold fs-3">{tran('cur_lang')=='en' ? item.name_en : item.name_lo}</p>
									<p>{tran('cur_lang')=='en' ? item.address_en : item.address_lo}</p>
									{item.phone ? <p><i className="fa fa-phone" /> {item.phone}</p> : ''}
									{item.fax ? <p><i className="fa fa-fax" /> {item.fax}</p> : ''}
									{item.email ? <p><i className="fa fa-envelope" /> {item.email}</p> : ''}
									{item.website ? <div><i className="fa fa-globe" /> <a href={item.website} target='_BLANK' rel="noopener noreferrer" className='text-primary'>{item.website}</a></div> : ''}
									
									{item.map_link ? <div><i className="fa fa-map-marker" /> <a href={item.map_link} target='_BLANK' rel="noopener noreferrer" className='text-primary'>{tran('foot_open_map')}</a></div> : ''}
									{item.facebook ? <div><i className="fa fa-facebook-square"></i> <a href={item.facebook_link} className={`text-primary ${item.facebook_link ? '' : 'pe-none'}`}> {item.facebook}</a></div> : ''}
								</div>
								<hr className='mt-5 border border-dark' />
							</div>
						))}
					</div>
				</div>
			</div>
}

export default ContactPage