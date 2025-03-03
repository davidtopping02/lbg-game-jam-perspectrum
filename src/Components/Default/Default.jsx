import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DefaultComponent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Welcome to My Bootstrap Component</h1>
          <p className="text-center">
            This is a default Bootstrap component using React.
          </p>
          <button className="btn btn-primary">Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default DefaultComponent;
