import { useState, useEffect } from 'react';
import CardGrid from './components/CardGrid';
import Scoreboard from './components/Scoreboard';
import './styles/App.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score]);

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid updateScore={updateScore} resetScore={() => setScore(0)} />
    </div>
  );
}

export default App;
