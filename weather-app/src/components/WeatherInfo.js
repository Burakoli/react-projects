/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React from "react";
import Container from "./Container";
import Search from "./Search";
import SunImg from '../img/sun.png'
import RainImg from '../img/rain.png'
import ClearImg from '../img/clear.png'
import MistImg from '../img/mist.png'
import PartlyCloudyImg from '../img/partly_cloudy.png'
import RainWithThunderstormImg from '../img/rain_with_thunderstorm.png'

const WeatherInfo = ({ search, setSearch, getData, weatherData, error }) => {
    return(
        <div css={styles} className="weatherInfo">
            <Container>
                <Search search={search} setSearch={setSearch} getData={getData} />
                {weatherData !== null ? (
                    <React.Fragment>
                        <div className="row">
                            <p>City: </p>
                            <span>{weatherData.location.name}</span>
                        </div>
                        <div className="row">
                            <p>Country: </p>
                            <span>{weatherData.location.country}</span>
                        </div>
                        <div className="row">
                            <p>Region: </p>
                            <span>{weatherData.location.region}</span>
                        </div>
                        <div className="row">
                            <p>Time: </p>
                            <span>{weatherData.location.localtime}</span>
                        </div>
                        <div className="row">
                            <p>Temperature: </p>
                            <span>{weatherData.current.temperature} °C</span>
                        </div>
                        <div className="weatherDesc row">
                            <p>Weather: </p>
                            <span>{weatherData.current.weather_descriptions}</span>
                            {weatherData.current.weather_descriptions.includes("Sunny") ? (
                                <img src={SunImg} alt="Sun" />
                            
                            ) :  weatherData.current.weather_descriptions.includes("rain") ? (
                                <img src={RainImg} alt="Rain" />
                                
                            ) :  weatherData.current.weather_descriptions.includes("Mist") ? (
                                <img src={MistImg} alt="Mist" />
                            
                            ) :  weatherData.current.weather_descriptions.includes("Partly cloudy") ? (
                                <img src={PartlyCloudyImg} alt="Partly cloudy" />
                            
                            ) :  weatherData.current.weather_descriptions.includes("Rain With Thunderstorm") ? (
                                <img src={RainWithThunderstormImg} alt="Rain With Thunderstorm" />
                            
                            ) :  weatherData.current.weather_descriptions.includes("Thunderstorm") ? (
                                <img src={RainWithThunderstormImg} alt="Thunderstorm" />
                            
                            )  :  weatherData.current.weather_descriptions.includes("Clear") ? (
                                <img src={ClearImg} alt="Clear" />
                            
                            ) : (
                                ""
                            )}
                        </div>
                    </React.Fragment>
                ) : (
                    <p className="error">{error}</p>
                )}
            </Container>
        </div>
    );
};

const styles = css `
    width: 100%;
    max-width: 50%;
    background: #231d35;
    display: flex;
    .container {
        max-width: 80%;
        min-height: 443%;
        color: #fff;
        .row{
            width: 100%;
            height: 50px;
            margin: 16px 0;
            border-right: 6px solid #429ee7;
            display: flex;
            align-items: center;
            &:last-of-type{
                margin: 0;
            }
            p{
                font-size: 22px;
                width: 150px;
            }
            span{
                font-size: 17px;
                margin-left: 14px;
                color: #429ee7;
            }
        }
        .weatherDesc{
            display: flex;
            align-items: center;
            img{
                width: 50px;
                margin-left: 14px;
                height: auto;
                display: block;
            }
        }
        .error{
            color: red;
            font-size: 17px;
            margin: 16px 0;
        }
    }
    @media (max-width: 550px){
        .container{
            .row{
                span{
                    margin-left: 4px;
                }
            }
        }
    }
    @media (max-width: 1440px){
        min-height: 500px;
        max-width: 640px;
        .container{
            max-width: 90%;
        }
    }
`;

export default WeatherInfo;