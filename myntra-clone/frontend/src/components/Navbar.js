// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2>Myntra Clone</h2>

//       <ul>
//         <li>Men</li>
//         <li>Women</li>
//         <li>Kids</li>
//         <li>Beauty</li>
//       </ul>

//       <input type="text" placeholder="Search products" />
//     </nav>
//   );
// }

// export default Navbar;

// import "./Navbar.css";

// function Navbar() {

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     window.location.href = "/login";
//   };

//   return (

//     <nav className="navbar">

//       <h2>Myntra Clone</h2>

//       <ul>
//         <li>Men</li>
//         <li>Women</li>
//         <li>Kids</li>
//         <li>Beauty</li>
//       </ul>

//       <div>

//         <input type="text" placeholder="Search products" />

//         <button onClick={handleLogout}>
//           Logout
//         </button>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const handleLogout = () => {

    localStorage.removeItem("user");

    window.location.href = "/login";
  };

  return (

    <nav className="navbar">

      <h2>Myntra Clone</h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/men">Men</Link>
        </li>

        <li>
          <Link to="/women">Women</Link>
        </li>

        <li>
          <Link to="/kids">Kids</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>

      </ul>

      <div>

        <input
          type="text"
          placeholder="Search"
        />

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;