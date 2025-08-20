import React, { useEffect, useState } from "react";
import { getThreeCardSpread } from "../services/TarotServices";

function Throw() {
  const [tirada, setTirada] = useState(null);

  const newThrow = async () => {
    const spread = await getThreeCardSpread();
    setTirada(spread);
  };

  useEffect(() => {
    newThrow(); // carga inicial
  }, []);

  if (!tirada) return <p>Cargando tirada...</p>;

  return (
    <div>
      <h2>Tirada de 3 cartas</h2>
      <button onClick={ newThrow}>Nueva tirada</button>

      <div>
        <h3>Pasado</h3>
        <p>{tirada.pasado.name}</p>
      </div>
      <div>
        <h3>Presente</h3>
        <p>{tirada.presente.name}</p>
      </div>
      <div>
        <h3>Futuro</h3>
        <p>{tirada.futuro.name}</p>
      </div>
    </div>
  );
}

export default Throw;
