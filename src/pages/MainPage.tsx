import { FC } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import SingleProductPage from "../components/SingleProductPage";

const MainPage: FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:productId" element={<Main />} />
        </Routes>
        {/* <Main /> */}
      </Router>
    </>
  );
};
export default MainPage;
