import "./LogandSign.css";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { signUp } from "../../firebase";
import { logIn } from "../../firebase";
import spinner from "../../assets/netflix_spinner.gif";
function LogandSign() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function auth_user(e) {
    e.preventDefault();
    console.log("Setting loading to true");
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await logIn(email, password);
      } else {
        await signUp(name, email, password);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Setting loading to false");
      setLoading(false);
    }
  }

  return loading ? (
    <div className="spinner">
      <img src={spinner} alt="loading spinner" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="logo" className="logo" />
      <div className="contents">
        <h2>{signState === "Sign In" ? signState : "Sign Up"}</h2>
        <div className="inputs">
          {signState === "Sign In" ? null : (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={auth_user}>
          {signState === "Sign In" ? signState : "Sign Up"}
        </button>
        {signState === "Sign In" ? (
          <p>
            New to Netflix?{" "}
            <a onClick={() => setSignState("Sign Up")}>Sign Up</a>
          </p>
        ) : (
          <p>
            Existing to Netflix?{" "}
            <a onClick={() => setSignState("Sign In")}>Sign In</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default LogandSign;
