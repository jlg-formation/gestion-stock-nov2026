import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main>
      <h1>Gérer efficacement votre stock</h1>
      <Link className="button" to="/stock">
        <span>Voir le stock</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </main>
  );
}
