import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Question3 = ({ incrementScore }) => {
  return (
    <div>
      <div className="container">
        <div
          className="row"
          id="question"
          style={{
            height: "30vh",
            backgroundColor: "white",
            border: "4px solid green",
            padding: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <div className="col-12">
            <h2>Q3 do you know about neurodiversity?</h2>
          </div>
        </div>
        <div className="column" id="images" style={{ height: "20vh" }}></div>
        <div
          className="row"
          id="answer"
          style={{
            height: "20vh",
            backgroundColor: "white",
            border: "4px solid green",
            padding: "20px",
          }}
        >
          <div className="col-6">
            <Button className="w-100 mb-2">Option A</Button>
          </div>
          <div className="col-6">
            <Button className="w-100 mb-2" onClick={incrementScore}>
              Option B
            </Button>
          </div>
          <div className="col-6">
            <Button className="w-100">Option C</Button>
          </div>
          <div className="col-6">
            <Button className="w-100" onClick={incrementScore}>
              Option D
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question3;
