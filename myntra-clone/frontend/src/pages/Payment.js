import "./Payment.css";

function Payment() {

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const total =
    cart.reduce((acc, item) => acc + item.price, 0);

  const placeOrder = () => {

    alert("Order Placed Successfully");

    localStorage.removeItem("cart");

    window.location.href = "/";
  };

  return (

    <div className="payment-page">

      <div className="left-section">

        <h2>Delivery Address</h2>

        <div className="address-box">

          <p><strong></strong></p>

          <p></p>

          <p>India - </p>

          <p>Phone: </p>

        </div>

        <h2>Select Payment Method</h2>

        <div className="payment-methods">

          <label>
            <input type="radio" name="payment" />
            UPI Payment
          </label>

          <label>
            <input type="radio" name="payment" />
            Credit/Debit Card
          </label>

          <label>
            <input type="radio" name="payment" />
            Cash On Delivery
          </label>

        </div>

      </div>

      <div className="right-section">

        <h2>Price Details</h2>

        <div className="price-box">

          <div className="price-row">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="price-row">
            <span>Total Amount</span>
            <span>₹{total}</span>
          </div>

          <div className="price-row">
            <span>Delivery Fee</span>
            <span>FREE</span>
          </div>

          <hr />

          <div className="price-row total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button onClick={placeOrder}>
            PLACE ORDER
          </button>

        </div>

      </div>

    </div>
  );
}

export default Payment;