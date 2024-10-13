import { useContext } from 'react';
import { cartContext } from '../store/CartContext';
import LOV from "../LOV.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useState } from 'react';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { orderContext } from '../store/OrderContext.js';

export default function Orders() {
  const { cartItems, setCartItems } = useContext(cartContext);
  const { orderDetails, addOrderDetails } = useContext(orderContext);
  const navigate = useNavigate();

  function handleHomeNavigation() {
    navigate("/");
  }

  // Helper function to calculate the total price of an order
  const calculateTotalAmount = (order) => {
    return order[0].cartItems.reduce((total, product) => total + product.Price * product.quantity, 0).toFixed(2);
  };

  

  return (
    <>
      <div style={{ display: "flex", margin: "1rem", gap: "5px" }} onClick={handleHomeNavigation}>
        <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faHouse} size="2xl" />
        <h2 style={{ cursor: "pointer" }}>HOME</h2>
      </div>

      {orderDetails.length < 1 ? (
        <>
          <div className='checkout-container'>
            <div className='emptycart'>
              <img src="/EmptyCart.png" alt="cart-image" />
              <h2 style={{ textAlign: "center" }}><strong>You don't have any orders placed</strong></h2>
              <h3 style={{ fontWeight: "lighter" }}>Looks like you have not placed any orders yet. Go ahead & explore the dresses available.</h3>
              <button className='home' style={{ cursor: "pointer" }} onClick={handleHomeNavigation}>Go back to home</button>
            </div>
          </div>
        </>
      ) : (
        <div style={{ width: "100%", margin: "2rem auto" }}>
          <div className='products' style={{width:"80%", margin:"3rem auto"}}>
            <h2 style={{ margin: "2rem", textAlign: "center" }}>Past Orders ({orderDetails.length})</h2>
            {orderDetails.map((order, index) => (
              <div key={index} style={{margin:"3rem auto",width:"80%"}}>
                {/* Table for displaying items in the order */}
                <h3 >Order #{index + 1}</h3>
                <table style={{ width: "80%", borderCollapse: "collapse", marginBottom: "2rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid #ccc" }}>
                      <th style={{ padding: "8px", textAlign: "left" }}>Item</th>
                      <th style={{ padding: "8px", textAlign: "left" }}>Quantity</th>
                      <th style={{ padding: "8px", textAlign: "left" }}>Total Price</th>
                      <th style={{ padding: "8px", textAlign: "left",textWrap:"nowrap" }}>Order Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                    {order[0].cartItems.map((product, index) => (
                      <><tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "8px" }}>
                          <strong>{product.Name}</strong><br />
                          <span style={{ fontWeight: "lighter" }}>{product.Brand}</span>
                        </td>
                        <td style={{ padding: "8px" }}>{product.quantity}</td>
                        <td style={{ padding: "8px" }}>${(product.Price * product.quantity).toFixed(2)}</td>
                        <td style={{ padding: "8px" }}>{order[0].orderDate}</td>
                    </tr>
                        </>
                    ))}
                    
                  </tbody>
                </table>
                <h4 style={{width:"70%",textAlign:"right",fontWeight: "bold" }}>Total Amount: ${calculateTotalAmount(order)}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
