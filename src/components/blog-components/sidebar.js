import React from 'react';
import '../css/sidebar.css'



const Sidebar = ({setType, type, tran, letSearch}) => {
    return (
          <div className="col-lg-4 col-12" >
            <div className="td-sidebar">
              {/* <div className="widget widget_catagory" >
                <h4 className="widget-title">{tran('catagory')}</h4>                                 
                <ul className="catagory-items go-top">
                  <li style={ type === 1 ? {backgroundColor: 'var(--main-color)'} : {}}><Link to="#" onClick={() => setType(1)}>{tran('dot')} <i className="fa fa-caret-right" /></Link></li>
                  <li style={ type === 2 ? {backgroundColor: 'var(--main-color)'} : {}}><Link to="#" onClick={() => setType(2)}>{tran('mpw')}<i className="fa fa-caret-right" /></Link></li>
                </ul>
              </div>  */}
              <div className="widget widget_search_course">    
                <h4 className="widget-title">{tran('search')}</h4>                               
                <form className="search-form single-input-inner" onSubmit={letSearch}>
                  <input type="text" placeholder={`${tran('search')}`} maxLength={100}  name="searchWord"/>
                  <button className="btn btn-base w-100 mt-3" type="submit"><i className="fa fa-search" />{tran('search')}</button>
                </form>
              </div>                  
            </div>
          </div>
    )
  }

export default Sidebar;
