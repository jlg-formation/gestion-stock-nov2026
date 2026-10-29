import { Link } from "react-router";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
        <span>Gestion Stock</span>
      </Link>
    </header>
  );
}
