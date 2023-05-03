import { FC } from "react";
import { formatPrice } from "../utils/formatPrice";
import { useCartContext } from "../context/cart_context";
import CartBtn from "./CartBtn";
import { ProductProps } from "../utils/data.tsx";
import useWindowWidth from "../utils/useWindowWidth.tsx";

const SingleProduct: FC<ProductProps> = ({
  name,
  price,
  image,
  amount,
  id,
  setProductIsOpen,
}) => {
  const { addToCart, toggleCart } = useCartContext();
  const { width } = useWindowWidth();

  return (
    <div
      className="product__card"
      onClick={(event) => {
        const btn = (event.target as Element).closest(".product__card-btn");
        if (!btn) {
          setProductIsOpen &&
            setProductIsOpen({
              product: { name, price, image, amount, id, setProductIsOpen },
              isOpen: true,
            });
        }
      }}
    >
      <div className="product__image">
        <img src={image} alt={name} />
      </div>
      <h4>{name}</h4>
      <div className="product__footer">
        <button
          className="product__card-btn"
          onClick={() => {
            addToCart({ name, price, id, image, amount, setProductIsOpen });
            if (width < 768) {
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
