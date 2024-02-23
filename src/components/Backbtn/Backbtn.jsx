import React from "react";
import "./Backbtn.css";
import backbtn from "../../assets/icons/backbtn.png"
import { Link } from 'react-router-dom';

function Backbtn(){
    return(
        <span className="backbtn">
            <Link to="/"><img src={backbtn}/></Link>
        </span>
    )
}

export default Backbtn;