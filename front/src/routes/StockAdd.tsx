export default function StockAdd() {
  return (
    <main>
      <h1>Ajout d'un article</h1>
      <form>
        <div>
          <label htmlFor="idNom">Nom</label>
          <input type="text" id="idNom" />
        </div>
        <div>
          <label htmlFor="idPrice">Prix</label>
          <input type="text" id="idPrice" />
        </div>
        <div>
          <label htmlFor="idQty">Quantité</label>
          <input type="text" id="idQty" />
        </div>
        <button>Ajouter</button>
      </form>
    </main>
  );
}
