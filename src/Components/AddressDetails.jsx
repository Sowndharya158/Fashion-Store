import { useState } from 'react'

export default function AddressDetails({updateAddress}){


    const [addressDetails,setAddressDetails]=useState({
        name:"",
        street:"",
        apt:"",
        city:"",
        state:"",
        pincode:""
    })

    function handleInputChange(e){
        console.log("I was called")
        const {name,value}=e.target;
        const updatedAddress = { ...addressDetails, [name]: value };
        setAddressDetails(updatedAddress)
        updateAddress(updatedAddress)
    }
    console.log(addressDetails)
    return(
       <>
            <h2>Address Details</h2>
            <div className='addressdetails'>
                
                <label htmlFor='name'>Name</label>
                <input type="text" name='name' id="name" onChange={handleInputChange}/>
                <label htmlFor="email">Email Id (Please enter a valid email address)</label>
                <input type='email' name="email" id="email" onChange={handleInputChange}/>
                <label htmlFor='street'>Street Address</label>
                <input type='text' name="street" id="street" placeholder='Enter your street or area name' onChange={handleInputChange}/>
                <label htmlFor='apt'>House/Apartment/Block No </label>
                <input type='text' name="apt" id="apt" onChange={handleInputChange}/>
                <label htmlFor='city'>City/Town</label>
                <input type="text" name="city" id="city" onChange={handleInputChange}/>
                <label htmlFor='state'>State</label>
                <input type='text' name='state' id="state" onChange={handleInputChange}/>
                <label htmlFor='pincode'>Pincode</label>
                <input type='number' name='pincode' id="pincode" min="6" max="6" onChange={handleInputChange}/>
              
            </div>
            </>
    )
}