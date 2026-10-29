import { useEffect, useState } from "react";
import { sleep } from "../misc/sleep";
import type { Article } from "../types/Article";

export default function StockList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setErrorMsg("");
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
        <p>{errorMsg}</p>
      </div>
    </main>
  );
}
