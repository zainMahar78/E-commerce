import { Navbar } from "../components/Navbar";
import axios from 'axios'
import dayjs from "dayjs";
import { formatMoney } from "../utils/money";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Orders.css";
export function Orders( {cart} ) {
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    axios.get('/api/orders?expand=products').then((response)=>{
      setOrders(response.data)
    })
  }, [])
  return (
    <>
      <title>Orders</title>
      <Navbar cart={cart}/>
      
      {orders.map((order)=>{

      return  <div key={order.id} className="container main-container">

      
      <div className="order-div">
        <h1>Your Orders</h1>
      </div>
      {/* product header */}
      <div>

      
      <div className="order-container">
        <div className="order-date">
          <div>Order placed:</div>
          <div>{dayjs(order.orderTimeMs).format('MMMM D')}</div>
        </div>
        <div className="order-total">
          <div>Total:</div>
          <div>{formatMoney(order.totalCostCents)}</div>
        </div>
        <div>
          <div>Order ID:</div>
          <div>{order.id}</div>
        </div>
      </div>
      {/* add to cart product details */}
      {order.products.map((orderProduct)=>{
        return(   
          <div key={orderProduct.productid} className="product-details">
        <img src={orderProduct.product.image} alt="" height={100} />
        <div className="cart-track-btn">
          <div >
            <div className="product-title">
              {orderProduct.product.name}
            </div>
            <div className="delivery-date">{dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}</div>
            <div className="quantity">Quantity: {orderProduct.quantity}</div>
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
      })}
    </>
  ); 
}
