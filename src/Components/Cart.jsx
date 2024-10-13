import React, { useRef } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router-dom';



const Cart = forwardRef(function Cart({ cartItems, closeCart,AddCount,DeleteItem }, ref) {
    const dialog = useRef();
    const navigate=useNavigate();

    function openPayment(){
navigate("/payment")
    }

    useImperativeHandle(ref, () => ({
        open: () => {
            dialog.current &&  dialog.current.showModal();
        },
        close: () => {
            dialog.current &&  dialog.current.close();
        }
    }));

console.log(cartItems)
    
    
    const calculateCartTotal=cartItems.reduce((total,item)=>{
        return(total+(item.Price*item.quantity))
    },0);
   
    return (
        <dialog ref={dialog} className="modal-background">
            <div className="modal-content">
                <h2 style={{ fontSize: "xx-large", paddingBottom: "1rem" }}>Your Cart:</h2>
                {cartItems.length > 0 ? 
              <ul>{cartItems.map((item,index)=>{
                return(<li key={index} className='single-item'><h4>{item.Name}(${item.Price})</h4><div className='item-actions'><button onClick={()=>DeleteItem(item.productid)}>-</button><h4>{item.quantity}</h4><button onClick={()=>AddCount(item)}>+</button></div></li>)
              })}</ul>
                 : (<>
                    <p>No Items in your cart</p>
                    </>
                )}

<p>Cart Total: ${calculateCartTotal}</p>
                <div className="modalbuttons">
                    <button className='modalbuttons' onClick={closeCart}>Close</button>
                    <button className='modalbuttons' onClick={openPayment}>Proceed to Payment</button>
                </div>
            </div>
        </dialog>
    );
});

export default Cart;
