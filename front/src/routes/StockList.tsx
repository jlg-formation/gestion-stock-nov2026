import type { Article } from "../types/Article";

const articles: Article[] = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 1234 },
  { id: "a2", name: "Pelle", price: 12.99, qty: 123 },
  { id: "a3", name: "Pioche", price: 2, qty: 12 },
];

export default function StockList() {
  return (
    <main>
      <h1>Liste du stock</h1>
      <div className="content">
        <nav>
          <button>Rafraichir</button>
          <button>Ajouter</button>
          <button>Supprimer</button>
        </nav>
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((a) => (
              <tr key={a.id}>
                <td className="name">{a.name}</td>
                <td className="price">{a.price} €</td>
                <td className="qty">{a.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
