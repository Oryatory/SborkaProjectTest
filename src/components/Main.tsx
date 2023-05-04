import { FC } from "react";
import { useLocation } from "react-router-dom";
import ProductsList from "./ProductsList";
import SingleProductPage from "./SingleProductPage";
import Cart from "./Cart";

const Main: FC = () => {
  const location = useLocation();

  return (
    <div className="main__wrapper">
      <div className="products">
        {location.pathname === "/" ? <ProductsList /> : <SingleProductPage />}
      </div>
      <Cart />
    </div>
  );
};
export default Main;
