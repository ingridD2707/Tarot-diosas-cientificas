import { useEffect, useState, useRef } from "react";
import { getAllCards } from "../services/TarotServices";
import TarotCard from "../components/TarotCard";

const POSITIONS = ["Pasado", "Presente", "Futuro"];

export default function ThrowTarot() {
  const [cards, setCards] = useState([]);
  const [slots, setSlots] = useState([null, null, null]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const readingRef = useRef(null);

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

  useEffect(() => {
    if (slots.filter(Boolean).length === 3 && readingRef.current) {
      readingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [slots]);

  if (loading)
    return (
      <div className="text-center mt-5 text-yellow-300">Cargando cartas…</div>
    );
  if (error)
    return <div className="text-red-600 text-center mt-5">{error}</div>;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-black via-gray-900 to-black text-yellow-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-yellow-300">Lectura de 3 cartas</h2>
        <button
          className="px-4 py-2 border border-yellow-700 text-yellow-300 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
          onClick={reset}
        >
          Reiniciar
        </button>
      </div>

      {/* Slots */}
      <div
        ref={readingRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {POSITIONS.map((label, i) => (
          <div
            key={label}
            className="border border-yellow-700 rounded-xl shadow-yellow-800/50 p-4 flex flex-col items-center justify-center bg-black/70 backdrop-blur-md"
          >
            <h3 className="font-bold text-yellow-300 mb-3">{label}</h3>
            {slots[i] ? (
              <>
                <img
                  src={slots[i].arcaneImage.imageSrc}
                  alt={slots[i].arcaneName}
                  className="w-full h-40 object-cover rounded mb-2 border border-yellow-700 shadow-lg shadow-yellow-800/50"
                />
                <h5 className="font-semibold text-yellow-200">{slots[i].arcaneName}</h5>
                <p className="text-sm text-yellow-300">{slots[i].arcaneDescription}</p>
                <p className="text-xs text-yellow-400 mt-2">
                  Diosa: {slots[i].goddessName} — {slots[i].goddessDescription}
                </p>
              </>
            ) : (
              <p className="text-yellow-400 italic">Sin carta seleccionada</p>
            )}
          </div>
        ))}
      </div>

      {/* Todas las cartas */}
      <h3 className="text-xl font-semibold mb-4 text-yellow-300">Elige tus cartas</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cards.map((c) => (
          <TarotCard
            key={c.id}
            mode="back"
            onClick={() => handleClick(c)}
            selected={selectedIds.has(c.id)}
          />
        ))}
      </div>
    </div>
  );
}
