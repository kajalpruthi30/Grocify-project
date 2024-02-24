import React from 'react';
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"
import Merchants from "../Merchants/Merchants"
import EditMerchants from  "../EditMerchants/EditMerchants"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Main.css"



function Main(){
    return(
        <Router>
            <div className="main-page">
                <Sidebar/>
                <div className="header-content-container">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Merchants />} />
                        <Route path="/edit-merchants" element={<EditMerchants />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default Main;