import { FC, useCallback, useMemo } from "react";
import { formatPrice } from "../utils/formatPrice";
// import { useCartContext } from "../context/cart_context";
import { useGlobalContext } from "../context/useGlobalContext.tsx";
import CartBtn from "./buttons/CartBtn";
import { ProductProps } from "../utils/data.tsx";
import { memo } from "react";

interface SingleProductProps extends ProductProps {
  toggleCart: () => void;
  addToCart: (product: ProductProps) => void;
}

const SingleProduct: FC<SingleProductProps> = memo(
  ({ name, price, image, id, toggleCart, addToCart }) => {
    const { width, lockScroll } = useGlobalContext();

    const memoizedAddToCart = useCallback(() => {
      addToCart({ name, price, id, image });
      if (width < 768) {
        lockScroll();
        toggleCart();
      }
    }, [name, price, id, image, width, toggleCart, lockScroll]);

    const formattedPrice = useMemo(() => {
      return formatPrice(price);
    }, [price]);

    return (
      <div className="product__card">
        <div className="product__image">
          <img src={image} alt={name} />
        </div>
        <h5>{name}</h5>
        <div className="product__footer">
          <button className="product__card-btn" onClick={memoizedAddToCart}>
            <CartBtn fill={"white"} />
          </button>
          <span className="product__price">{formattedPrice}</span>
        </div>
      </div>
    );
  }
);

export default SingleProduct;
