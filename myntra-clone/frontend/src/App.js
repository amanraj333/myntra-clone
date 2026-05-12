// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Products from "./components/Products";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Products />
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Products from "./components/Products";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Products />
//     </>
//   );
// }

// function App() {

//   const user = localStorage.getItem("user");

//   return (

//     <BrowserRouter>

//       <Routes>

//         <Route
//           path="/"
//           element={
//             user ? <Home /> : <Navigate to="/login" />
//           }
//         />

//         <Route path="/login" element={<Login />} />

//         <Route path="/signup" element={<Signup />} />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
import Payment from "./pages/Payment";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <Products category="all" />
    </>
  );
}

function Men() {

  return (
    <>
      <Navbar />
      <Products category="men" />
    </>
  );
}

function Women() {

  return (
    <>
      <Navbar />
      <Products category="women" />
    </>
  );
}

function Kids() {

  return (
    <>
      <Navbar />
      <Products category="kids" />
    </>
  );
}

function CartPage() {

  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
}

function App() {

  const user = localStorage.getItem("user");

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            user ? <Home /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/men"
          element={
            user ? <Men /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/women"
          element={
            user ? <Women /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/kids"
          element={
            user ? <Kids /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/cart"
          element={
            user ? <CartPage /> : <Navigate to="/login" />
          }
        />
        <Route
         path="/payment"
        element={
          user ? <Payment /> : <Navigate to="/login" />
        }
/>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;