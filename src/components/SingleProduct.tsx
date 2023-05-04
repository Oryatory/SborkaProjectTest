import { FC } from "react";
import { formatPrice } from "../utils/formatPrice";
import { useCartContext } from "../context/cart_context";
import { useGlobalContext } from "../context/useGlobalContext.tsx";
import CartBtn from "./buttons/CartBtn";
import { ProductProps } from "../utils/data.tsx";

const SingleProduct: FC<ProductProps> = ({ name, price, image, id }) => {
  const { addToCart, toggleCart } = useCartContext();
  const { width, lockScroll } = useGlobalContext();

  return (
    <div className="product__card">
      <div className="product__image">
        <img src={image} alt={name} />
      </div>
      <h5>{name}</h5>
      <div className="product__footer">
        <button
          className="product__card-btn"
          onClick={() => {
            addToCart({ name, price, id, image });
            if (width < 768) {
              lockScroll();
              toggleCart();
            }
          }}
        >
          <CartBtn fill={"white"} />
        </button>
        <span className="product__price">{formatPrice(price)}</span>
      </div>
    </div>
  );
};
export default SingleProduct;
