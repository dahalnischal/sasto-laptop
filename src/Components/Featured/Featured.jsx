import React from 'react'
import './Featured.jsx';

import Slider from 'react-slick'


const Featured = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 3,
   };
  return (
    <div>
      <div className="featured-div">
        <div className="card-top-div">
          <span>New Arrival</span>
          <span>See all</span>
        </div>
      </div>
    </div>
  )
}

export default Featured
