import { useEffect, useState} from "react";
import data from "./data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === data[currentQuestion].answer) {
      setScore(score + 1); // Augmente le score si la réponse est correcte
    }
  }

    return (
      <div className="quiz">
        <div className="questionNumber">
          Question : {currentQuestion + 1}
          <b>/</b>
          {data.length}
        </div>
        <div className="question">
          question="{data[currentQuestion].question}" options="
          {data[currentQuestion].options}" onanswer="{handleAnswer}"
    
        </div>
      </div>
    );
};

export default Quiz;
