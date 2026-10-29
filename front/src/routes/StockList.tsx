import { Link } from "react-router";
import TBody from "../components/TBody";
import { useArticleStore } from "../stores/ArticleStore";
import { useEffect } from "react";

export default function StockList() {
  const myRefresh = useArticleStore((state) => state.refresh);
  const { articles, isPending, errorMsg } = useArticleStore();

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      await myRefresh(controller);
      console.log("fini");
    };
    load();

    return () => {
      controller.abort();
    };
  }, [myRefresh]);

  return (
    <main>
      <h1>Liste du stock</h1>
      <div className="content">
        <nav>
          <button>Rafraichir</button>
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
