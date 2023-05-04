import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/formatPrice";
import { FC } from "react";

const Totals: FC = () => {
  const { total_amount, tax_fee, shipping_fee } = useCartContext();
  return (
    <div className="cart__totals-container">
      <div className="cart__total-row">
        <p>Subtotal</p>
        <p>{formatPrice(total_amount)}</p>
      </div>
      <div className="cart__total-row">
        <p>Tax</p>
        <p>{formatPrice(tax_fee)}</p>
      </div>
      <div className="cart__total-row">
        <p>Shipping</p>
        <p>{formatPrice(shipping_fee)}</p>
      </div>
      <div className="cart__total-row">
        <p>Total</p>
        <p>{formatPrice(total_amount + shipping_fee)}</p>
      </div>
    </div>
  );
};
export default Totals;
