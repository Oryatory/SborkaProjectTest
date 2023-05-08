import { products } from "../utils/data";
import { ProductProps } from "../utils/data";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FC } from "react";
import { MainProps } from "./Main";

const ProductsList: FC<MainProps> = ({ toggleCart, addToCart }) => {
  return (
    <motion.div
      className="products__wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {products.map((product: ProductProps) => {
        return (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              const targetTag = (event.target as HTMLElement).tagName;

              if (
                targetTag === "BUTTON" ||
                targetTag === "svg" ||
                targetTag === "path"
              ) {
                event.preventDefault();
              } else {
                window.scrollTo(0, 0);
              }
            }}
          >
            <SingleProduct
              key={product.id}
              {...product}
              toggleCart={toggleCart}
              addToCart={addToCart}
            />
          </Link>
        );
      })}
    </motion.div>
  );
};
export default ProductsList;
