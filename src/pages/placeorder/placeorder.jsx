import React, { useContext } from 'react'
import "./placeorder.css"
import { StoreContext } from '../../context/StoreContext'



const place = () => {
  const {getTotalcartAmount}=useContext(StoreContext);
  return (
    <form className="Place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multifeilds">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multifeilds">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multifeilds">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalcartAmount()==0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <p>$<b>{getTotalcartAmount()==0?0:getTotalcartAmount() + 2}</b></p>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>

      </div>
    </form>
  )
}

export default place
