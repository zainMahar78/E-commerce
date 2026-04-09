import { Navbar } from "../components/Navbar";
import "./Orders.css";
import socks from "../assets/images/athletic-cotton-socks-6-pairs.jpg";
export function Orders() {
  return (
    <>
      <title>Orders</title>
      <Navbar />
      <div className="order-div">
        <h1>Your Orders</h1>
      </div>
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
      <div className="product-details">
      <img src={socks} alt="" height={100} />
       <div>
         <div className="product-title">Black and Gray Athletic Cotton Socks - 6 Pairs</div>
        <div>Arriving on: August 15</div>
        <div>Quantity: 1</div>
        <button className="add-to-cart-btn">Add to cart</button>
        </div>
       <div>
         <button className="track-package-btn">Track Package</button>
        </div>
      </div>
    </>
  );
}
