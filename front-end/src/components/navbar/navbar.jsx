import {Link} from "react-router-dom";
import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {

    const menuBurger = () => {
        let navbar = document.querySelector('.navbar');
        let navbar_active = document.querySelector('.navbar.active');

        if(navbar_active == null) {
            navbar.classList.add('active');
        } else {
            navbar.classList.remove('active');
        }

    }


    return (
        <div className="navbar">

            <div className="navbar_logo">
                Forte Construction
            </div>

            <div className="burgerMenu" onClick={menuBurger}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className="navbar_links">
                <Link to={"/"}>home</Link>
                <Link to={"/about"}>about us</Link>
                <Link to={"/achievements"}>our achievements</Link>
                <Link to={"/contact"}>contact</Link>
            </nav>
        </div>
    )
}