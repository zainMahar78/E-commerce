import { Navbar } from "../../components/Navbar";
import axios from 'axios'
import { ProductDetails } from "./ProductDetails";
import { OrderConatiner } from "./OrderContainer";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Orders.css";
export function Orders( {cart} ) {
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    const getOrderData = async ()=>{
      const response = await  axios.get('/api/orders?expand=products')
      setOrders(response.data)
    }
   getOrderData();
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

      
     <OrderConatiner order={order}/>
      {/* add to cart product details */}
      <ProductDetails order={order}/>
      </div>
  </div>
      })}
    </>
  ); 
}
