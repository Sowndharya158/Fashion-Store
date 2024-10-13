import { useContext } from 'react'
import { cartContext } from '../store/CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



export default function OrderSuccessFul()
{const {cartItems,setCartItems}=useContext(cartContext)


const navigate=useNavigate()
function handleHomeNavigationAfterOrder(){
    setCartItems([])
    navigate("/")
}
return(
<><div className='checkout-container'><div style={{display:"flex",margin:"1rem auto",width:"100%"}}><FontAwesomeIcon icon={faSquareCheck} size='2xl' style={{color:"#4BB543"}}/><h2 style={{marginLeft:"2rem",textAlign:"center"}}>Order has been placed successfully</h2><button className='home' style={{cursor:"pointer"}} onClick={handleHomeNavigationAfterOrder}>Go back to home</button></div>
<div className='products'>
            <h2 style={{margin:"2rem",textAlign:"center"}}>Items Placed({cartItems.reduce((acc,item)=>(item.quantity+acc),0)})</h2>
                {cartItems.map((cartitem)=>
                <div className='cart-product'>
                    <div className='product-image'><img src={`./dress${cartitem.productid}.jpg`} alt="dress"/></div>
                    <div className='product-details'><h3><strong>{cartitem.Name}</strong></h3>
                    <h3 style={{fontWeight:"lighter"}}>{cartitem.Brand}</h3>
                    <h3 style={{fontWeight:"lighter"}}>${cartitem.Price}</h3>
                    <h3 style={{fontWeight:"lighter"}}><strong>Quantity:</strong> {cartitem.quantity}</h3>
                    </div>
                </div>
                )}
</div></div></>)}
        