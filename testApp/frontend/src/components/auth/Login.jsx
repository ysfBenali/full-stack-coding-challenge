import React, { useState } from "react";
import { useForm } from "../../custom-hooks/useForm";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../helpers/axios";

const Login = () => {
  const [credentials, handleChange] = useForm({ username: "", password: "" });
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/login", credentials)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        history.push(`/dashboard`);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
