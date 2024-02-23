import React from "react";
import Content from "../Content/Content"
import Sidebar from "../Sidebar/Sidebar"
import SearchBar from "../SearchBar/SearchBar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "../Profile/Profile";
import Shop from "../Shop/Shop";
import "./Main.css"

function Main(){
    return(
        
        <Router>
            <div className="main-page">
                <Sidebar/>
                <div className="searchbar-content-container">
                    <SearchBar/>
                    <Routes>
                        <Route path="/" element={<Content />} />
                        <Route path="/profile-details" element={<Profile />} />
                        <Route path="/shop-details" element={<Shop />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Main;

