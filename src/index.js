import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './store/CartContext';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { OrderProvider } from './store/OrderContext';

const initialOptions = {
  "client-id": "AaQOkxbb12OJ22CionB0-Zz-vLmabXIvJgydpNk_hBZob6sz0p8EWxFbMelzhWmHeCMQtBMyeiY9LXPa",
  currency: "USD",
  intent: "capture",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PayPalScriptProvider options={initialOptions}>
      <OrderProvider>
    <CartProvider>
    <App/>
    </CartProvider>
    </OrderProvider>
    </PayPalScriptProvider>
    </BrowserRouter>
  </React.StrictMode>
);

