import React, { useState } from "react";
import "./NewArrival.scss";

//import images
import img3 from "../../assets/img3.webp";
import img2 from "../../assets/img2.webp";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

const cardDetails = [
  {
    id: 1,
    imgSrc: img3,
    title: "Dell",
    price: "$999.99",
  },
  {
    id: 2,
    imgSrc: img3,
    title: "Dell",
    price: "$999.99",
  },
  {
    id: 3,
    imgSrc: img3,
    title: "Dell",
    price: "$999.99",
  },
  {
    id: 4,
    imgSrc: img3,
    title: "Dell",
    price: "$999.99",
  },
  {
    id: 5,
    imgSrc: img2,
    title: "Acer",
    price: "$1306.99",
  },
  {
    id: 6,
    imgSrc: img2,
    title: "Dell",
    price: "$999.99",
  },
  {
    id: 7,
    imgSrc: img3,
    title: "Dell",
    price: "$999.99",
  },
  {
    id: 8,
    imgSrc: img3,
    title: "Dell",
    price: "$999.99",
  },
];

const NewArrival = () => {
  const cardsPerPage = 5; // Number of cards to display per page
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the range of cards to display on the current page
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = cardDetails.slice(startIndex, endIndex);

  // Function to handle next and previous clicks
  const handleNext = () => {
    if (currentPage < Math.ceil(cardDetails.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="featured-div">
        <div className="card-top-div">
          <span>New Arrival</span>
          <span>See all</span>
        </div>
        <div className="cards-div">
          <span onClick={handlePrev}>
            <GrFormPreviousLink className="icon" />
          </span>
          {visibleCards.map((item) => (
            <div className="card-div" key={item.id}>
              <div className="image-div">
                <img src={item.imgSrc} alt="" />
              </div>
              <div className="text-div">
                <h3>{item.title}</h3>
                <h4>{item.price}</h4>
              </div>
            </div>
          ))}
          <span onClick={handleNext}>
            <GrFormNextLink className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
