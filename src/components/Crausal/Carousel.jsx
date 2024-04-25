import React, { useState ,useEffect} from "react";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";

const Carousel = ({ data, interval}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  useEffect(() => {
    const intervalId = setInterval(nextSlide, interval);
    return () => clearInterval(intervalId);
  }, [slide, interval]);

  return (
    <div className="carousel">
      <IoIosArrowBack onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.img}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <IoIosArrowForward
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
export default Carousel;
