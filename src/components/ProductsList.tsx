import { products } from "../utils/data";
import { ProductProps } from "../utils/data";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductsList = () => {
  return (
    //
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
            <SingleProduct key={product.id} {...product} />
          </Link>
        );
      })}
    </motion.div>
    // </div>
  );
};
export default ProductsList;
