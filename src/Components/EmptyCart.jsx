import { useNavigate } from 'react-router-dom';

export default function EmptyCart(){
    const navigate=useNavigate()
    function handleHomeNavigation(){
        navigate("/")
        }
        
    return(
<><div className='checkout-container'><div className='emptycart'><img src="./EmptyCart.png" alt="cart-image"/><h2 style={{textAlign:"center"}}><strong>Your Cart is empty</strong></h2><h3 style={{fontWeight:"lighter"}}>Looks like you have not added anything to the cart yet. Go ahead & explore the dresses available.</h3><button className='home' style={{cursor:"pointer"}} onClick={handleHomeNavigation}>Go back to home</button></div></div></>)}