/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Search = () => {
    return(
        <form>
            <input autoFocus type="text" placeholder="Search for a city / country..."></input>
        </form>
    );
};

const styles = css`
    input {
        width: 100%;
        background: #483d6b;
        border: none;
        border-radius: 4px;
        outline: none;
        padding: 14px;
        color: #429ee7;
        &::placeholder {
            color: #429ee7;
        }
    }
`;

export default Search;