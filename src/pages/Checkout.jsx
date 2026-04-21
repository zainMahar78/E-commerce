import { Navbar } from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Checkout.css";
export function Checkout() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid main-div">
        <h1>Review your order</h1>
        <div className="payment-summary">
          <h5>Payment Summary</h5>

          <div className="d-flex justify-content-between">
            <span>Items(3):</span>
            <span>$42.75</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Shipping & handling:</span>

            <span>$4.99</span>
          </div>
          <hr className="divider" />
          <div className="d-flex justify-content-between">
            <span>Total before tax:</span>
            <span>$47.74</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Estimated tax (10%):</span>
            <span>$4.77</span>
          </div>
          <hr />
          <div className="total-order d-flex justify-content-between">
            <span>Order total:</span>
            <span>$52.51</span>
          </div>
          <div>
            <button className="place-order-btn" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
