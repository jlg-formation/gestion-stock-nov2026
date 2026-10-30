import { Link } from "react-router";
import TBody from "../components/TBody";
import { useStockList } from "../misc/useStockList";
import { useArticleStore } from "../stores/ArticleStore";

export default function StockList() {
  const { articles, errorMsg, isPending } = useStockList();
  const { refresh } = useArticleStore();

  const handleRefresh = async () => {
    console.log("refresh");
    await refresh();
    console.log("refreshed");
  };

  return (
    <main>
      <h1>Liste du stock</h1>
      <div className="content">
        <nav>
          <button onClick={handleRefresh}>Rafraichir</button>
          <Link to="/stock/add" className="button">
            Ajouter
          </Link>
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
          <TBody isPending={isPending} articles={articles} />
        </table>

        <p>{errorMsg}</p>
      </div>
    </main>
  );
}
