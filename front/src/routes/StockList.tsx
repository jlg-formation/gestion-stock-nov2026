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
            <tr>
              <td className="name">Tournevis</td>
              <td className="price">4,50 €</td>
              <td className="qty">12</td>
            </tr>
            <tr>
              <td className="name">Pelle</td>
              <td className="price">14,50 €</td>
              <td className="qty">123</td>
            </tr>
            <tr>
              <td className="name">Pioche</td>
              <td className="price">22,00 €</td>
              <td className="qty">5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
