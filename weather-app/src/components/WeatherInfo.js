/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "./container";
import Search from "./Search";
import SunImg from '../img/sun.png'
import RainImg from '../img/rain.png'
import ClearImg from '../img/clear.png'

const WeatherInfo = () => {
    return(
        <div css={styles} className="weatherInfo">
            <Container>
                <Search />
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
    }
`;

export default WeatherInfo;