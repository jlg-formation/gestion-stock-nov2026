import { Link } from "react-router";

export default function Home() {
  return (
    <main>
      <h1>Gérer efficacement votre stock</h1>
      <Link className="button" to="/stock">
        Voir le stock
      </Link>
    </main>
  );
}
