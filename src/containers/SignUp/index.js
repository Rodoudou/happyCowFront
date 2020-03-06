import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./SignUp.css";

export default function SignUp({ onLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const handleSignupSubmit = async e => {
    try {
      e.preventDefault();
      if (!username || !email || !password || !confirmPassword) {
        alert("Veuillez remplir tous les champs");
      } else if (password !== confirmPassword) {
        alert("Vos mots de passe ne sont pas identiques");
      } else {
        const response = await axios.post(
          "http://localhost:8000/user/sign_up",
          {
            email: email,
            username: username,
            password: password
            /*  confirmPassword: confirmPassword */
          }
        );
        console.log(response.data);

        if (response.data.token) {
          onLogin(response.data.token, response.data.account.username);
          history.push("/");
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className="content-signup"
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div className="title">CRÉER UN COMPTE</div>
      <div className="signup-card">
        <form className="form-SignUp" onSubmit={handleSignupSubmit}>
          <input
            type="text"
            placeholder="Pseudo *"
            onChange={e => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Adresse email *"
            onChange={e => setEmail(e.target.value)}
          />
          <div className="password-and-confirm">
            <div>
              <input
                type="password"
                placeholder="Mot de passe *"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirmer le mot de passe *"
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <input
            className="creat_compte"
            value="Créer mon Compte Personnel"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
