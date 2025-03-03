import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question1 = ({incrementScore}) => {
  return (
    <div>
      <div className="container">
        <div className="row" id="question" style={{ height: '65vh', backgroundColor: 'white', border: '1px solid black', padding: '20px', marginBottom: '10px' }}>
          <div className="col-12">
            What do you know about neurodiversity?
          </div>
        </div>
        <div className="row" id="answer" style={{ height: '20vh', backgroundColor: 'white', border: '1px solid black', padding: '20px' }}>
          <div className="col-6">
            <Button className="w-100 mb-2">Option A</Button>
          </div>
          <div className="col-6">
            <Button className="w-100 mb-2" onClick={incrementScore}>Option B</Button>
          </div>
          <div className="col-6">
            <Button className="w-100">Option C</Button>
          </div>
          <div className="col-6">
            <Button className="w-100" onClick={incrementScore}>Option D</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question1;