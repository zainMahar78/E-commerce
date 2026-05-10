import { formatMoney } from "../../utils/money";
import dayjs from "dayjs";
export function DeliveryOptions( {deliveryOptions, cartItem

} ){
    return(
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
    );
}