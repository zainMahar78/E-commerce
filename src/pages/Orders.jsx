import { Navbar } from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Orders.css";
import socks from "../assets/images/athletic-cotton-socks-6-pairs.jpg";
import shirt from "../assets/images/adults-plain-cotton-tshirt-2-pack-teal.jpg"
export function Orders() {
  const addToCartProducts = [{ img: socks, text: "Black and Gray Athletic Cotton Socks - 6 Pairs", deliverDate: "Arriving on: August 15", quantity: "1"},
    {img: shirt, text: "Adults Plain Cotton T-Shirt - 2 Pack", deliverDate: "Arriving on: August 19", quantity: "2"}
  ]
  return (
    <>
      <title>Orders</title>
      <Navbar />
      <div className="container main-container">

      
      <div className="order-div">
        <h1>Your Orders</h1>
      </div>
      {/* product header */}
      <div>

      
      <div className="order-container">
        <div className="order-date">
          <div>Order placed:</div>
          <div>August 12</div>
        </div>
        <div className="order-total">
          <div>Total:</div>
          <div>$35.06</div>
        </div>
        <div>
          <div>Order ID:</div>
          <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
        </div>
      </div>
      {/* add to cart product details */}
      {addToCartProducts.map((product)=>{
return(   
      <div className="product-details">
        <img src={product.img} alt="" height={100} />
        <div className="cart-track-btn">
          <div >
            <div className="product-title">
              {product.text}
            </div>
            <div className="delivery-date">{product.deliverDate}</div>
            <div className="quantity">Quantity: {product.quantity}</div>
           <div className="cart-btn">
             <button className="add-to-cart-btn">Add to cart</button>
            
            </div>
          </div>
          <div className="track-btn">
            <button className="track-package-btn">Track Package</button>
          </div>
        </div>
      </div>)})}
      </div>
  </div>
    </>
  ); 
}
