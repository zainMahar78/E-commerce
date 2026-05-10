import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
export function OrderConatiner({order}){
    return(
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
    )
}