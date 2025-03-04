import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const TeachingPage1 = ({ incrementPageNumber }) => {
  return (
    <div>
      <div className="container">
        <div
          className="row"
          id="question"
          style={{
            height: "60vh",
            backgroundColor: "white",
            border: "4px solid green",
            padding: "20px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
        >
          <div className="col-12">
            <h1>Q2 Click yes</h1>
            <p> What does this look like?</p>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-end">
            <Button onClick={incrementPageNumber}>
              <p>Continue</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingPage1;
