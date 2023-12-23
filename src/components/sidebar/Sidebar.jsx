import React from 'react'
import "./sidebar.scss"
import { ReactComponent as MySVG1 } from '../assets/side/home.svg';
import { ReactComponent as MySVG2 } from '../assets/side/task.svg';
import { ReactComponent as MySVG3 } from '../assets/side/boxes.svg';
import { ReactComponent as MySVG4 } from '../assets/side/truck.svg';
import { ReactComponent as MySVG5 } from '../assets/side/horn.svg';
import { ReactComponent as MySVG6 } from '../assets/side/stair.svg';
import { ReactComponent as MySVG7 } from '../assets/side/payouts.svg';
import { ReactComponent as MySVG8 } from '../assets/side/percentage.svg';
import { ReactComponent as MySVG9 } from '../assets/side/profile.svg';
import { ReactComponent as MySVG10 } from '../assets/side/paint.svg';
import { ReactComponent as MySVG11 } from '../assets/side/spark.svg';

import { ReactComponent as MySVG12 } from '../assets/side/purse.svg';
import { ReactComponent as MySVG13 } from '../assets/side/dropDown.svg';
import { ReactComponent as MySVG14 } from '../assets/side/Image.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="side_container1">
            <div className="side_top">
               <div className='side_top_left'>
                  <MySVG14 className="side_svg_img"/>
                  <div className='side_top_text'>
                    <span className='side_top_text1'>Nishyan</span>
                    <span className='side_top_text2'>Visit Store</span>
                  </div>
               </div>
               <MySVG13 className="side_svg"/>
            </div>

            <div className="side_bottom">
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG1 className="side_svg"/>
                    <span className='side_menu_text'>Home</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG2 className="side_svg"/>
                    <span className='side_menu_text'>Orders</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG3 className="side_svg"/>
                    <span className='side_menu_text'>Products</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG4 className="side_svg"/>
                    <span className='side_menu_text'>Delivery</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG5 className="side_svg"/>
                    <span className='side_menu_text'>Marketing</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG6 className="side_svg"/>
                    <span className='side_menu_text'>Analytics</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG7 className="side_svg"/>
                    <span className='side_menu_text'>Payouts</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG8 className="side_svg"/>
                    <span className='side_menu_text'>Discounts</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG9 className="side_svg"/>
                    <span className='side_menu_text'>Audience</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG10 className="side_svg"/>
                    <span className='side_menu_text'>Appearance</span>
                  </div>
                </div>
                <div className="side_logo">
                  <div className='side_menu'>
                    <MySVG11 className="side_svg"/>
                    <span className='side_menu_text'>Plugin</span>
                  </div>
                </div>
                
                
                   {/* <MySVG1 className="side_svg"/>
                   <MySVG2 className="side_svg"/>
                   <MySVG3 className="side_svg"/>
                   <MySVG4 className="side_svg"/>
                   <MySVG5 className="side_svg"/>
                   <MySVG6 className="side_svg"/>
                   <MySVG7 className="side_svg"/>
                   <MySVG8 className="side_svg"/>
                   <MySVG9 className="side_svg"/>
                   <MySVG10 className="side_svg"/>
                   <MySVG11 className="side_svg"/> */}

                   {/* <MySVG12 className="side_svg"/>
                   <MySVG13 className="side_svg"/>
                   <MySVG14 className="side_svg"/> */}
            </div>
        </div>
        <div className="side_container2">
           <MySVG12 className="side_svg"/>
           <div className="side_container2_bottom">
              <div className="side_container2_bottom_text">Available credits</div>
              <div className="side_container2_bottom_number">222.10</div>
           </div>
        </div>
    </div>
  )
}

export default Sidebar