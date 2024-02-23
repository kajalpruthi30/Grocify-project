import React from 'react'
import "./Profile.css"
import userIcon from "../../assets/icons/user.png"
import Backbtn from '../Backbtn/Backbtn'

function Profile(){
    return(

    <>
        <Backbtn/>
        <div className="content-page">
            {/* Heading */}
            <div className="heading">
                <h1>Profile Details</h1>
                <p>Here you can view and edit your details.</p>
            </div>

            {/* Section one starts from here */}
            <div className="section profile-section">

                    {/* Profile Details Section*/}
                    <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">Rahul Grewal</p>
                            <p className="content-description">Owner Name</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">XXXXXXXXX</p>
                            <p className="content-description">Phone Number</p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <p className="content-heading">rahulgrewal@gmail.com</p>
                            <p className="content-description">E-Mail Address</p>
                        </div>
                    </div>
            </div>

                {/* Guided Section */}

            <div className="section">    
                {/* <div className="container"> */}
                    <div className="container-content guide-content">
                        <p className="content-description">Guided By</p>
                        <button className='validate-btn'>Validate</button>
                    </div>
                {/* </div> */}
            </div>
        </div>
        </>
    )
    
}

export default Profile;