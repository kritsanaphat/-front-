import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

    return(
        <div class="navbar">
            <div class="content2">
                <div class="link-page">
                    <Link to="/" >HOME</Link>
                </div>
                <div class="link-page">
                    <Link to="/typeofgame" >TYPE OF GAME</Link>
                </div>
                <div class="link-page">
                    <Link to="/contact" >CONTACT</Link>
                </div>
            </div>

        </div>
    );

}
export default Navbar