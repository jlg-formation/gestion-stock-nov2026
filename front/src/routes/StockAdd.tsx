import { useId, useState } from "react";
import { useNavigate } from "react-router";

export default function StockAdd() {
  const nameId = useId();
  const priceId = useId();
  const qtyId = useId();

  const [name, setName] = useState("Truc");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();

  return (
    <main>
      <h1>Ajout d'un article</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("event: ", event);
          // adding article to the database

          navigate("/stock");
        }}
      >
        <div>
          <label htmlFor={nameId}>Nom</label>
          <input type="text" id={nameId} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor={priceId}>Prix</label>
          <input
            type="number"
            id={priceId}
            min={0}
            step={0.01}
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor={qtyId}>Quantité</label>
          <input
            type="number"
            id={qtyId}
            min={0}
            step={1}
            value={qty}
            onChange={(e) => setQty(parseInt(e.target.value))}
          />
        </div>
        <button>Ajouter</button>
      </form>
    </main>
  );
}
