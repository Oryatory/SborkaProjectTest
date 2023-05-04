import { useCartContext } from "../context/cart_context";
import CartItem from "./CartItem";

import { FC, useEffect } from "react";
import { motion } from "framer-motion";
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

  const getMotionProps = () => {
    if (width <= 410) {
      return {
        drag: "y",
        dragConstraints: { bottom: 0 },
        dragElastic: 0,
        dragMomentum: false,
      };
    } else if (width > 410 && width <= 768) {
      return {
        drag: "x",
        dragConstraints: { top: 0, bottom: 0, right: 0 },
        dragElastic: 0,
        dragMomentum: false,
      };
    } else
      return {
        drag: false,
        dragConstraints: { right: 0, left: 0, top: 0, bottom: 0 },
        dragElastic: 0,
        dragMomentum: false,
      };
  };

  let motionProps = getMotionProps();

  const { drag, dragConstraints, dragElastic } = motionProps;

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
          drag={drag as boolean | "y" | "x" | undefined}
          dragConstraints={dragConstraints}
          dragElastic={dragElastic}
          onDragEnd={() => {
            lockScroll();
            toggleCart();
          }}
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
                {cart.map((item) => {
                  return <CartItem key={item.id} {...item} />;
                })}
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
              <div className="cart__items">
                {cart.map((item) => {
                  return <CartItem key={item.id} {...item} />;
                })}
              </div>
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>
          <Totals />
        </div>
      )}
    </>
  );
};
export default Cart;
