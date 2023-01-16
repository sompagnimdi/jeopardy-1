export default function ScoreButton(props) {
  return <button onClick={() => props.onClick()}>{props.buttonName}</button>;
}
