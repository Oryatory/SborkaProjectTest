import { FC, useState, useEffect } from "react";
import { products } from "../utils/data";
import SingleProduct from "./SingleProduct";
import { ProductProps, productIsOpenType } from "../utils/data";
import SingleProductPage from "./SingleProductPage";
import { motion } from "framer-motion";

const Products: FC = () => {
  const [productIsOpen, setProductIsOpen] = useState<productIsOpenType>({
    product: null,
    isOpen: false,
  });
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );

  useEffect(() => {
    setSelectedProduct(productIsOpen.product);
  }, [productIsOpen]);

  return (
    <div className="products">
      <motion.div
        className="products__wrapper"
        animate={{
          opacity: productIsOpen.isOpen ? 0 : 1,
          display: !selectedProduct ? "flex" : "none",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {products.map((product: ProductProps) => {
          return (
            <SingleProduct
              key={product.id}
              {...product}
              setProductIsOpen={
                setProductIsOpen as ({
                  product,
                  isOpen,
                }: productIsOpenType) => void
              }
            />
          );
        })}
      </motion.div>
    </div>
  );
};
export default Products;
