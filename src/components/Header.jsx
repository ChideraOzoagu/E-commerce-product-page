import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import { FaBars, FaTimes, FaTrashAlt } from "react-icons/fa";
import { useOnClickOutside } from "../custom hook/useOnClickOutside";

// images
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";

const Header = ({value}) => {
  const { isSidebarOpen, openSidebar, closeSidebar, isCartOpen, setIsCartOpen,amount, isCartFull, cart, removeItem, total } = useGlobalContext();

  const ref = useRef()

  useOnClickOutside(ref, closeSidebar)

  // const deleteItem=()=>{
  //   removeItem()
  // }

  return (
    <>
      <header className="header">
        <div>
          <button className="menu-btn" onClick={openSidebar}>
            <FaBars />
          </button>
          <img src={logo} alt="logo" />
        </div>
        <div
          className={isSidebarOpen ? "nav-container show-nav" : "nav-container"}
        >
          <nav className="nav" ref={ref}>
            <button className="close-btn" onClick={closeSidebar}>
              <FaTimes />
            </button>
            <div className="nav-items">
              <a href="#">collections</a>
              <a href="#">men</a>
              <a href="#">women</a>
              <a href="#">about</a>
              <a href="#">contact</a>
            </div>
          </nav>
        </div>
        <div className= {`${isCartFull?'cart-full cart-normal': 'cart-normal'}`} >
          <button className="cart" onClick={()=> setIsCartOpen(!isCartOpen)} >
            <p className="total-value">
              {amount}
             
            </p>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <img src={avatar} alt="avatar" className="avatar-img" />
        </div>
      </header>
     
      <article className="cart-container" >
        <div className={`${isCartOpen? 'show-cart cart-items': 'cart-items'}`}>
         
          <h3 className="cart-label">Cart</h3>
          <div className="line"></div>
            {
              cart.length === 0 ? 
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div> :
             cart.map((cartItem)=>{
              const {id, title, price, img} = cartItem
              return <div className="cart-grid" key={id}>
                <img src={img} alt={title} />
                <div>
                  <h3 className="cart-shoe-name">{title}</h3>
                  <div className="cart-pricing">
                    <span className="cart-price">${price}</span>
                    <span className="cart-value"> x {amount}</span>
                    <span className="cart-total">${total}</span>
                  </div>
                </div>
                <button className="delete-btn" onClick={()=>removeItem(id)}>
                  <FaTrashAlt/>
                </button>
                <button className="checkout" onClick={()=>{
                  setIsCartOpen(false)
                  removeItem(id)
                }
                
                }>checkout</button>
              </div>
             })
            }
           
        </div>
      </article>
    </>
  );
};

export default Header;
