import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  console.log("Home...");
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>Gérer efficacement votre stock</h1>
      <Link className="button" to="/stock">
        <span>Voir le stock</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </Link>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </main>
  );
}
