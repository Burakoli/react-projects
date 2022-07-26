import React from "react";

const Form = ({ inputValue, setInputValue, handleSubmit }) => {
    
    return(
        <form onSubmit={handleSubmit}>
            <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="text" placeholder="Add to-do..." />
            <button type="submit">Add to-do</button>
        </form>
    );
};

export default Form;