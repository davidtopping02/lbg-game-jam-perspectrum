import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "../../Timer/Timer";

const Question2 = ({ incrementScore, incrementPageNumber }) => {
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const renderOptions = () => {
    const options = [];
    const yesIndex = Math.floor(Math.random() * 10);

    for (let i = 0; i < 10; i++) {
      if (i === yesIndex) {
        options.push(
          <div className="col-6 mb-2" key="yes">
            <Button
              className="w-100"
              onClick={() => {
                incrementScore();
                playSound("/correct-sfx.mp3");
              }}
            >
              Yes
            </Button>
          </div>
        );
      } else {
        options.push(
          <div className="col-6 mb-2" key={`no-${i}`}>
            <Button
              className="w-100"
              onClick={() => {
                incrementPageNumber();
                playSound("/incorrect-sfx.mp3");
              }}
            >
              No
            </Button>
          </div>
        );
      }
    }

    return options;
  };

  return (
    <div>
      <div className="container">
        <div
          className="row"
          id="question"
          style={{
            height: "20vh",
            backgroundColor: "white",
            border: "4px solid green",
            padding: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <div className="col-12">
            <h2>Q2 Click yes</h2>
          </div>
        </div>
        <div className="column" id="images">
          <Timer initialTime={60} onTimeout={incrementPageNumber}></Timer>
        </div>
        <div
          className="row mt-5"
          id="answer"
          style={{
            height: "40vh",
            backgroundColor: "white",
            border: "4px solid green",
            padding: "20px",
            overflowY: "scroll",
          }}
        >
          {renderOptions()}
        </div>
      </div>
    </div>
  );
};

export default Question2;
