/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const Search = ({ search, setSearch, getData }) => {
    return(
        <form css={styles} onSubmit={getData}>
            <input 
            autoFocus 
            type="text" 
            placeholder="Search for a city / country..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
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
        margin: 15px 0 0 0;
        &::placeholder {
            color: #429ee7;
        }
    }
`;

export default Search;