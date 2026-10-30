import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import type { Article } from "../types/Article";
import { useState } from "react";

export interface TBodyProps {
  isPending: boolean;
  articles: Article[];
}

export default function TBody({ isPending, articles }: TBodyProps) {
  const [selectedArticleIds, setSelectedArticleIds] = useState(new Set<Article["id"]>());
  const handleSelect = (articleId: Article["id"]) => () => {
    console.log("select", articleId);
    if (selectedArticleIds.has(articleId)) {
      selectedArticleIds.delete(articleId);
      setSelectedArticleIds(new Set(selectedArticleIds));
      return;
    }
    setSelectedArticleIds(new Set(selectedArticleIds.add(articleId)));
  };

  return (
    <tbody>
      {isPending ? (
        <tr>
          <td colSpan={3}>
            <div className="pending">
              <FontAwesomeIcon icon={faCircleNotch} spin />
              <span>Chargement ...</span>
            </div>
          </td>
        </tr>
      ) : (
        articles.map((a) => (
          <tr
            key={a.id}
            onClick={handleSelect(a.id)}
            className={selectedArticleIds.has(a.id) ? "selected" : ""}
          >
            <td className="name">{a.name}</td>
            <td className="price">{a.price} €</td>
            <td className="qty">{a.qty}</td>
          </tr>
        ))
      )}
    </tbody>
  );
}
