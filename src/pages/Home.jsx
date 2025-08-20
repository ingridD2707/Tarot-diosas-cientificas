import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCards } from "../services/TarotServices";
import TarotCard from "../components/TarotCard";

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  if (loading) return <div className="text-center mt-5">Cargando cartas…</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Cartas </h2>
        
      </div>

      <div className="row g-3">
        {cards.map((c) => (
          <div key={c.id} className="col-6 col-md-3 col-lg-2">
            <TarotCard
              mode="back"
              onClick={() => navigate(`/card/${c.id}`)}
            />
          </div>
        ))}
      </div>
     
      <button
          className="btn btn-primary"
          onClick={() => navigate("/throw")}
        >
          Echar las cartas
        </button>
    </div>
  );
}
