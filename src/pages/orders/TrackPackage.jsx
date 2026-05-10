import { Navbar } from "../../components/Navbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { Link } from "react-router";
export function TrackPackage ({cart}){
   const { orderId, productId} = useParams();
    console.log(orderId, productId);
   const [order, setOrder] =useState(null)
    useEffect(()=>{
        const getTrackingData = async ()=>{
            const response = await axios.get(`/api/orders/${orderId}?expand=products`)
            setOrder(response.data);
        }
        getTrackingData();
    }, [orderId])
    if(!order){
        return null;
    }
    const orderProduct = order.products.find((orderProduct)=>{
        return orderProduct.productId === productId;
    })
    return( 
        <>
        <Navbar cart={cart}/>
        <Link to="/Orders">View all orders</Link>
        <div>
            <h2>
               Arriving on {dayjs(orderProduct.estimatedDeliverTimeMs).format('dddd, MMMM D')}
            </h2>
            <div> {orderProduct.product.name}</div>
            <div>Quantity: {orderProduct.quantity}</div>
            <img src={orderProduct.product.image} alt="" />
        </div>
        </>
    );
}