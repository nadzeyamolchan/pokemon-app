import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import './search-box.style.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <div className="search-wrapper">
        <input className='search' type='search' placeholder={placeholder} onChange={handleChange}/>
        <SearchIcon fontSize="large" color="primary"/>
    </div>
)