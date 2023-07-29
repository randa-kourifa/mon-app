import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../app/ApiSlice";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation] = useLoginMutation();
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };

    loginMutation(userCredentials)
      .then((response) => {
        const token = response.token;
        console.log("Login successful. Token:", token);

        // Here you can add the logic to store the token in your application, e.g., in localStorage or cookies.

        // Redirect the user based on the role after successful login
        if (response.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div
        style={{
          display: "flex",
          marginTop: 25,
          justifyContent: "flex-end",
        }}
      >
        <button className="Button blue" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
