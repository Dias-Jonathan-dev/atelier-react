import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
<<<<<<< HEAD
import data from "./Components/quizz";  // Assure-toi que `data` contient les questions
import Results from "./Components/Result";  // Tu peux ajouter une section de résultats plus tard si nécessaire
=======
import Quiz from "./Components/quizz.tsx";
import Results from "./Components/Result.tsx";
>>>>>>> da645518bb45c39de6b97705de7efd55197d33e0

function App() {
  const [showQuestions, setShowQuestions] = useState(false);

  const toggleQuestions = () => {
    setShowQuestions(!showQuestions);
  };

  return (
    <>
<<<<<<< HEAD
=======
      {" "}
 {/*  "pourquoi cette ligne au dessus ? " */}
>>>>>>> da645518bb45c39de6b97705de7efd55197d33e0
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
<<<<<<< HEAD
      </header> 

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
=======
      

      </header>
      <body>
        <Quiz /> 
        <Results />
      </body>
         
      {/* <div className="questions"> J'ai gardé le modèle juste au cas où...
        <div className="question 1"> </div>
        <div className="answers 1">
          <button type="answer 1"> </button>
          <button type="answer 2"> </button>
          <button type="answer 3"> </button>
        </div> */}
      </div>
>>>>>>> da645518bb45c39de6b97705de7efd55197d33e0
    </>
  );
}

export default App;
