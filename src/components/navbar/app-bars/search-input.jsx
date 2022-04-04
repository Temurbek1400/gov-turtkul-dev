import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./app-bar.styles";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
   return (
      <Search>
         <SearchIconWrapper>
            <SearchIcon />
         </SearchIconWrapper>
         <StyledInputBase
            placeholder="izlash..."
            inputProps={{ "aria-label": "search" }}
         />
      </Search>
   );
};

export default SearchInput;
