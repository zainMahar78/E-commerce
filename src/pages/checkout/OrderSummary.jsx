import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
import { Link } from "react-router";
import { DeliveryOptions } from "./DeliveryOptions";
export function OrderSummary( {deliveryOptions, cart}){
    return(
        <div>
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
        <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem}/>
          
        
      </div>})} </div> 
    );
}