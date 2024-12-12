import React, { useContext } from 'react';
import './CSS/checkout.css';
import { ShopContext } from '../Context/ShopContext.jsx';

const Checkout = () => {
  const { getTotalCartAmount, all_product, cartItems } = useContext(ShopContext);

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Basic Information</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Full Address" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Zip Code" />
          </div>
          <button type="submit">Place Order</button>
        </form>
      </div>

      <div className="checkout-summary">
        <h2>Order Summary</h2>
        {all_product.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div key={product.id} className="summary-item">
                <p className="product-name">{product.name}</p>
                <p>{cartItems[product.id]} x INR {product.new_price}</p>
                <p>INR {cartItems[product.id] * product.new_price}</p>
              </div>
            );
          }
          return null;
        })}
        <div className="summary-total">
          <h3>Grand Total: INR {getTotalCartAmount()}</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
