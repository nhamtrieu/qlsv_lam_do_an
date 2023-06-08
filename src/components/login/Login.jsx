import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Groups from "../group/Groups"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác");
    }
  };

  if (isLoggedIn) {
    return (
      <NavLink to="groups" end>
        <Groups />
      </NavLink>
    )
  }

  return (
    <Container maxWidth="sm">
      <h1>Trang đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Tên đăng nhập"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mật khẩu"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          type="password"
        />
        <Button variant="contained" color="primary" type="submit">
          Đăng nhập
        </Button>
      </form>
    </Container>
  );
};

export default Login;
