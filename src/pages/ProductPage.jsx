//ProductPage.jsx
import React from "react";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";
import AllProducts from "../Component/AllproductPage/AllProducts";

const ProductPage = () => {
  return (
    <>
      <NavBar />
      <AllProducts />
      <Footer />
    </>
  );
};

export default ProductPage;
