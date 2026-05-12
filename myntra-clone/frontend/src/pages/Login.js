import { useState } from "react";
import "./Auth.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(email && password){
      localStorage.setItem("user", email);
      window.location.href = "/";
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="auth-container">

      <form className="auth-form" onSubmit={handleLogin}>

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account?
          <a href="/signup"> Signup</a>
        </p>

      </form>

    </div>
  );
}

export default Login;