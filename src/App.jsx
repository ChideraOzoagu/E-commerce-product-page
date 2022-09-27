import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Product from "./components/Product";
import Images from "./components/Images";
import { useGlobalContext } from "./context";
// images
// import product1 from "./assets/images/image-product-1.jpg";
// import product2 from "./assets/images/image-product-2.jpg";
// import product3 from "./assets/images/image-product-3.jpg";
// import product4 from "./assets/images/image-product-4.jpg";
// import product1thumbnail from "./assets/images/image-product-1-thumbnail.jpg";
// import product2thumbnail from "./assets/images/image-product-2-thumbnail.jpg";
// import product3thumbnail from "./assets/images/image-product-3-thumbnail.jpg";
// import product4thumbnail from "./assets/images/image-product-4-thumbnail.jpg";


import data from "./data";

function App() {
  const {cart} = useGlobalContext()
  return (
    <>
      <Header />
        <Slider />
      <div className="col-2">
        <Images/>
       <Product/>
      </div>
    </>
  );
}

export default App;
