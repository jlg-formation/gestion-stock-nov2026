import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import type { Article } from "../types/Article";

export interface TBodyProps {
  isPending: boolean;
  articles: Article[];
}

export default function TBody({ isPending, articles }: TBodyProps) {
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
          <tr key={a.id}>
            <td className="name">{a.name}</td>
            <td className="price">{a.price} €</td>
            <td className="qty">{a.qty}</td>
          </tr>
        ))
      )}
    </tbody>
  );
}
