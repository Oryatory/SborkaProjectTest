import { FC } from "react";
import CartBtn from "./buttons/CartBtn";
import { useCartContext } from "../context/cart_context";
import BurgerBtn from "./buttons/BurgerBtn";
import { useGlobalContext } from "../context/useGlobalContext";
import { motion } from "framer-motion";

const Header: FC = () => {
  const { total_items, toggleCart } = useCartContext();
  const { width, lockScroll } = useGlobalContext();

  return (
    <motion.div
      drag="x"
      dragSnapToOrigin={true}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0}
      onDragEnd={() => {
        lockScroll();
        toggleCart();
      }}
      className="header"
    >
      <div className="header__wrapper">
        <div className="header__logo">
          <svg
            width="44"
            height="29"
            viewBox="0 0 44 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.1072 0.790192H23.4924V28.1744H30.1023V19.5611H34.1072C40.3175 19.5611 43.9228 15.6128 43.9228 10.1757C43.9228 4.73852 40.3175 0.790192 34.1072 0.790192ZM33.4212 13.7522H30.1023V6.59909H33.4212C35.825 6.59909 37.198 7.9155 37.198 10.1757C37.198 12.4367 35.825 13.7522 33.4212 13.7522Z"
              fill="black"
            />
            <path
              d="M12.2177 11.6923C10.1865 11.1194 8.89882 10.6911 8.26845 10.2906C7.75482 9.9476 7.43964 9.46001 7.43964 8.88801C7.43964 7.60033 8.4696 6.62784 10.7872 6.62784C12.9899 6.62784 14.1636 7.5716 14.1636 8.97331H20.8013C20.8013 3.85135 16.5099 0.446289 11.1015 0.446289C7.8976 0.446289 5.43629 1.13413 3.49041 2.79266C1.77351 4.25274 0.743556 6.34139 0.743556 8.94547C0.743556 11.2065 1.43049 12.8372 2.48919 13.9812C3.49041 15.0678 5.5216 16.3563 8.69768 17.2148C10.9884 17.8443 12.6191 18.3309 13.3626 18.8167C14.1348 19.3034 14.336 19.7327 14.336 20.3047C14.336 21.5349 13.1058 22.3646 10.6436 22.3646C8.35376 22.3646 7.12445 21.5061 7.03915 20.0182H0.314331C0.314331 25.1976 4.54911 28.5156 10.6436 28.5156C16.5674 28.5156 21.0303 24.8528 21.0303 20.1888C21.0303 18.4719 20.716 16.9849 19.4849 15.4683C18.3983 14.0962 16.2244 12.866 12.2177 11.6923Z"
              fill="black"
            />
          </svg>
          <span>.shop</span>
        </div>
        <div className="header__cart-button">
          <button
            onClick={
              width <= 410
                ? () => {
                    lockScroll();
                    toggleCart();
                  }
                : () => {}
            }
          >
            <CartBtn fill="black" />
            <div className="header__total-amount">{total_items}</div>
          </button>
          {width <= 768 && width > 410 ? (
            <button
              className="header__burger-btn"
              onClick={() => {
                lockScroll();
                toggleCart();
              }}
            >
              <BurgerBtn />
            </button>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};
export default Header;
