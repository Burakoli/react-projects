import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './App.css';

function App() {
  const [color, setColor] = useState("lightblue");
  const [hidden, setHidden] = useState(false);

  const pickerStyles = {
    default: {
      picker: {
        position: 'absulute',
        bottom: "30px",
        left: "100px"
      }
    }
  };
  
  return (
    <div style={{ background: color }} className="App">
      <div className='container'>
        <button onClick={() => setHidden(!hidden)}>{hidden ? 'Close color picker' : 'Open color picker'}</button>
        {hidden && (
        <ChromePicker styles={pickerStyles} color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} />
        )}
      </div>
    </div>
  );
}

export default App;
