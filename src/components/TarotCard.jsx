// src/components/TarotCard.jsx
export default function TarotCard({ mode = "back", card, onClick, selected }) {
  if (mode === "back") {
    return (
      <div
        className={`card text-center shadow-sm ${selected ? "border-primary" : ""}`}
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        <div
          className="d-flex align-items-center justify-content-center bg-dark text-white"
          style={{ height: "180px" }}
        >
          TAROT
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card text-center shadow-sm ${selected ? "border-primary" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <div className="card-body">
        <h6 className="card-title">{card.arcaneName}</h6>
        {card.arcaneImage?.imageSrc && (
          <img
            src={card.arcaneImage.imageSrc}
            alt={card.arcaneName}
            className="img-fluid rounded"
          />
        )}
      </div>
    </div>
  );
}
