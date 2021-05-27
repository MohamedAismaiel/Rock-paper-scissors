const Header = (props) => {
  const { score } = props;
  return (
    <div className="header">
      <div className="text">
        <span>Rock</span>
        <span>paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box">
        <span>Score </span>
        <div className="score-box__score">{score}</div>
      </div>
    </div>
  );
};
export default Header;
