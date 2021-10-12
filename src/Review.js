import React, { useState } from 'react';
import people from './data';
// Import react-icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  // I want to display the first item by default, hence useState(0) as the FIRST index.
  const [index, setIndex] = useState(0);
  console.log(people)

  // As the index state value changes, so does the specific index of the people array.
  const {name, job, image, text} = people[index]

  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img"/>
      <span className="quote-icon">
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button className="prev-btn">
        <FaChevronLeft/>
      </button>
      <button className="next-btn">
        <FaChevronRight/>
      </button>
    </div>
    <button className="random-btn">
        Surprise Me
      </button>
  </article>;
};

export default Review;