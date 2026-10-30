import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import type { Article } from "../types/Article";
import { useState } from "react";

export interface TBodyProps {
  isPending: boolean;
  articles: Article[];
  onSelectionChange: (selectedArticleIds: Set<Article["id"]>) => void;
}

export default function TBody({ isPending, articles, onSelectionChange }: TBodyProps) {
  const [selectedArticleIds, setSelectedArticleIds] = useState(new Set<Article["id"]>());

  const handleSelect = (articleId: Article["id"]) => () => {
    console.log("select", articleId);
    if (selectedArticleIds.has(articleId)) {
      selectedArticleIds.delete(articleId);
    } else {
      selectedArticleIds.add(articleId);
    }
    const newSelection = new Set(selectedArticleIds);
    setSelectedArticleIds(newSelection);
    onSelectionChange(newSelection);
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
