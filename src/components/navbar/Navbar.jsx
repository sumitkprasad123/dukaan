import React from 'react'
import "./navbar.scss"
import { ReactComponent as MySVG1 } from '../assets/msg.svg';
import { ReactComponent as MySVG2 } from '../assets/help.svg';
import { ReactComponent as MySVG3 } from '../assets/polygon.svg';
import { ReactComponent as MySVG4 } from '../assets/search.svg';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="container_box1">
               <span className='payouts'>Payouts</span>
               <div className="icone_help_box">
                  <MySVG2 className='icone_help'/>
                  <span className='icone_help_text'>How it works</span>
               </div>
            </div>
            <div className="container_box2">
               <div className="search">
                  <MySVG4 className='icone_search'/>
                  <input type="text" placeholder="Search features, tutorials, etc"/>
               </div>
            </div>
            <div className="container_box3">
               <div className="svg">
                  <div className="svg_box"><MySVG1 className='svg1'/></div>
                  <div className="svg_box"><MySVG3 className='svg2'/></div>
               </div>
            </div> 
        </div>
    </div>
  )
}

export default Navbar