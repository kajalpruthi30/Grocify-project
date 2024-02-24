import React from "react";
import "./Header.css"
import bellIcon from "../../assets/bell.png";
import menuIcon from "../../assets/menu-icon.png";
import dropdownIcon from "../../assets/drop-down.png";


function Header(){
    return(
        <div className="header">

            <div className="header-component-1">
                <div className="menu-icon"><img src={menuIcon}/></div>
                <div className="heading"><p>GROCIFY</p></div>
            </div>

            <div className="header-component-2">
                <div className="bell-icon"><img src={bellIcon}/></div>
                <div className="component-2-content">
                    <div className="user-name"><p>username</p></div>
                    <div className="drop-down"><img src={dropdownIcon}/></div>
                </div>
            </div>
        </div>
    )
}

export default Header;