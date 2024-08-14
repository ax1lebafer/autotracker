import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as apiLogin } from "../api/api";
import { useAppDispatch } from "../hooks/hooks";
import { login } from "../store/features/features";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const isAuthenticated = await apiLogin(email, password);

    if (isAuthenticated) {
      dispatch(login());
      navigate("/");
    } else {
      setError("Ошибка авторизации");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Email"
        value={email}
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        variant="outlined"
        margin="normal"
        fullWidth
        onChange={(event) => setPassword(event.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
      >
        Войти
      </Button>
    </Box>
  );
};

export default Login;
