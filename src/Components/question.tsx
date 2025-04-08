const Question = ({ question, options }) => {
  return (
    <div className="question">
      <h2 id="question">{question}</h2>

      {options.map((option, index) => (
        <button className="option" key="{index}" onclick="()">
          {onAnswer(option)}
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
