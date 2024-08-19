import '../styles/Scoreboard.css';

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="scoreboard">
      <h1>Memory Card Game</h1>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;
