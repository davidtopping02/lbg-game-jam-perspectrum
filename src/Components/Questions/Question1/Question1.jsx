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
    const disableTime = Math.random() * 3000 + 1000;
    setIsYesDisabled(true);
    setTimeout(() => {
      setIsYesDisabled(false);
    }, disableTime);
  }, []);

  return (
    <div className="container">
      <div className="row question">
        <div className="col-8">
          <h2>
            You’ve just been told someone's name for the 6th time, do you
            remember it?
          </h2>
        </div>

        <div className="col-4">
          <img
            src="/IMG_7762.png"
            alt="Breakfast"
            style={{ width: "100%", height: "100%" }}
          />
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
            onClick={() => {
              playSound("/incorrect-sfx.mp3");
              incrementPageNumber();
            }}
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
