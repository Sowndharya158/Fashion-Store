import { useContext } from 'react'
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
import OrderSuccessFul from './ListCartItems.jsx';
import EmptyCart from './EmptyCart.jsx';
import DisplayCartItems from './DisplayCartItems.jsx';
import AddressDetails from './AddressDetails.jsx';

export default function Checkout(){
    
    const [addressInfo, setAddressInfo] = useState({
        name: '',
        street: '',
        apt: '',
        city: '',
        state: '',
        pincode: '',
      });
    const {cartItems,setCartItems}=useContext(cartContext)
    const {orderDetails,addOrderDetails}=useContext(orderContext)
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [orderPlaced,setOrderPlaced]=useState(false)
    const [currency, setCurrency] = useState(options.currency);
    const navigate=useNavigate()
    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: total,
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
        const name = details.payer.name.given_name;
          
          alert(`Transaction completed by ${name}`);
          let date=new Date();
    let datestr = date.getDate();
let month = date.getMonth(); 
let year = date.getFullYear();
let orderDate=datestr+"-"+(month+1)+"-"+year
          addOrderDetails({cartItems,orderDate,address:addressInfo})
          setOrderPlaced(!orderPlaced)
        });
      }

function handleHomeNavigation(){
navigate("/")
}

function handleCOD(){
    let date=new Date();
    let datestr = date.getDate();
let month = date.getMonth(); 
let year = date.getFullYear();
 let orderDate=datestr+"-"+(month+1)+"-"+year
          addOrderDetails({cartItems,orderDate,address:addressInfo})
    setOrderPlaced(!orderPlaced)
}


const total=cartItems.reduce((acc,item)=>(acc+item.Price*item.quantity),0)

console.log("Order Placed --",orderDetails)

function updateAddress(toUpdate){
setAddressInfo(toUpdate)
}

console.log(addressInfo)

    return(
        <>
       {!orderPlaced && <div style={{display:"flex",margin:"1rem",gap:"5px"}} onClick={handleHomeNavigation} > <FontAwesomeIcon style={{cursor:"pointer"}} icon={faHouse} size="2xl" /><h2 style={{cursor:"pointer"}}>HOME</h2></div>}
        
           {!orderPlaced && cartItems ?(cartItems.length ===0 ?
           <EmptyCart/>:
           <><div className='checkout-screen'>
            <DisplayCartItems/>      
<div className="payment">
<AddressDetails updateAddress={updateAddress}/>
<button onClick={handleCOD} disabled={addressInfo.name==="" || addressInfo.apt==="" || addressInfo.city===""|| addressInfo.pincode===""|| addressInfo.state==="" || addressInfo.state===""}>Cash on Delivery <FontAwesomeIcon size="lg" icon={faShippingFast}></FontAwesomeIcon></button>
    {isPending ? <p>.....LOADING</p>: <PayPalButtons disabled={addressInfo.name==="" || addressInfo.apt==="" || addressInfo.city===""|| addressInfo.pincode===""|| addressInfo.state==="" || addressInfo.state===""}
          style={{ layout: "vertical",width:"100%",margin:"1rem" }}
          createOrder={(data, actions) => onCreateOrder(data, actions)}
          onApprove={(data, actions) => onApproveOrder(data, actions)}
        />}
   
</div></div></>):
<OrderSuccessFul/>}</>)}

