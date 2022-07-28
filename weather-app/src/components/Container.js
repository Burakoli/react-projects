/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const Container = ({ children }) => (
    <div css={styles} className="container" >
        { children }
    </div>
);

const styles = css`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    @media (max-width: 1040px) {
        max-width: 90%;
    }
`;

export default Container;