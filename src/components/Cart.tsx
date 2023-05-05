import { useCartContext } from "../context/cart_context";
import CartItem from "./CartItem";
import { FC, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CloseCartBtn from "./buttons/CloseCartBtn";
import { useGlobalContext } from "../context/useGlobalContext";
import Totals from "./Totals";

const Cart: FC = () => {
  const { cart, cartIsOpen, total_items, toggleCart } = useCartContext();
  const { width, lockScroll } = useGlobalContext();

  useEffect(() => {
    if (width > 768) document.body.classList.remove("scroll-lock");
    else if (width <= 768 && cartIsOpen)
      document.body.classList.add("scroll-lock");
  }, [width]);

  if (width <= 768) {
    return (
      <>
        <motion.div
          className="cart__overlay"
          animate={{
            opacity: cartIsOpen ? "33%" : 0,
            zIndex: cartIsOpen ? "0" : "-1",
          }}
          onClick={() => {
            lockScroll(), toggleCart();
          }}
        ></motion.div>
        <motion.div
          onPan={(_event, info) => {
            if (info.delta.y < -5 && width <= 410) {
              lockScroll();
              toggleCart();
            } else if (info.delta.x > 5 && width <= 768) {
              lockScroll();
              toggleCart();
            }
          }}
          className="cart"
          animate={
            width > 410
              ? {
                  x: cartIsOpen ? 0 : 410,
                  opacity: cartIsOpen ? 1 : 0,
                }
              : {
                  y: cartIsOpen && width <= 410 ? 0 : "-100%",
                  opacity: cartIsOpen ? 1 : 0,
                }
          }
          initial={
            cartIsOpen && width <= 410
              ? { y: "-100%", opacity: 1 }
              : { y: 0, opacity: 0 }
          }
          transition={{ ease: "easeInOut" }}
        >
          {width <= 410 && (
            <div className="cart__close-btn">
              <button
                onClick={() => {
                  lockScroll();
                  toggleCart();
                }}
              >
                <CloseCartBtn />
              </button>
            </div>
          )}
          <div className="cart__items-container">
            <h4>My basket</h4>
            {total_items > 0 ? (
              <div className="cart__items">
                <AnimatePresence>
                  {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                  })}
                </AnimatePresence>
              </div>
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>
          <Totals />
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
              <motion.div
                className="cart__items"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                <AnimatePresence>
                  {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.p
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                Your basket is empty!
              </motion.p>
            )}
          </div>
          <Totals />
        </div>
      )}
    </>
  );
};
export default Cart;
