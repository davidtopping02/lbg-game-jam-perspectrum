import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const GameOverPage = ({ score }) => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <div className="container text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <h1 className="fw-bold">Game Over</h1>
        <h1>Your Score: {score} / 7</h1>
      </div>
    </>
  );
};

export default GameOverPage;
