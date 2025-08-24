import backCard from "../image/backCard.png";

export default function TarotCard({ mode = "back", card, onClick, selected }) {
  if (mode === "back") {
    // Reverso de la carta
    return (
      <div
        onClick={onClick}
      className={`w-[200px] h-[300px] rounded-xl shadow-lg border-2 border-yellow-500 
                  bg-cover bg-center cursor-pointer 
                  ${selected ? "border-primary" : ""}`}
      style={{ backgroundImage: `url(${backCard})` }}
      >
        {/* Aquí solo mostramos la parte de atrás */}
      </div>
    );
  }

  // Frente de la carta
  return (
  <div className="flex flex-wrap justify-center gap-6">
  {/* Carta del Arcano */}
  <div className="flex flex-col items-center w-64 bg-white rounded-lg shadow-md p-4">
    <img src={arcano} alt="Arcano" className="w-full h-auto rounded-lg" />
    <p className="mt-2 text-center font-semibold">El Loco</p>
    <p className="mt-1 text-sm text-gray-600 text-center">
      El viaje del Loco hacia el Mundo comienza en el número 0...
    </p>
  </div>

  {/* Carta de la Diosa */}
  <div className="flex flex-col items-center w-64 bg-white rounded-lg shadow-md p-4">
    <img src={diosa} alt="Diosa" className="w-full h-auto rounded-lg" />
    <p className="mt-2 text-center font-semibold">Fei-Fei Li</p>
    <p className="mt-1 text-sm text-gray-600 text-center">
      Fei-Fei Li (Pekín - China) es una reconocida científica en el campo de...
    </p>
  </div>

  {/* Más cartas si quieres */}
</div>


  );
}
