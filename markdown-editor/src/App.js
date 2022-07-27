import React, { useState } from "react";
import ReactMarkdown from "react-markdown"; 
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="hero">
      <div className="markdownContainer">
        <textarea value={value} onChange={e => setValue(e.target.value)} />
        <ReactMarkdown className="output" source={value} escapeHtml={false} />
      </div>
    </div>
  );
}

export default App;
