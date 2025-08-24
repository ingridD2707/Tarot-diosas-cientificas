import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCardById } from "../services/TarotServices";

export default function TarotDetail() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const data = await getCardById(id);
        setCard(data);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, [id]);

  if (error) return <div className="text-red-500 font-bold text-center">{error}</div>;
  if (!card) return <div className="text-center mt-5 text-yellow-200">Cargando carta…</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-yellow-200 p-6">
      <button
        className="mb-6 px-4 py-2 rounded-lg border border-yellow-500 text-yellow-300 hover:bg-yellow-500 hover:text-black transition"
        onClick={() => navigate(-1)}
      >
        ← Volver
      </button>

      <div className="max-w-4xl mx-auto bg-black/70 backdrop-blur-md border border-yellow-600 rounded-2xl shadow-xl shadow-yellow-900/40 p-6">
        {/* Arcano */}
        <div className="mb-10 text-center">
          <img
            src={card.arcaneImage?.imageSrc}
            alt={card.arcaneName}
            className="mx-auto rounded-xl border border-yellow-700 shadow-lg shadow-yellow-800/50 max-h-72 object-cover"
          />
          <h3 className="mt-4 text-2xl font-bold text-yellow-400">{card.arcaneName}</h3>
          <p className="mt-2 text-yellow-200">{card.arcaneDescription}</p>
        </div>

        <hr className="border-yellow-700 mb-10" />

        {/* Diosa asociada */}
        <div className="text-center">
          <img
            src={card.goddessImage?.imageSrc}
            alt={card.goddessName}
            className="mx-auto rounded-xl border border-yellow-700 shadow-lg shadow-yellow-800/50 max-h-60 object-cover"
          />
          <h5 className="mt-4 text-xl font-semibold text-yellow-300">{card.goddessName}</h5>
          <p className="mt-2 text-yellow-200">{card.goddessDescription}</p>
        </div>
      </div>
    </div>
  );
}
