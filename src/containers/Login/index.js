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
      const response = await axios.post("http://localhost:8000/user/log_in", {
        email: email,
        password: password
      });
      console.log("kikou", email, password);
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
      <h3 className="title"> Login to Your Account</h3>
      <div className="login-card">
        <form className="form" onSubmit={handleLoginSubmit}>
          <input
            placeholder="Adresse email"
            type="text"
            onChange={e => setEmail(e.target.value)}
          />

          <div className="flexForm">
            <input
              className="email-input"
              placeholder="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <input className="login-input" value="Login" type="submit" />
          </div>

          <p className="no-account">Vous n'avez pas de compte ?</p>
          <input
            className="register-input"
            onClick={() => history.push("/sign_up")}
            value="Register"
            type="button"
          />
        </form>
      </div>
    </div>
  );
}
