import React, { } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <SketchPicker />
        <button>Open color picker</button>
      </div>
    </div>
  );
}

export default App;
