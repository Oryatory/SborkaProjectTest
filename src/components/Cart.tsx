import { useCartContext } from "../context/cart_context";
import CartItem from "./CartItem";
import { formatPrice } from "../utils/formatPrice";
import { FC } from "react";
import useWindowWidth from "../utils/useWindowWidth";
import { motion } from "framer-motion";
import CloseCartBtn from "./CloseCartBtn";

const Cart: FC = () => {
  const {
    cart,
    cartIsOpen,
    total_items,
    total_amount,
    tax_fee,
    shipping_fee,
    toggleCart,
  } = useCartContext();
  const { width } = useWindowWidth();

  if (width <= 768) {
    return (
      <>
        <motion.div
          className="cart__overlay"
          animate={{
            opacity: cartIsOpen ? "33%" : 0,
            zIndex: cartIsOpen ? "0" : "-1",
          }}
          onClick={() => toggleCart()}
        ></motion.div>
        <motion.div
          className="cart"
          animate={
            width > 410
              ? {
                  x: cartIsOpen ? 0 : 410,
                }
              : {
                  y: cartIsOpen && width <= 410 ? 0 : "-100%",
                }
          }
          initial={cartIsOpen && width <= 410 ? { y: "-100%" } : { y: 0 }}
          transition={{ ease: "easeInOut" }}
        >
          {width <= 410 && (
            <div className="cart__close-btn">
              <button onClick={() => toggleCart()}>
                <CloseCartBtn />
              </button>
            </div>
          )}
          <div className="cart__items-container">
            <h4>My basket</h4>
            {total_items > 0 ? (
              <div className="cart__items">
                {cart.map((item) => {
                  return <CartItem key={item.id} {...item} />;
                })}
              </div>
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>
          <div className="cart__totals-container">
            <div className="cart__total-container">
              <p>Subtotal</p>
              <p>{formatPrice(total_amount)}</p>
            </div>
            <div className="cart__total-container">
              <p>Tax</p>
              <p>{formatPrice(tax_fee)}</p>
            </div>
            <div className="cart__total-container">
              <p>Shipping</p>
              <p>{formatPrice(shipping_fee)}</p>
            </div>
            <div className="cart__total-container">
              <p>Total</p>
              <p>{formatPrice(total_amount + shipping_fee)}</p>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
  return (
    <>
      {width > 768 && (
        <div className="cart">
          <div className="cart__items-container">
            <h4>My basket</h4>
            {total_items > 0 ? (
              <div className="cart__items">
                {cart.map((item) => {
                  return <CartItem key={item.id} {...item} />;
                })}
              </div>
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>
          <div className="cart__totals-container">
            <div className="cart__total-container">
              <p>Subtotal</p>
              <p>{formatPrice(total_amount)}</p>
            </div>
            <div className="cart__total-container">
              <p>Tax</p>
              <p>{formatPrice(tax_fee)}</p>
            </div>
            <div className="cart__total-container">
              <p>Shipping</p>
              <p>{formatPrice(shipping_fee)}</p>
            </div>
            <div className="cart__total-container">
              <p>Total</p>
              <p>{formatPrice(total_amount + shipping_fee)}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
