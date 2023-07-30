// Import des dépendances nécessaires
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../app/ApiSlice";
import "./Login.css";
function Signup() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const [signupMutation] = useSignupMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      role,
      first_name,
      last_name,
      email,
      password,
    };
    //const isAdmin = role === "admin";
    signupMutation(newUser)
      .then((response) => {
        //   console.log("Utilisateur enregistré :", response);
        //   if (isAdmin) {
        //     navigate("/admin");
        //   } else {
        //     navigate("/");
        //   }
        // })
        localStorage.setItem("user", JSON.stringify(response.data.user));
        if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'enregistrement de l'utilisateur :",
          error
        );
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="firstName">
          First Name
        </label>
        <input
          className="Input"
          type="text"
          name="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="Input"
          type="text"
          name="lastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="email">
          Email
        </label>
        <input
          className="Input"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="password">
          Password
        </label>
        <input
          className="Input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="role">
          Role
        </label>
        <select
          className="Input"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select a role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </fieldset>

      <div
        style={{
          display: "flex",
          marginTop: 25,
          justifyContent: "flex-end",
        }}
      >
        <button className="Button green" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Signup;
