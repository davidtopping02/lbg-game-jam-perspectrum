import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Question2 = ({ incrementScore }) => {
  const renderOptions = () => {
    const options = [];
    const yesIndex = Math.floor(Math.random() * 200);

    for (let i = 0; i < 100; i++) {
      if (i === yesIndex) {
        options.push(
          <div className="col-6 mb-2" key="yes">
            <Button className="w-100" onClick={incrementScore}>Yes</Button>
          </div>
        );
      } else {
        options.push(
          <div className="col-6 mb-2" key={`no-${i}`}>
            <Button className="w-100">No</Button>
          </div>
        );
      }
    }

    return options;
  };

  return (
    <div>
      <div className="container">
        <div className="row" id="question" style={{ height: '30vh', backgroundColor: 'white', border: '4px solid green', padding: '20px', marginBottom: '10px', marginTop: '20px' }}>
          <div className="col-12">
            <h2>Click yes</h2>
          </div>
        </div>
        <div className="column" id='images' style={{ height: '20vh' }}></div>
        <div className="row" id="answer" style={{ height: '40vh', backgroundColor: 'white', border: '4px solid green', padding: '20px', overflowY: 'scroll' }}>
          {renderOptions()}
        </div>
      </div>
    </div>
  );
};

export default Question2;