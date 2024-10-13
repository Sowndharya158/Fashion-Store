import { useContext } from 'react';
import { orderContext } from '../store/OrderContext';
import { useNavigate } from 'react-router-dom';



export default function Header({ opencart, cartItems }) {

const {orderDetails}=useContext(orderContext);
const navigation=useNavigate();
    function setCartCount() {
        let count = 0;
        cartItems.forEach(item => {
            count += item.quantity;
        });
        return count;
    }

    function handleOrder(){
        navigation("/orders")
        console.log(orderDetails)
    }

    function handleCartClick(){
        if(cartItems.length>0){
            opencart()
        }
        else{
            navigation("/payment")
        }
    }

    return (
        <header id="main-header">
            <div className="headercontent">
                <img id="logo" src="Logo.png" alt="Company Logo" />
                <h1 style={{ fontSize: "3rem", textAlign: "left", letterSpacing: "0.10em", color: "#134074", justifySelf: "flex-start" }}>FASHION FRENZY</h1>
            </div>
            <div style={{display:"flex",margin:"1rem"}}>
            <button className="cartbutton" onClick={handleCartClick}>
                Cart ({cartItems.length > 0 ? setCartCount() : 0})
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            </button>
            <button className="cartbutton" onClick={handleOrder}>Your Orders</button>
            </div>
        </header>
    );
}
