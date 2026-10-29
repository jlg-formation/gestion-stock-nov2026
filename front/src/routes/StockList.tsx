import { useEffect, useState } from "react";
import { sleep } from "../misc/sleep";
import type { Article } from "../types/Article";
import TBody from "../components/TBody";

export default function StockList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setErrorMsg("");
        setIsPending(true);
        console.log("loading articles...");
        await sleep(2000);
        const response = await fetch("/api/articles", {
          signal: controller.signal,
        });
        if (response.ok === false) {
          throw new Error();
        }
        const json = await response.json();
        console.log("json: ", json);
        setArticles(json);
      } catch (err) {
        if (controller.signal.aborted) {
          console.log("requete interrompue");
          return; // Annulation normale, pas une erreur
        }
        console.log("err: ", err);
        setErrorMsg("Erreur Technique (chargement des articles impossible)");
        setArticles([]);
      } finally {
        setIsPending(false);
      }
    };

    load();

    return () => {
      console.log("nettoyage de l'effect");
      // controller.abort();
    };
  }, []);

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
          <TBody isPending={isPending} articles={articles} />
        </table>

        <p>{errorMsg}</p>
      </div>
    </main>
  );
}
