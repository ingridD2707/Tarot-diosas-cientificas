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
        setError(e.message || "Error cargando las cartas");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-6 text-yellow-200 animate-pulse">
        Cargando cartas…
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center mt-6">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-yellow-200 px-6 py-10">
      {/* Encabezado */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-yellow-400 tracking-wide drop-shadow-lg">
          Cartas del Tarot
        </h2>
      </div>

      {/* Grid de cartas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {cards.map((c) => (
          <TarotCard
            key={c.id}
            mode="back"
            onClick={() => navigate(`/card/${c.id}`)}
          />
        ))}
      </div>

      {/* Botón */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => navigate("/throw")}
          className="px-8 py-3 rounded-xl border border-yellow-600 text-yellow-300 hover:bg-yellow-500 hover:text-black shadow-lg shadow-yellow-900/40 transition transform hover:scale-105"
        >
          ✨ Echar las cartas ✨
        </button>
      </div>
    </div>
  );
}
