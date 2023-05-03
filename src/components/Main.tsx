import { FC } from "react";
import Products from "./Products";
import Cart from "./Cart";

const Main: FC = () => {
  return (
    <div className="main__wrapper">
      <Products />
      <Cart />
    </div>
  );
};
export default Main;
