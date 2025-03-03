import React, { useState, useEffect } from "react";
import DefaultComponent from "../../Components/Default/Default";
import "bootstrap/dist/css/bootstrap.min.css";
import Question2 from "../../Components/Questions/Question2.jsx/Question2";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [score, setScore] = useState(0)

  const bgColors = [
    "var(--bg-color-1)",
    "var(--bg-color-2)",
    "var(--bg-color-3)",
  ];
  const randomBackgroundColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
  };

  useEffect(() => {
    const selectedColor = randomBackgroundColor();
    document.body.style.backgroundColor = selectedColor;
  }, [pageNumber]);

  const incrementPageNumber = () => {
    setPageNumber(pageNumber + 1);
  };

  const incrementScore = () => {
    setScore(score+1)
  }

  const pickCorrectPage = (pageId) => {
    switch (pageId) {
      case 1:
        return <Question2 incrementScore={incrementScore}/>;
      default:
        return <DefaultComponent />;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">{pickCorrectPage(pageNumber)}</div>
      </div>
    </div>
  );
};

export default Home;
