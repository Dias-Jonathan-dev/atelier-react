import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import data from "./Components/quizz";
import Results from "./Components/Result";  

function App() {
  const [showQuestions, setShowQuestions] = useState(false);

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <>
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
          <button type="button" onClick={toggleQuestions}>Débuter le quiz !</button>
        </div>
      

      </header> 
      <body>
        <Quiz /> 
        <Results />
      </body>
         

      {showQuestions && (
        <section className="questions">
          {data.map((question, index) => (
            <div key={index} className="question">
              <h2>{question.question}</h2>
              <ul>
                {question.options.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default App;
