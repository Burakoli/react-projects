/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import WeatherBg from "./WeatherBg";
import WeatherInfo from "./WeatherInfo";

const WeatherCard = ({ search, setSearch, getData, weatherData, error }) => {
    return(
        <div css={styles} className="card">
            <WeatherBg />
            <WeatherInfo  weatherData={weatherData} error={error} search={search} setSearch={setSearch} getData={getData} />
        </div>
    );
};

const styles = css`
    width: 100%;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    @media (max-width: 1040px) {
        flex-direction: column;
        align-items: center;
    }
`;

export default WeatherCard;