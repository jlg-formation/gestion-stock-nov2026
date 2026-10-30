import { Link } from "react-router";
import TBody from "../components/TBody";
import { useStockList } from "../misc/useStockList";
import { useArticleStore } from "../stores/ArticleStore";
import type { Article } from "../types/Article";
import { useState } from "react";

export default function StockList() {
  const { articles, errorMsg, isPending } = useStockList();
  const { refresh, remove } = useArticleStore();
  const [selectedArticleIds, setSelectedArticleIds] = useState<Set<Article["id"]>>(new Set());

  const handleRefresh = async () => {
    console.log("refresh");
    await refresh();
    console.log("refreshed");
  };

  const handleDelete = async () => {
    console.log("selectedArticlesIds: ", selectedArticleIds);
    await remove(selectedArticleIds);
    setSelectedArticleIds(new Set());
    await refresh();
  };

  const handleSelection = (s: Set<Article["id"]>) => {
    console.log("handleSelection: selectedArticleIds: ", s);
    setSelectedArticleIds(s);
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
          <button onClick={handleDelete}>Supprimer</button>
        </nav>
        <table>
          <thead>
            <tr>
              <th className="name">Nom</th>
              <th className="price">Prix</th>
              <th className="qty">Quantité</th>
            </tr>
          </thead>
          <TBody isPending={isPending} articles={articles} onSelectionChange={handleSelection} />
        </table>

        <p>{errorMsg}</p>
      </div>
    </main>
  );
}
