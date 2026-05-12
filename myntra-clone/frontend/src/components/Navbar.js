import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Myntra Clone</h2>

      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Beauty</li>
      </ul>

      <input type="text" placeholder="Search products" />
    </nav>
  );
}

export default Navbar;