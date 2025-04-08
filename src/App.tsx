import { useState } from "react";
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
      {/* <div className="questions"> J'ai gardé le modèle juste au cas où...
        <div className="question 1"> </div>
        <div className="answers 1">
          <button type="answer 1"> </button>
          <button type="answer 2"> </button>
          <button type="answer 3"> </button>
        </div> */}
      </div>
    </>
  );
}

export default App;
