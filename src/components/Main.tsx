import { FC, memo } from "react";
import { useLocation } from "react-router-dom";
import ProductsList from "./ProductsList";
import SingleProductPage from "./SingleProductPage";
import Cart from "./Cart";
import { ProductProps } from "../utils/data";

export type MainProps = {
  toggleCart: () => void;
  addToCart: (product: ProductProps) => void;
};

const Main: FC<MainProps> = memo(({ toggleCart, addToCart }) => {
  const location = useLocation();

  return (
    <div className="main__wrapper">
      <div className="products">
        {location.pathname === "/" ? (
          <ProductsList toggleCart={toggleCart} addToCart={addToCart} />
        ) : (
          <SingleProductPage toggleCart={toggleCart} addToCart={addToCart} />
        )}
      </div>
      <Cart />
    </div>
  );
});
export default Main;
