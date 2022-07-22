import React, { useState } from 'react';
import './App.css';

function App() {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(0);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="hero">
      <div className="container">
        <p>Random number: </p>
        <div className='randomNum'>
          <p>
            <span>{randomNum}</span>
          </p>
        </div>
        <div className='numContainer'>
          <div>
            <p>Min:</p>
            <input type="number" value={minVal} onChange={e => setMinVal(e.target.value)} />
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxVal} onChange={e => setMaxVal(e.target.value)} />
          </div>
        </div>
        <button onClick={handleRandomNum}>Get random number</button>
      </div>
    </div>
  );
}

export default App;
