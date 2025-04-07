type ResultsProps = {
  score: number;
  totalQuestions: number;
};

const Results: React.FC<ResultsProps> = ({ score, totalQuestions }) => {
  const getMessage = () => {
    if (score <= 3) {
      return {
        message:
          "Oups ! On dirait que React t'a donné du fil à retordre. Mais ne t'inquiète pas, continue à apprendre et tu deviendras un pro !",
        image: "src/images/thumbs-down.gif",
      };
    }
    if (score <= 7) {
      return {
        message:
          "Pas mal du tout ! Tu es sur la bonne voie. Encore un peu de pratique et tu seras imbattable !",
        image: "src/images/its-okay.gif",
      };
    }
    return {
      message:
        "Bravo, champion(ne) ! Tu as maîtrisé React comme un(e) pro. Continue comme ça !",
      image: "src/images/congrats-gif-1.gif",
    };
  };

  const { message, image } = getMessage();

  return (
    <div className="results">
      <h2>Ton résultat !</h2>
      <p>
        {score} / {totalQuestions}
      </p>
      <p>{message}</p>
      <img src={image} alt="Résultat du quizz" />
    </div>
  );
};

export default Results;
