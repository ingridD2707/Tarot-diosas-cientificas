export default function CardFrontTarot({ card }) {
  return (
    <div className="card-front">
      <img src={card.image} alt={card.name} />
      <h3>{card.name}</h3>
      <p>{card.description}</p>
    </div>
  );
}