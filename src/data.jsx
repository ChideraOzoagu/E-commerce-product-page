import product1 from "./assets/images/image-product-1.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product4 from "./assets/images/image-product-4.jpg";
import product1thumbnail from "./assets/images/image-product-1-thumbnail.jpg";
import product2thumbnail from "./assets/images/image-product-2-thumbnail.jpg";
import product3thumbnail from "./assets/images/image-product-3-thumbnail.jpg";
import product4thumbnail from "./assets/images/image-product-4-thumbnail.jpg";



const images = [
  { id: 1, img: product1, thumbnail: product1thumbnail },
  { id: 2, img: product2,  thumbnail: product2thumbnail },
  { id: 3, img: product3, thumbnail: product3thumbnail },
  { id: 4, img: product4,  thumbnail: product4thumbnail },
];
export default images;

export const cart = [
  {
    id: 1,
    title: "Autumn Limited Edition Sneakers",
    price: "125.00",
    value: 0,
    img: product1thumbnail,
  },
]