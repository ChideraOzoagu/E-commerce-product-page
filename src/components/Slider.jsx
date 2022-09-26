import React, {useState, useEffect} from 'react'

import { useGlobalContext } from "../context";


const Slider = () => {
    const {images, index, setIndex} = useGlobalContext()
   
  return (
    <>
    <section className="products-container">
        <div className="products ">
          {images.map((image, imageIndex) => {
            const { id, img } = image;
            let position = "nextSlide";
            if (imageIndex === index) {
              position = "activeSlide";
            }
            if (
              imageIndex === index - 1 ||
              (index === 0 && imageIndex === images.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <div className={`images ${position}`} key={id}>
                <img src={img} alt="shoes" />
              </div>
            );
          })}
        </div>

        <button className="prev" onClick={() => setIndex(index - 1)}>
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
        <button className="next" onClick={() => setIndex(index + 1)}>
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
     
      </>
  )
}

export default Slider
