import lg from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={lg} alt="logo" />
      <ul>
        <li>Home</li>
      </ul>
    </header>
  );
}
