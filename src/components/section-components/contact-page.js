import React from 'react';
import contactList from '../data/contact-list'

const ContactPage = ({tran}) => {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div>
				<div className="contact-list pd-top-120 pd-bottom-90">
					<div className="container">
						{contactList.map((item)=>(
							<div className="row mb-5" key={item.id}>
								<div className="col-12 col-md-6" style={{ height: '190px', backgroundImage: 'url("'+publicUrl+'assets/img/contact/' + (item.cover ? item.cover : 'default.png') +'")', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
								<div className="col-12 col-md-6 py-2">
									<p>{item.address}</p>
									{item.phone ? <p><i className="fa fa-phone" /> {item.phone}</p> : ''}
									{item.email ? <p><i className="fa fa-envelope" /> {item.email}</p> : ''}
									{item.map_link ? <div><i className="fa fa-map-marker" /> <a href={item.map_link} target='_BLANK' rel="noopener noreferrer" className='text-primary'> Open Location on map</a></div> : ''}
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