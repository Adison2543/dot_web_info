import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css'



const Sidebar = ({id, tran}) => {
    console.log("id: ", id)

    return (
          <div className="col-lg-4 col-12" >
            <div className="td-sidebar">
              <div className="widget widget_catagory" >
                <h4 className="widget-title">{tran('catagory')}</h4>                                 
                <ul className="catagory-items go-top">
                  <li style={ id === 1 ? {backgroundColor: 'var(--main-color)'} : {}}><Link to={"/blog"} >{tran('dot')} <i className="fa fa-caret-right" /></Link></li>
                  <li style={ id === 2 ? {backgroundColor: 'var(--main-color)'} : {}}><Link to={"/blog"} >{tran('mpw')}<i className="fa fa-caret-right" /></Link></li>
                </ul>
              </div>                  
            </div>
          </div>
    )
  }

export default Sidebar;
