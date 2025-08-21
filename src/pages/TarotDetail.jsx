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

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (!card) return <div className="text-center mt-5">Cargando carta…</div>;

  return (
    <div className="container mt-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className="card shadow-lg">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
            <img
              src={card.arcaneImage?.imageSrc}
              alt={card.arcaneName}
              className="img-fluid rounded m-3"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{card.arcaneName}</h3>
              <p className="card-text">{card.arcaneDescription}</p>
              <hr />
            
            </div>
            <div>
               <h5>Diosa asociada</h5>
              <img
              src={card.goddessImage?.imageSrc}
              alt={card.goddessName}
              className="img-fluid rounded m-3"
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
              <p className="fw-bold">{card.goddessName}</p>
              <p>{card.goddessDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
