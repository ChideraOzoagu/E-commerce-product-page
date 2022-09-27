import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Product from "./components/Product";
import Images from "./components/Images";
import { useGlobalContext } from "./context";


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
