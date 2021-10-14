import React, { useState } from 'react';
import people from './data';
// Import react-icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

console.clear();

const Review = () => {
  // I want to display the first array item by default, hence useState(0) as the FIRST index.
  const [index, setIndex] = useState(0);

  const {name, job, image, text} = people[index]

  // Checks if the index value goes outside of the array's range.
  const checkNumber = (number) => {
    // if the index is greater than the total number of people, return 0
    if (number > people.length -1) {
      return 0;
    }
    // if the index is less than 0, return the last item of the array
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    // +1 to the index state value
    setIndex((index)=>{
      let newIndex = index + 1;
      // Checks if the index value goes outside of the array's range.
      return checkNumber(newIndex);
    })
  }

  const prevPerson = () => {
    // -1 to the index state value
    setIndex((index)=>{
      let newIndex = index - 1;
      // Checks if the index value goes outside of the array's range.
      return checkNumber(newIndex);
    })
  }

  const randomPerson = () => {
    setIndex(()=> {
      // Gives us a random number between 0 and the total number of people in the array.
      let randomNumber = Math.floor(Math.random()*people.length);
      // We don't watch reptition of the same randomized index number,
      // so here we'll add +1 to the random number if it matches the current index.
      if (randomNumber === index) {
        randomNumber = index + 1;
      }
      // Again, we'll check to see if the number it outside of the array's range.
      return checkNumber(randomNumber);
    });
  }

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
      <button className="prev-btn" onClick={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className="next-btn" onClick={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
    <button className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
  </article>;
};

export default Review;