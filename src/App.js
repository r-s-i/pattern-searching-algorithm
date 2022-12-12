import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  let [text, setText] = useState("");
  let [pattern, setPattern] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "textArea") {
      setText(e.target.value);
    } 
    else if (e.target.id === "input") {
      setPattern(e.target.value)
    }
  }

  const findNumsOfMatches = () => {
    // protects against the infinite loop when pattern is empty:
    if (pattern === "") {
      return;
    }

    let patternCount = 0;
    let currentPlace = 0;

    while (currentPlace <= text.length) {
      let patternMatch = true;
      console.log("test")
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] !== text[currentPlace + i]) {
          patternMatch = false;
        }
      }
      if (patternMatch) {
        patternCount++;
        currentPlace += pattern.length;
      } else {
        currentPlace++;
      }
    }
    
    if (patternCount > 0) {
      document.getElementById("output").innerHTML = `Found ${patternCount} match(es)`;
    } 
    else {
      document.getElementById("output").innerHTML = "No match";
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="../index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
      </header>
      <main>
        <textarea id="textArea" placeholder="Input the text you want to search..." value={text} onChange={handleChange}></textarea>
        <input id="input" type="text" placeholder="Input the pattern you want to search for..." onChange={handleChange}></input>
        <button onClick={findNumsOfMatches}>Find # matches for the pattern</button>
        <p id="output"></p>
      </main>
    </div>
  );
}

export default App;
