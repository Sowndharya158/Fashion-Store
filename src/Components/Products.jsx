import Productitems from "../LOV";

export default function Products({ setItem }) { // Correct prop name
    function AddItemToCart(name, brand, price,productid) {
        const Item = { Name: name, Brand: brand, Price: price ,productid:productid,quantity:1};
        setItem(Item); // Use setItem function passed from props
    }
    return (
        <ul className="product-items">
            {Productitems.map((product) => {
                return (
                    <li key={product.Name}>
                        <article className="product">
                            <img src={product.image} alt={product.image.split(".")[0]} height="70%" />
                            <div className="productcontent">
                                <h3>{product.brand}</h3>
                                <p>{product.Name}</p>
                                <p>${product.price}</p>
                                {/* Pass a reference to AddItemToCart, don't invoke it */}
                                <p style={{ alignSelf: "center" }}><button className="addtocart" onClick={() => AddItemToCart(product.Name, product.brand, product.price,product.productid)}>Add to Cart</button></p>
                            </div>
                        </article>
                    </li>
                );
            })}
        </ul>
    );
}
