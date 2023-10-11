import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigator = useNavigate();
  let message = "";

  const handleClick = (e) => {
    e.preventDefault();
    console.log(password.length);
    navigator("/");
  };

  return (
    <form>
      <label htmlFor="uname">Username </label>
      <br />
      <input
        type="text"
        id="uname"
        name="username"
        placeholder="username"
        autoComplete="on"
        autoFocus
        required
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <label htmlFor="pass">Password </label>
      <br />
      <input
        type="password"
        id="pass"
        name="password"
        placeholder="password"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <span>{message}</span>
      <br />
      <button onClick={handleClick}>Login</button>
      <p>
        don't have an account yet? <Link to="/user/signup">Create an account</Link>{" "}
      </p>
    </form>
  );
};

export default Login;
