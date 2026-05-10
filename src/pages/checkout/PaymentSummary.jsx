import { formatMoney } from "../../utils/money";
export function PaymentSummary({ paymentSummary }){
    return(
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
    );
}