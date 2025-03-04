import React, { useState, useEffect } from "react";
import DefaultComponent from "../../Components/Default/Default";
import "bootstrap/dist/css/bootstrap.min.css";

import WelcomePage from "../../Components/WelcomePage/WelcomePage";
import Question1 from "../../Components/Questions/Question1/Question1";
import Question2 from "../../Components/Questions/Question2/Question2";
import Question3 from "../../Components/Questions/Question3/Question3";
import Question4 from "../../Components/Questions/Question4/Question4";
import Question5 from "../../Components/Questions/Question5/Question5";
import Question6 from "../../Components/Questions/Question6/Question6";
import Question7 from "../../Components/Questions/Question7/Question7";
import TeachingPage1 from "../../Components/TeachingPage1";
import GameOverPage from "../../Components/GameOver/GameOver";
const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [score, setScore] = useState(0);

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
    document.body.style.backgroundColor = randomBackgroundColor();
  }, [pageNumber]);

  const incrementPageNumber = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const incrementScore = () => {
    setPageNumber((prevPage) => prevPage + 1);
    setScore((prevScore) => prevScore + 1);
  };

  const pickCorrectPage = (pageId) => {
    switch (pageId) {
      case 0:
        return <WelcomePage incrementPageNumber={incrementPageNumber} />;
      case 1:
        return (
          <Question2
            incrementScore={incrementScore}
            incrementPageNumber={incrementPageNumber}
          />
        );
      case 2:
        return (
          <Question3
            incrementScore={incrementScore}
            incrementPageNumber={incrementPageNumber}
          />
        );
      case 3:
        return (
          <Question4
            incrementScore={incrementScore}
            incrementPageNumber={incrementPageNumber}
          />
        );
      case 4:
        return (
          <Question5
            incrementScore={incrementScore}
            incrementPageNumber={incrementPageNumber}
          />
        );
      case 5:
        return (
          <Question6
            incrementScore={incrementScore}
            incrementPageNumber={incrementPageNumber}
          />
        );
      case 6:
        return <TeachingPage1 incrementPageNumber={incrementPageNumber} />;
      case 7:
        return (
          <Question1
            incrementScore={incrementScore}
            incrementPageNumber={incrementPageNumber}
          />
        );
      case 8:
        return (
          <Question7
            incrementScore={incrementScore}
            incrementPageNumber={incrementPageNumber}
          />
        );
      case 9:
        return <GameOverPage score={score} />;
      default:
        return <DefaultComponent />;
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          {pageNumber !== 0 && pageNumber !== 9 && <h2>Score: {score}</h2>}{" "}
        </div>
      </div>
      <div className="row">
        <div className="col">{pickCorrectPage(pageNumber)}</div>
      </div>
    </div>
  );
};

export default Home;
