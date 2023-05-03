import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/formatPrice";
import CartBtn from "./CartBtn";
import { ProductProps } from "../utils/data";
import { FC } from "react";
import useWindowWidth from "../utils/useWindowWidth";

const SingleProductPage: FC<ProductProps> = ({
  name,
  id,
  image,
  amount,
  price,
  setProductIsOpen,
}) => {
  const { addToCart, toggleCart } = useCartContext();
  const { width } = useWindowWidth();

  return (
    <div className="single-product__container">
      <button
        className="single-product__back-button"
        onClick={() =>
          setProductIsOpen && setProductIsOpen({ product: null, isOpen: false })
        }
      >
        Back To catalog
      </button>
      <div className="single-product__image-container">
        <img src={image} alt={name} />
      </div>
      <h2>New Balance 574 Vintage Brights</h2>
      <p>Item model number: {id}</p>
      <div className="single-product__footer">
        <button
          className="single-product__cart-btn"
          onClick={() => {
            addToCart({ name, price, id, image, amount, setProductIsOpen });
            if (width < 768) {
              toggleCart();
            }
          }}
        >
          <CartBtn fill={"white"} />
        </button>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
};
export default SingleProductPage;
