import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css'



const Sidebar = ({setType, type}) => {
    return (
          <div className="col-lg-4 col-12" >
            <div className="td-sidebar">
              <div className="widget widget_catagory" >
                <h4 className="widget-title">Catagory</h4>                                 
                <ul className="catagory-items go-top">
                  <li style={ type === 1 ? {backgroundColor: 'var(--main-color)'} : {}}><Link to="#" onClick={() => setType(1)}>กรมขนส่ง <i className="fa fa-caret-right" /></Link></li>
                  <li style={ type === 2 ? {backgroundColor: 'var(--main-color)'} : {}}><Link to="#" onClick={() => setType(2)}>กรมโยธา<i className="fa fa-caret-right" /></Link></li>
                </ul>
              </div>                  
            </div>
          </div>
    )
  }

export default Sidebar;
