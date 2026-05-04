import axios from 'axios';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { Navbar } from "../components/Navbar";
import { formatMoney } from "../utils/money";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";
import { Link } from "react-router";
export function Checkout( {cart}) {
 const [deliveryOptions, setDeliveryOptions] = useState([])
const [paymentSummary, setPaymentSummary] = useState(null);
 useEffect(()=> {
  axios.get('/api/delivery-options?expand=estimatedDeliveryTime').then((response)=>{
    setDeliveryOptions(response.data)
  })
  axios.get('http://localhost:3000/api/payment-summary').then((response)=>{
setPaymentSummary(response.data)
  }).catch((error) => {
    console.error('Status:', error.response?.status);
    console.error('Message:', error.message);
    console.error('URL:', error.config?.url);
  });
 }, [])
  return (
    <>
      <Navbar />
      <div className="container-fluid main-div">
        <h1>Review your order</h1>
        <div className="payment-summary">
          <h5>Payment Summary</h5>

          <div className="d-flex justify-content-between">
            <span>Items({!paymentSummary ? 'Loading...' : paymentSummary.totalItems}):</span>
            <span>{!paymentSummary ? 'Loading...' : formatMoney(paymentSummary.productCostCents)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Shipping & handling:</span>

            <span>{!paymentSummary ? 'Loading...' : formatMoney(paymentSummary.shippingCostCents)}</span>
          </div>
          <hr className="divider" />
          <div className="d-flex justify-content-between">
            <span>Total before tax:</span>
            <span>{!paymentSummary ? 'Loading...' : formatMoney(paymentSummary.totalCostBeforeTaxCents)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Estimated tax (10%):</span>
            <span>{!paymentSummary ? 'Loading...' : formatMoney(paymentSummary.taxCents)}</span>
          </div>
          <hr />
          <div className="total-order d-flex justify-content-between">
            <span>Order total:</span>
            <span>{!paymentSummary ? 'Loading...' : formatMoney(paymentSummary.totalCostCents)}</span>
          </div>
          <div>
            <button className="place-order-btn" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
   {deliveryOptions.length > 0 && cart.map((cartItem)=>{ 
    const selectedDeliveryOption = deliveryOptions.find(
      (deliverOption)=>{
        return deliverOption.id === cartItem.deliveryOptionId;
    })
    return <div className="product-div" key={cartItem.productId}>
        <h5 className="delivery-date">Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}</h5>
        <div className="image-details">
          <img className="product-image" src={cartItem.product.image} alt="" />
          <div>
            <p>{cartItem.product.name}</p>
            <p>{formatMoney(cartItem.product.priceCents)}</p>
            <p>Quantity: {cartItem.quantity}  <Link className="update-delete-links" to="">Update</Link>{" "}
            <Link className="update-delete-links" to="">Delete</Link> </p>
          </div>
        </div>
        <div className="delivery-options">
          <h6>Choose a delivery option:</h6>
        {deliveryOptions.map((deliverOption)=>{
          let priceString = 'FREE Shipping';
          if (deliverOption.priceCents > 0){
            priceString = `${formatMoney(deliverOption.priceCents)}- Shipping`
          }
          return (<div key={deliverOption.id} className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              checked = {deliverOption.id === cartItem.deliveryOptionId}
              type="radio"
              name={`radioDefault${cartItem.productId}`}
              id="radioDefault1"
            />
            <label className="form-check-label" htmlFor="radioDefault1">
             <p className="mb-0"> 
              {dayjs(deliverOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
              </p> <p className="mb-0">{priceString}</p>
            </label>
          </div>)
        })}
        </div>
          
        
      </div>})}  
    </>
  );
}
