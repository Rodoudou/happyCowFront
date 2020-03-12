import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./Login.css";

export default function Login({ onLogin }) {
  /*   console.log("user in login", user);
  console.log("SetUser in login", setUser); */

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async e => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:8000/user/log_in", {
        email: email,
        password: password
      });
      console.log("response.data in login", response.data);
      if (response.data.token) {
        onLogin(response.data.token, response.data.account.username);
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="content-login">
      <h2 className="title"> Login to Your Account</h2>
      <div className="login-card">
        <form className="form" onSubmit={handleLoginSubmit}>
          <input
            placeholder="Adresse email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className="flexForm">
            <input
              className="password-input"
              placeholder="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input className="login-input" value="Login" type="submit" />
          </div>
          <hr className="separateur--bas" />
          <p className="no-account">Vous n'avez pas de compte ?</p>

          <input
            className="register-input"
            onClick={() => history.push("/sign_up")}
            value="Créer un compte"
            type="button"
          />
        </form>
      </div>
    </div>
  );
}
