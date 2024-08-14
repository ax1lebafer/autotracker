import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h3" gutterBottom>
        404 - Страница не найдена
      </Typography>
      <Typography variant="body1" gutterBottom marginBottom={3}>
        Страница, которую вы ищете, не существует.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
