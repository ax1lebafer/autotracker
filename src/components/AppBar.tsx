import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MyAppBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/home"
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
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
