import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MyAppBar: React.FC = () => {
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
          <Button color="inherit" component={Link} to="/login">
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
