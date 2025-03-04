import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "../../Timer/Timer";
import "./Question7.css";

const Question7 = ({ incrementScore, incrementPageNumber }) => {
  const [enabledButtonIndex, setEnabledButtonIndex] = useState(null);

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  useEffect(() => {
    const toggleButton = () => {
      const randomIndex = Math.floor(Math.random() * 6); // There are 6 buttons
      setEnabledButtonIndex(randomIndex);
      setTimeout(() => {
        setEnabledButtonIndex(null);
        setTimeout(toggleButton, 500);
      }, 500);
    };

    toggleButton();

    return () => clearTimeout(toggleButton);
  }, []);

  return (
    <div className="container">
      <div className="row question">
        <div className="col-12">
          <h2>Q7 Click yes</h2>
          <p>(Page will move on in 5 seconds...)</p>
        </div>
      </div>
      <div className="column images">
        <Timer initialTime={9000} onTimeout={incrementPageNumber}></Timer>
      </div>
      <div className="row answer">
        {[...Array(6)].map((_, index) => (
          <div className="col-6 mb-2" key={index}>
            <Button
              className="w-100"
              onClick={() => {
                incrementScore();
                playSound("/correct-sfx.mp3");
              }}
              disabled={enabledButtonIndex !== index}
            >
              Yes
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question7;
