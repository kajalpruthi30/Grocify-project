import React from "react";
import "./Content.css"
import userIcon from "../../assets/icons/user.png"
import rightArrow from "../../assets/icons/right-arrow.png"
import { Link } from 'react-router-dom';



function Content(){
    return(
        <div className="content-page">

            {/* Heading */}
            <div className="heading">
                <h1>Settings</h1>
                <p>View settings and manage them.</p>
            </div>

            {/* Section one starts from here */}
            <div className="section section1">
                <p className="section1-label">Account</p>

                    {/* Profile Details Section*/}
                    <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">Profile Details</p>
                            <p className="content-description">Name, E-Mail, phone number & address</p>
                        </div>
                        <div className="arrow-btn"><Link to="/profile-details"><img src={rightArrow}/></Link></div>
                    </div>

                    {/* Shop Details Section*/}
                    <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">Shop Details</p>
                            <p className="content-description">Shop Address, Shop Categories etc</p>
                        </div>
                        <div className="arrow-btn"><Link to="/shop-details"><img src={rightArrow}/></Link></div>
                    </div>


                     {/*Wallet Section */}
                     <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">My Wallet</p>
                            <p className="content-description">Shop Address, Shop Categories etc</p>
                        </div>
                        <div className="arrow-btn"><img src={rightArrow}/></div>
                    </div> 
            </div>


            {/* Section two starts from here */}
            <div className="section section2">
                    {/* Refer and Earn Section*/}
                    <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">Refer & Earn</p>
                            <p className="content-description">Earn money through referrals</p>
                        </div>
                        <div className="arrow-btn"><img src={rightArrow}/></div>
                    </div>
            </div>


            {/* Section Third starts from here */}
            <div className="section section3">

                    {/* Rate Us Section*/}
                    <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">Rate Us</p>
                            <p className="content-description">How did you like using the website</p>
                        </div>
                        <div className="arrow-btn"><img src={rightArrow}/></div>
                    </div>

                    {/* About Section*/}
                    <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">About Gastos</p>
                            <p className="content-description">About us, Privacy Policy etc.</p>
                        </div>
                        <div className="arrow-btn"><img src={rightArrow}/></div>
                    </div>


                     {/*Wallet Section */}
                     <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">Help & Support</p>
                            <p className="content-description">Make greivance regarding an issue</p>
                        </div>
                        <div className="arrow-btn"><img src={rightArrow}/></div>
                    </div> 
            </div>
        </div>
    )
}

export default Content;