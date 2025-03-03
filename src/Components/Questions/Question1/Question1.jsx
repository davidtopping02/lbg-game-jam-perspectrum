import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "../../Timer/Timer";
import "./Question1.css";

const Question1 = ({ incrementScore, incrementPageNumber }) => {
  const [isYesDisabled, setIsYesDisabled] = useState(false);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  useEffect(() => {
    const toggleButtonInterval = setInterval(() => {
      const disableTime = Math.random() * 10000 + 1000;
      const enableTime = 250;

      setIsYesDisabled(true);

      setTimeout(() => {
        setIsYesDisabled(false);
      }, disableTime);
    }, 1500);
  }, []);

  return (
    <div className="container">
      <div className="row question">
        <div className="col-12">
          <h2>Q1 Click yes</h2>
          <p>(Page will move on in 5 seconds...)</p>
        </div>
      </div>
      <div className="column images">
        <Timer initialTime={9000} onTimeout={incrementPageNumber}></Timer>
      </div>
      <div className="row answer">
        <div className="col-6 mb-2">
          <Button
            className="w-100"
            onClick={() => {
              incrementScore();
              playSound("/correct-sfx.mp3");
            }}
            disabled={isYesDisabled}
            style={{
              transition: "background-color 0.3s ease, opacity 0.3s ease",
            }}
          >
            Yes
          </Button>
        </div>
        <div className="col-6 mb-2">
          <Button
            className="w-100"
            onClick={() => playSound("/incorrect-sfx.mp3")}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
