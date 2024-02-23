import React from 'react';
import "./Shop.css";
import userIcon from "../../assets/icons/user.png"
import shopImage1 from "../../assets/images/shop-image-1.jpeg";
import shopImage2 from "../../assets/images/images.jpeg";
import Backbtn from '../Backbtn/Backbtn'



function Shop(){
    return(

        <>
        <Backbtn/>
        <div className="shop-page">

            {/* Heading */}
            <div className="heading">
                <h1>Shop Details</h1>
                <p>Here you can view and edit your details.</p>
            </div>

            {/* Details-div - 1 */}
            <div className='shop-details-div'>
                <div className="image-section">
                    <img src={shopImage1} />
                </div>
            </div>

            {/* Details-div - 2 */}
            <div className='shop-details-div'>
                <div className='img-content-description'>
                    {/* Image */}
                    <div className='img-area'>
                        <img src={shopImage2} />
                    </div>

                    {/* Content */}
                    <div className='content-description'>
                        <h2 className='edit-profile-heading'>Edit Profile Image</h2>
                        <p className='edit-profile-description'>Browse your Gallery or take a Picture from the phone Camera to upload</p>
                    </div>
                </div>
            </div>


            {/* Section - 1 */}
            <div className='shop-section shop-section-1'>

                <div className="shop-container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <h2 className="content-heading">The Grocify</h2>
                            <p className="content-description">Shop Name</p>
                        </div>
                 </div>
            </div>



            {/* Section - 2 */}
            <div className='shop-section shop-section-2'>

               <p className="label-add-details">Additional Details</p>

                <div className="shop-container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <h2 className="content-heading">32-B Cannought Place</h2>
                            <p className="content-description">Address</p>
                        </div>
                 </div>

                 <div className="shop-container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <h2 className="content-heading">New Delhi</h2>
                            <p className="content-description">State</p>
                        </div>
                 </div>

                 <div className="shop-container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <h2 className="content-heading">Central Delhi</h2>
                            <p className="content-description">City</p>
                        </div>
                 </div>
            </div>

           {/* Section - 3 */}
           <div className='shop-section shop-section-3'>
               <p className="label-add-details">Services Details</p>
                <div className="shop-container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <h2 className="content-heading">Delivery, Dinning, WIFI etc.</h2>
                            <p className="content-description">Shop Services</p>
                        </div>
                 </div>
            </div>


            {/* Section - 4 */}
            <div className='shop-section shop-section-3'>
               <p className="label-add-details">Shop Photos</p>
                <div className="shop-container">
                        <div className="icon"><img src={userIcon}/></div>
                        <div className="container-content">
                            <h2 className="content-heading">Add Media/Photos</h2>
                            <p className="content-description">Shop Images & Catalogue</p>
                        </div>
                 </div>
            </div>

        </div>
        </>
    )    
}

export default Shop;