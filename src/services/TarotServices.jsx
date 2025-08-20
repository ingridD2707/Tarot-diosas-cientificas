
const BASE_URL = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot'; 


export async function getAllCards() {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) throw new Error('No se pudieron cargar las cartas');
  return res.json(); 
}

export async function getCardById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('No se pudo cargar la carta');
  return res.json(); 
}
// Función que devuelve 3 cartas aleatorias
export async function getThreeCardSpread() {
  const allCards = await getAllCards();

  // barajar
  const shuffled = [...allCards].sort(() => Math.random() - 0.5);

  // elegir 3
  const selected = shuffled.slice(0, 3);

  return {
    pasado: selected[0],
    presente: selected[1],
    futuro: selected[2],
  };
}
