import people from "./data";
import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      if (newIndex > people.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  const previousPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      if (newIndex < 0) {
        return people.length - 1;
      }
      return newIndex;
    });
  };

  const randomPerson = () => {
    const randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaBeer />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button onClick={previousPerson} className="prev-btn">
            <FaChevronCircleLeft />
          </button>
          <button onClick={nextPerson} className="next-btn">
            <FaChevronCircleRight />
          </button>
        </div>
        <button onClick={randomPerson} className="btn">
          surprise me
        </button>
      </article>
    </main>
  );
};

export default App;
