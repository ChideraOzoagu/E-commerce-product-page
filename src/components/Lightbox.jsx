import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { useOnClickOutside } from "../custom hook/useOnClickOutside";

const Lightbox = ({ lightbox, setLightbox }) => {
  const { images, thumbnailIndex } = useGlobalContext();
  const [lightboxIndex, setLightboxIndex] = useState(thumbnailIndex);
  const ref = useRef()

  useOnClickOutside(ref, ()=> setLightbox(false))

  // active lightbox thumbnail
  const activeLightbox = (index) => {
    setLightboxIndex(index);
  };
 
  return (
    <section className="lightbox-overlay">
      <button className="close-lightbox" onClick={() => setLightbox(false)}>
        <FaTimes />
      </button>
        <div className="row-2" ref={ref}>
          <section className="desktop-images-container">
            <div className="desktop-images-list ">
              <div className='desktop-images'>
                <img src={images[lightboxIndex].img} alt="shoes" />
              </div>
            </div>
            <button className="prev prev-lightbox" onClick={()=> setLightboxIndex((prevState)=> prevState === 0? images.length - 1 : prevState - 1)} >
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button className="next next-lightbox" onClick={()=> setLightboxIndex((nextState)=> nextState === images.length - 1? 0 : nextState+ 1)} >
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
          </section>
          <article className="thumbnail">
            {images.map((items, index) => {
              const { id, thumbnail } = items;
              return (
                <article key={id}>
                  <img
                    src={thumbnail}
                    alt="product-thumbnail"
                    className={` ${lightboxIndex === index ? "active" : ""}`}
                    onClick={() => {
                      activeLightbox(index);
                    }}
                  />
                </article>
              );
            })}
          </article>
        </div>
    </section>
  );
};

export default Lightbox;
