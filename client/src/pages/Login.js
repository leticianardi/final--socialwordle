import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/Login.css";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main>
      <div>
        <div className="title">
          <h3>Login</h3>
        </div>

        <div className="form-inputs">
          <form onSubmit={handleFormSubmit}>
            <input
              placeholder="Your e-mail"
              name="email"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleChange}
            ></input>
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            ></input>
            <button type="submit">Submit</button>
          </form>
          {error && <div>Login failed</div>}
        </div>
      </div>
    </main>
  );
};

export default Login;
