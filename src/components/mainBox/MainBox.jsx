import React from 'react'
import "./mainbox.scss"
import { ReactComponent as MySVG1 } from '../assets/side/arrow.svg';
import { ReactComponent as MySVG2 } from '../assets/help.svg';
import { ReactComponent as MySVG3 } from '../assets/search.svg';
import { ReactComponent as MySVG4 } from '../assets/side/download.svg';
import { ReactComponent as MySVG5 } from '../assets/side/Vector.svg';
import Payment from '../payment/Payment';


const MainBox = () => {
  return (
    <div className="mainbox">
        <div className="container">
          {/* top */}
          <div className="top">

            <div className="mainbox_top">
               <span className='mainbox_top_text'>Overview</span>
               <div className="mainbox_top_button">
                 <span>This Month</span>
                 <MySVG1 className='mainbox_top_drop_icon' />
               </div>
            </div>
            {/*  */}
            <div className="payouts">
                 <div className="payouts_container">
                    <div className="next_payout">
                       <span>Next Payout</span>
                       <MySVG2 />
                    </div>
                    <span className='payouts_price'>₹92,312.20</span>
                    <span className='payouts_text'>Next payout date Today, 04:00PM</span>
                    <a  className='payouts_text' href="#">view 13 orders</a>
                 </div>

                 <div className="payouts_container">
                    <div className="next_payout">
                       <span>Next Payout</span>
                       <MySVG2 />
                    </div>
                    <span className='payouts_price'>$92,312.20</span>
                    <span className='payouts_text'>Next payout date Today, 04:00PM</span>
                    <a  className='payouts_text' href="#">view 13 orders</a>
                 </div>

                 <div className="payouts_container">
                    <div className="next_payout">
                       <span>Next Payout</span>
                       <MySVG2 />
                    </div>
                    <span className='payouts_price'>$92,312.20</span>
                    <span className='payouts_text'>Next payout date Today, 04:00PM</span>
                    <a  className='payouts_text' href="#">view 13 orders</a>
                 </div>
            </div>
          </div>

            {/*  */}
            <span className='transactions'>Transactions | This Month</span>
            {/*  */}

            <div className="clickButton">
                <button className="btn_payouts">Payouts (22)</button>
                <button className="btn_refunds">Refunds (6)</button>
            </div>
            {/*  */}
          
        <div className="table">
            <div className="table_fun">
                <div className="table_search">
                    <MySVG3 className='search_logo'/>
                    <input
                      type="text"
                      placeholder="Order ID or transaction ID"
                      />
                </div>
                <div className="table_sort">
                   <button className="sort">
                    Sort <MySVG5/>
                    </button>
                   <MySVG4/>

                </div>
            </div>
            {/*  */}
           
                <table>
                    <tr>
                        <td>Order ID</td>
                        <td>Status</td>
                        <td>Transaction ID</td>
                        <td>Refund date </td>
                        <td>Order amount</td>
                    </tr>
                    <Payment/>
                    <Payment/>
                    <Payment/>
                    <Payment/>
                    <Payment/>
                    <Payment/>
                </table>      
            </div>



         
        </div>
    </div>
  )
}

export default MainBox