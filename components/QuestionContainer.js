import Question from "./Question";

export default function QuestionContainer(props) {
  return (
    <div className="questionContainer">
      <button onClick={() => props.getQuestionFn()}>Get Question</button>
      <Question
        category={props.category}
        points={props.points}
        question={props.question}
      />
      <button onClick={() => props.showAnswerFn()}>{props.revealText}</button>
    </div>
  );
}
