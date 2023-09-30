import React from "react";
import "./Top.scss";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


import {AiOutlineSearch} from 'react-icons/ai';



//importing images
import img1 from "../../assets/img1.avif";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";

const ImageCollection = [
  {
    id: 1,
    imgSrc: img1,
  },
  {
    id: 2,
    imgSrc: img2,
  },
  {
    id: 3,
    imgSrc: img3,
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  arrows:false,
  
};

const Top = () => {
  
  return (
    <div className="image-div">
      <div className="text-div">
        <h2>Want SASTOO Laptop </h2>
        <h3>contact us</h3>
        <div className="search-div">
          <input
            type="text"
            placeholder="search your laptop here"
            className="input-text"
          ></input>
          <span>
            <AiOutlineSearch className="icon" />
          </span>
        </div>
      </div>

      <Slider {...settings}>
        {ImageCollection.map((item) => {
          return (
            <div className="img" key={item.id}>
              <img src={item.imgSrc} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Top;
