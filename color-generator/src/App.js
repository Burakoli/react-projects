import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState ([{ bg: "#" + ((Math.random() * 0xffffff) << 0).toString(16) }]);

  useEffect(() => {
    if (boxes.length < 451) {
    const interval = setInterval (() => {
      setBoxes([...boxes, { bg: "#" + ((Math.random() * 0xffffff) << 0).toString(16) }]);
    }, 25);
    return () => clearInterval(interval);
    }
  }, [boxes]);

  return (
    <div className="hero">
      {boxes.map((box, index) => (
          <div key={index} className="box" style={{ background: box.bg }}>
            <p>{index} <br/> <br/> {(box.bg).toString(16)}</p>
          </div>
      ))}
    </div>
  );
}

export default App;
