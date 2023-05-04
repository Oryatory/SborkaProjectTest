import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/formatPrice";
import CartBtn from "./buttons/CartBtn";
import { ProductProps } from "../utils/data";
import { FC } from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import { products } from "../utils/data";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleProductPage: FC = () => {
  const { addToCart, toggleCart } = useCartContext();
  const { width } = useGlobalContext();
  const { productId } = useParams();
  const product = products.find((pr) => pr.id === productId);

  const { name, id, image, amount, price } = product as ProductProps;
  return (
    <motion.div
      className="products__wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="single-product__container">
        <Link to="/">
          <button className="single-product__back-button">
            Back To catalog
          </button>
        </Link>
        <div className="single-product__image-container">
          <img src={image} alt={name} />
        </div>
        <h2>New Balance 574 Vintage Brights</h2>
        <p>Item model number: {id}</p>
        <div className="single-product__footer">
          <button
            className="single-product__cart-btn"
            onClick={() => {
              addToCart({ name, price, id, image, amount });
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
    </motion.div>
    // </motion.div>
  );
};
export default SingleProductPage;
