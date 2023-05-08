import { FC } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const MainPage: FC = () => {
  const { total_items, toggleCart, addToCart } = useCartContext();

  return (
    <>
      <Router>
        <Header total_items={total_items} toggleCart={toggleCart} />
        <Routes>
          <Route
            path="/"
            element={<Main toggleCart={toggleCart} addToCart={addToCart} />}
          />
          <Route
            path="/product/:productId"
            element={<Main toggleCart={toggleCart} addToCart={addToCart} />}
          />
        </Routes>
      </Router>
    </>
  );
};
export default MainPage;
