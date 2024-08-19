import '../styles/Card.css';

const Card = ({ card, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={card.imageUrl} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
