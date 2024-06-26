import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Gallery.css";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const image = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="instagram"></SubHeading>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {image.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={index+1}>
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__images-icon"></BsInstagram>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          ></BsArrowLeftShort>
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          ></BsArrowRightShort>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
