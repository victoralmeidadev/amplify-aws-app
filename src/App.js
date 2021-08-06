import React, { useState } from "react";
import "./App.css";

const inputStyle = {
  width: "80%",
  maxWidth: 300,
  height: 50,
  fontSize: 15,
  margin: 10,
};
function App() {
  const [baseUrl, setBaseUrl] = useState("");
  const [path, setPath] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Deep linking test</h1>
        <input
          placeholder="base url"
          type="text"
          value={baseUrl}
          onChange={({ target: { value } }) => setBaseUrl(value)}
          style={inputStyle}
        />

        <input
          placeholder="path"
          type="text"
          value={path}
          onChange={({ target: { value } }) => setPath(value)}
          style={inputStyle}
        />
        <a style={{ color: "#FFF", padding: 20 }} href={`${baseUrl}${path}`}>
          Deeplinking to: {baseUrl}
          {path}
        </a>
      </header>
    </div>
  );
}

export default App;
