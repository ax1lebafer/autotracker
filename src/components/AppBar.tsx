import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/features/features";
import { useAppDispatch } from "../hooks/hooks";

const MyAppBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          AutoTracker
        </Typography>
        <Box sx={{ ml: "auto", display: "flex" }}>
          <Button color="inherit" component={Link} to="/devices">
            Devices
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
