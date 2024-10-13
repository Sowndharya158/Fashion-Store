import { useContext } from 'react'
import { cartContext } from '../store/CartContext'
export default function DisplayCartItems(){

    const {cartItems,setCartItems}=useContext(cartContext)
    const total=cartItems.reduce((acc,item)=>(acc+item.Price*item.quantity),0);
return(<div className='products'>
<h2 style={{margin:"2rem",textAlign:"center"}}>Cart Items ({cartItems.reduce((acc,item)=>(item.quantity+acc),0)})</h2>
    {cartItems.map((cartitem)=>
    <div className='cart-product'>
        <div className='product-image'><img src={`./dress${cartitem.productid}.jpg`} alt="dress"/></div>
        <div className='product-details'><h3><strong>{cartitem.Name}</strong></h3>
        <h3 style={{fontWeight:"lighter"}}>{cartitem.Brand}</h3>
        <h3 style={{fontWeight:"lighter"}}>${cartitem.Price}</h3>
        <h3 style={{fontWeight:"lighter"}}><strong>Quantity:</strong> {cartitem.quantity}</h3>
        </div>
       
    </div>
    
    )}<h2 style={{textAlign:"center"}}>Total Amount Payable : ${total}</h2>
</div>)}