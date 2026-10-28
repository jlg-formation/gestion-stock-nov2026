export default function Header() {
  return (
    <header>
      <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo" />
      <span>Gestion Stock</span>
    </header>
  );
}
