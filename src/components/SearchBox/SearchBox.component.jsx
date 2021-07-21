import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import searchBoxStyle from "./SearchBox.style";

const SearchBox = ({ placeholder, handleChange }) => {
  const classes = searchBoxStyle();
  return (
    <div className={classes.searchBoxWrapper}>
      <TextField
        className={classes.searchInput}
        id="outlined-basic"
        label="Search pokemon"
        variant="outlined"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <SearchIcon
        className={classes.searchIcon}
        fontSize="large"
        color="primary"
      />
    </div>
  );
};

export default SearchBox;