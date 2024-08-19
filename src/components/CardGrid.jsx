import { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/CardGrid.css';

const CardGrid = ({ updateScore, resetScore }) => {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((response) => response.json())
      .then((data) => {
        const cardData = data.results.map((item, index) => ({
          id: index,
          name: item.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
        }));
        setCards(shuffleArray(cardData));
      });
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      resetScore();
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, id]);
      updateScore();
      setCards(shuffleArray(cards));
    }
  };

  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={() => handleCardClick(card.id)} />
      ))}
    </div>
  );
};

export default CardGrid;
