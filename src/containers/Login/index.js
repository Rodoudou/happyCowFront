import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLoginSubmit = async e => {
    try {
      e.preventDefault();
      const response = await axios.post("", {
        email: email,
        password: password
      });
      if (response.data.token) {
        onLogin(response.data.token, response.data.account.username);
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="login-card">
        <div className="title">CONNEXION</div>
        <form onSubmit={handleLoginSubmit}>
          <p>Adresse email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
          <p>Mot de passe</p>
          <div className="flexForm">
            <input
              style={{ marginBottom: 10 }}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <input
              style={{
                backgroundColor: "#7C4EC4",
                color: "white",
                border: "none"
              }}
              value="Login"
              type="submit"
            />
          </div>

          {/*  <div class="line mt--2 mb--1">
            <div class="line--horizontal"></div>
            <div class="line__text">OR</div>
          </div> */}

          <p className="no-account">Vous n'avez pas de compte ?</p>
          <input
            style={{
              backgroundColor: "#333333",
              color: "white",
              border: "none"
            }}
            onClick={() => history.push("/sign_up")}
            value="Register"
            type="button"
          />
        </form>
      </div>
    </div>
  );
}
