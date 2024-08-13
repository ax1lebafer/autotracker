import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "/api/session",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: email,
            password: password,
          },
        }
      );

      if (response.status === 200) {
        navigate("/");
        setIsAuthenticated(true);
      } else {
        setError("Ошибка авторизации");
      }
    } catch (error) {
      setError("Ошибка авторизации");
      console.error("Login error:", error);
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
