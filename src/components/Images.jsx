import React, { useState } from "react";
// import images from "../data";
import { useGlobalContext } from "../context";
import Lightbox from "./Lightbox";

const Images = () => {
  const { images, showThumbnail, thumbnailIndex } =
    useGlobalContext();
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <div className="row-2">
        <section className="desktop-images-container">
          <div className="desktop-images-list ">
            <div className="desktop-images">
              <img
                src={images[thumbnailIndex].img}
                alt="shoes"
                onClick={() => setLightbox(true)}
              />
            </div>
          </div>
        </section>
        <article className="thumbnail">
          {images.map((items, index) => {
            const { id, thumbnail } = items;
            return (
              <article key={id}>
                <img
                  src={thumbnail}
                  alt="product-thumbnail"
                  className={` ${thumbnailIndex === index ? "active" : ""}`}
                  onClick={() => {
                    {
                      showThumbnail(index);
                      setLightbox(false);
                    }
                  }}
                />
              </article>
            );
          })}
        </article>
      </div>
      {lightbox && <Lightbox lightbox={lightbox} setLightbox={setLightbox} />}
    </>
  );
};

export default Images;
