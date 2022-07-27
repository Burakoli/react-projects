/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import WeatherImg from '../img/bg.jpg'

const WeatherBg = () => <div css={styles} className="weatherBg"></div>

const styles = css`
    width: 100%;
    max-width: 50%;
    min-height: 540px;
    background: url("${WeatherImg}") no-repeat center/cover;

    @media(max-width: 720px){
        min-height: 300px;
    }

    @media(min-width: 721px) and (max-width: 1040px){
        min-height: 380px;
    }

    @media(max-width: 1040px){
        max-width: 640px;
    }
`;

export default WeatherBg;