import { useState } from "react";
import "./Auth.css";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if(name && email && password){

      localStorage.setItem("user", email);

      alert("Signup Successful");

      window.location.href = "/";
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="auth-container">

      <form className="auth-form" onSubmit={handleSignup}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

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

        <button type="submit">Signup</button>

        <p>
          Already have account?
          <a href="/login"> Login</a>
        </p>

      </form>

    </div>
  );
}

export default Signup;