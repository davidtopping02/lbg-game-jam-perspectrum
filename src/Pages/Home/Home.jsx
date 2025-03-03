import React, { useState, useEffect } from "react";
import DefaultComponent from "../../Components/Default/Default";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Question1 from "../../Components/Questions/Question1/Question1";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);

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

  const pickCorrectPage = (pageId) => {
    switch (pageId) {
      case 1:
        return <Question1 />;
      default:
        return <DefaultComponent />;
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Perspectrum</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">{pickCorrectPage(pageNumber)}</div>
      </div>
    </div>
  );
};

export default Home;
