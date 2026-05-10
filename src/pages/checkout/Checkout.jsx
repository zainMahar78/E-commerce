import axios from "axios";
import { PaymentSummary } from "./PaymentSummary";
import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { OrderSummary } from "./OrderSummary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";
import { Link } from "react-router";
export function Checkout({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    const getCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);
      response = await axios.get("http://localhost:3000/api/payment-summary");
      setPaymentSummary(response.data);
    };

    getCheckoutData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid main-div">
        <h1>Review your order</h1>
        <PaymentSummary paymentSummary={paymentSummary} />
      </div>
      {cart ? (
        <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
}
