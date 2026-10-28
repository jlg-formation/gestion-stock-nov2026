import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <span>Gestion Stock</span>
    </header>
  );
}
