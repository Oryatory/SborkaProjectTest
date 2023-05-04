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
          <Link to={`/product/${product.id}`}>
            <SingleProduct key={product.id} {...product} />
          </Link>
        );
      })}
    </motion.div>
    // </div>
  );
};
export default ProductsList;
