import dayjs from "dayjs";
import { Link } from "react-router";
export function ProductDetails( {order} ){
    return(
       <div> 
        {order.products.map((orderProduct)=>{
        return(   
          <div key={orderProduct.productId} className="product-details">
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
        <Link to={`/TrackPackage/${order.id}/${orderProduct.productId}`}>  <button className="track-package-btn">Track Package</button></Link>
          </div>
        </div>
      </div>)})}
      </div>
    );
}