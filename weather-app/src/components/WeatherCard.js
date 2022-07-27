/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import WeatherBg from "./WeatherBg";
import WeatherInfo from "./WeatherInfo";

const WeatherCard = () => {
    return(
        <div css={styles} className="card">
            <WeatherBg />
            <WeatherInfo />
        </div>
    );
};

const styles = css`
    width: 100%;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
    @media(max-width: 1040px){
        flex-direction: column;
        align-items: center;
    }
`;

export default WeatherCard;