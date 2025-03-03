import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question1 = ({incrementScore}) => {
  return (
    <div>
      <div className="container">
        <div className="row" id="question">
          <div className="col-12">
            What do you know about neurodiversity?
          </div>
        </div>
        <div className="row" id="answer">
          <div className="col-6">
            <Button className="w-100">Option A</Button>
          </div>
          <div className="col-6">
            <Button className="w-100" onClick={incrementScore}>Option B</Button>
          </div>
          <div className="col-6 mt-2">
            <Button className="w-100">Option C</Button>
          </div>
          <div className="col-6 mt-2">
            <Button className="w-100">Option D</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question1;