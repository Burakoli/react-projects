import React, { useState } from 'react';
import Container from './components/Container';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <WeatherCard />
      </Container>
    </div>
  );
}

export default App;
