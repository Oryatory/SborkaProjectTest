import { formatPrice } from "../utils/formatPrice";
import IncreaseBtn from "./buttons/IncreaseBtn";
import DecreaseBtn from "./buttons/DecreaseBtn";
import DeleteBtn from "./buttons/DeleteBtn";
import { useCartContext } from "../context/cart_context";
import { ProductProps } from "../utils/data";
import { FC } from "react";
import { motion } from "framer-motion";

const CartItem: FC<ProductProps> = ({ name, image, price, amount, id }) => {
  const { removeItem, toggleAmount } = useCartContext();

  return (
    <motion.div
      className="cart__cart-item"
      animate={{ opacity: (amount as number) > 0 ? 1 : 0 }}
    >
      <div className="cart-item__image">
        <img src={image} alt={name} />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__header">
          <p className="cart-item__name">{name}</p>
          <div className="cart-item__delete-btn-container">
            <button
              className="cart-item__delete-btn"
              onClick={() => removeItem(id)}
            >
              <DeleteBtn />
            </button>
          </div>
        </div>

        <div className="cart-item__footer">
          <div className="cart-item__btn-container">
            <button
              className="cart-item__decrease-btn"
              onClick={() => toggleAmount(id, "dec")}
            >
              <DecreaseBtn />
            </button>
            <span>{amount}</span>
            <button
              className="cart-item__increase-btn"
              onClick={() => toggleAmount(id, "inc")}
            >
              <IncreaseBtn />
            </button>
          </div>
          <span className="product__price">
            {formatPrice(price * (amount as number))}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
export default CartItem;
