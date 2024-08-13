import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api";

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const isAuthenticated = await login(email, password);

    if (isAuthenticated) {
      setIsAuthenticated(true);
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
