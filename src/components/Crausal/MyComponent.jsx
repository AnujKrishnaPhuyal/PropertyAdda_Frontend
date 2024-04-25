import React from "react";
import Carousel from "./Carousel";
const MyComponent = (props) => {
  const product = props.details;
  console.log("image is",product)

  const images = [
    { img: product.img1 },
    { img: product.img2 },
    { img: product.img3 },
  ];

  return (
    <div>
      <Carousel data={images} interval={3000} />
    </div>
  );
};

export default MyComponent;
