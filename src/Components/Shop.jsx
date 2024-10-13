import Products from "./Products"

export default function Shop({setItem}){

    return(
        <div className="shop">
        <h3 style={{fontSize:"xx-large",letterSpacing:"0.1em",textTransform:"uppercase",color:"#1F2232"}}>Elegant Clothing for Women</h3>
        <Products setItem={setItem}/>
        </div>
    )

}
