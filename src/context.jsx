import React, { useState, useContext, useEffect, useReducer } from "react";
import data, { cart } from "../src/data";
const AppContext = React.createContext();

const initialState = {
  cart: [],
  amount: 0,
  total: 0,
  price: 125.0,
};

const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    return { ...state, amount: state.amount + 1 };
  }
  if (action.type === "DECREASE") {
    if (state.amount < 1) {
      return { ...state, amount: 0 };
    }
    return { ...state, amount: state.amount - 1 };
  }
  if (action.type === "REMOVE_ITEM") {
    return { ...state, cart: [] };
  }
  if (action.type === "ADD_TO_CART") {
   
    return { ...state, cart: cart, total: state.amount * state.price };
  }
  return state;
};

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [images, setImages] = useState(data);
  const [index, setIndex] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartFull, setIsCartFull] = useState(false);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  // clear cart whenever amount = 0
  useEffect(()=>{
    if(state.amount === 0){
      removeItem()
    }
  },[state.amount])

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const increase = () => {
    dispatch({ type: "INCREASE" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };
  const removeItem = () => {
    dispatch({ type: "REMOVE_ITEM" });
  };
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
  };

  const showThumbnail = (index) => {
    setThumbnailIndex(index);
  };

  useEffect(() => {
    if (state.cart.length === 0) {
      state.amount = 0;
      setIsCartFull(false);
    }
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        images,
        index,
        setIndex,
        ...state,
        // ...state[0],
        increase,
        decrease,
        isCartOpen,
        setIsCartOpen,
        isCartFull,
        setIsCartFull,
        removeItem,
        addToCart,
        showThumbnail,
        thumbnailIndex,
        setThumbnailIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
