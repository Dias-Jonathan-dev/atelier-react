import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {" "}
      <header>
        <h1>
          Notre quiz sur <div className="react-heading">REACT</div>
        </h1>

        <div>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="text-header">
          <p>
            Bienvenue sur notre quiz <span className="react">REACT</span>. Teste
            tes connaissances et compare tes résultats avec tes copains ! Le
            perdant doit ramener les choco vendredi !
          </p>
        </div>

        <div className="button">
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </header>
      <div className="questions">
        <div className="question 1"> </div>
        <div className="answers 1">
          <button type="answer 1"> </button>
          <button type="answer 2"> </button>
          <button type="answer 3"> </button>
        </div>

        <div className="question 2"> </div>
        <div className="answers 2">
          <button type="answer 4"> </button>
          <button type="answer 5"> </button>
          <button type="answer 6"> </button>
        </div>

        <div className="question 3"> </div>
        <div className="answers 3">
          <button type="answer 7"> </button>
          <button type="answer 8"> </button>
          <button type="answer 9"> </button>
        </div>

        <div className="question 4"> </div>
        <div className="answers 4">
          <button type="answer 10"> </button>
          <button type="answer 11"> </button>
          <button type="answer 12"> </button>
        </div>

        <div className="question 5"> </div>
        <div className="answers 5">
          <button type="answer 13"> </button>
          <button type="answer 14"> </button>
          <button type="answer 15"> </button>
        </div>

        <div className="question 6"> </div>
        <div className="answers 6">
          <button type="answer 16"> </button>
          <button type="answer 17"> </button>
          <button type="answer 18"> </button>
        </div>

        <div className="question 7"> </div>
        <div className="answers 7">
          <button type="answer 19"> </button>
          <button type="answer 20"> </button>
          <button type="answer 21"> </button>
        </div>

        <div className="question 8"> </div>
        <div className="answers 8">
          <button type="answer 22"> </button>
          <button type="answer 23"> </button>
          <button type="answer 24"> </button>
        </div>

        <div className="question 9"> </div>
        <div className="answers 9">
          <button type="answer 25"> </button>
          <button type="answer 26"> </button>
          <button type="answer 27"> </button>
        </div>

        <div className="question 10"> </div>
        <div className="answers 10">
          <button type="answer 28"> </button>
          <button type="answer 29"> </button>
          <button type="answer 30"> </button>
        </div>
      </div>
    </>
  );
}

export default App;
