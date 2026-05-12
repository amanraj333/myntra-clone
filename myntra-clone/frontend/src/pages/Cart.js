// import "./Cart.css";

// function Cart() {

//   const cart = JSON.parse(localStorage.getItem("cart")) || [];

//   const total = cart.reduce((acc, item) => acc + item.price, 0);

//   return (

//     <div className="cart-container">

//       <h2>My Cart</h2>

//       {
//         cart.length === 0 ? (
//           <p>Cart is Empty</p>
//         ) : (
//           cart.map((item) => (

//             <div className="cart-item" key={item.id}>

//               <img src={item.image} alt="" />

//               <div>
//                 <h3>{item.name}</h3>
//                 <p>₹{item.price}</p>
//               </div>

//             </div>

//           ))
//         )
//       }

//       <h2>Total: ₹{total}</h2>

//     </div>
//   );
// }


// export default Cart;

import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {

  const navigate = useNavigate();

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const total =
    cart.reduce((acc, item) => acc + item.price, 0);

  return (

    <div className="cart-container">

      <h2>Shopping Bag</h2>

      {
        cart.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
              onClick={() => navigate("/payment")}
            >

              <img src={item.image} alt="" />

              <div>

                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <p>Click To Proceed</p>

              </div>

            </div>

          ))
        )
      }

      <h2>Total: ₹{total}</h2>

    </div>
  );
}

export default Cart;