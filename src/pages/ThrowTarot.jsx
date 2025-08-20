
import { useEffect, useState } from "react";
import { getAllCards } from "../services/TarotServices";
import TarotCard from "../components/TarotCard";

const POSITIONS = ["Pasado", "Presente", "Futuro"];

export default function ThrowTarot() {
  const [cards, setCards] = useState([]);
  const [slots, setSlots] = useState([null, null, null]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllCards();
        setCards(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const selectedIds = new Set(slots.filter(Boolean).map((c) => c.id));

  function handleClick(card) {
    const idx = slots.findIndex((s) => s?.id === card.id);

    if (idx !== -1) {
      // quitar carta
      const next = [...slots];
      next[idx] = null;
      setSlots(next);
      return;
    }

    const emptyIndex = slots.findIndex((s) => s === null);
    if (emptyIndex !== -1) {
      const next = [...slots];
      next[emptyIndex] = card;
      setSlots(next);
    }
  }

  function reset() {
    setSlots([null, null, null]);
  }

  if (loading) return <div className="text-center mt-5">Cargando cartas…</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Lectura de 3 cartas</h2>
        <button className="btn btn-outline-danger" onClick={reset}>
          Reiniciar
        </button>
      </div>

      <div className="row g-3 mb-4">
        {POSITIONS.map((label, i) => (
          <div key={label} className="col-md-4">
            <div className="card h-100 border-secondary">
              <div className="card-header text-center fw-bold">{label}</div>
              <div className="card-body">
                {slots[i] ? (
                  <>
                    <img
                      src={slots[i].arcaneImage.imageSrc}
                      alt={slots[i].arcaneName}
                      className="img-fluid rounded mb-2"
                      style={{ maxHeight: "180px", objectFit: "cover" }}
                    />
                    <h5>{slots[i].arcaneName}</h5>
                    <p className="small">{slots[i].arcaneDescription}</p>
                    <p className="text-muted small">
                      Diosa: {slots[i].goddessName} —{" "}
                      {slots[i].goddessDescription}
                    </p>
                  </>
                ) : (
                  <p className="text-muted">Sin carta seleccionada</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-3">Elige tus cartas</h3>
      <div className="row g-3">
        {cards.map((c) => (
          <div key={c.id} className="col-6 col-md-3 col-lg-2">
            <TarotCard
              mode="back"
              onClick={() => handleClick(c)}
              selected={selectedIds.has(c.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
