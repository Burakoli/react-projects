import React, { useState } from 'react';
import Container from './components/Container';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const API_KEY = "60010891fc683bfc5448a4603c6fa8fd";
  const [weatherData, setWeatherData] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const getData = e => {
    e.preventDefault();
    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${search}`)
    .then((res) => res.json())
    .then((data) => {
      if(data.error) {
        setError("Sorry we couldn't find what you're looking for");
        return;
      } else {
        setWeatherData(data);
      }
    });
    setSearch("");
  };
  
  return (
    <div className="App">
      <Container>
        <WeatherCard weatherData={weatherData} error={error} search={search} setSearch={setSearch} getData={getData} />
      </Container>
    </div>
  );
}

export default App;
