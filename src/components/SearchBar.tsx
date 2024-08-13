import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (id: number) => void;
  onReset: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onReset }) => {
  const [searchId, setSearchId] = useState<number | "">();

  const handleSearch = () => {
    if (searchId !== "") {
      onSearch(Number(searchId));
    }
  };

  const handleReset = () => {
    setSearchId("");
    onReset();
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
      <TextField
        label="Search by ID"
        variant="outlined"
        value={searchId}
        onChange={(e) =>
          setSearchId(e.target.value === "" ? "" : Number(e.target.value))
        }
        type="number"
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ ml: 2 }}
      >
        Search
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleReset}
        sx={{ ml: 2 }}
      >
        Reset
      </Button>
    </Box>
  );
};

export default SearchBar;
