import React from "react";
import "./SearchBar.css"
import bell from "../../assets/icons/bell.png"
import search from "../../assets/icons/search.png"
import user from "../../assets/icons/searchbar-user.png"




function SearchBar(){
    return(
        <div className="search-container">
        <div className="search-bar">
            <div className="search-icon"><img src={search}/></div>
            <input type="text" placeholder="Search"/>
        </div>
        <div className="s-icons">
            <div className="s-icon-1">
                <img src={bell} alt="bell icon"/>
            </div>
            <div className="s-icon-2">
                <img src={user} alt="profile"/>
            </div>
        </div>
    </div>
    )
}

export default SearchBar;

