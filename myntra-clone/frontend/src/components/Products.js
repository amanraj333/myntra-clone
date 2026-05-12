// import "./Products.css";

// const products = [
//   {
//     id: 1,
//     name: "T-Shirt",
//     price: "₹999",
//     image: "https://picsum.photos/200?1"
//   },
//   {
//     id: 2,
//     name: "Shoes",
//     price: "₹1999",
//     image: "https://picsum.photos/200?2"
//   },
//   {
//     id: 3,
//     name: "Watch",
//     price: "₹2999",
//     image: "https://picsum.photos/200?3"
//   }
// ];

// function Products() {
//   return (
//     <div className="products">
//       {products.map((item) => (
//         <div className="card" key={item.id}>
//           <img src={item.image} alt="" />
//           <h3>{item.name}</h3>
//           <p>{item.price}</p>
//           <button>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
import "./Products.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div className="products">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={`https://picsum.photos/200?random=${item.id}`}
            alt=""
          />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Products;