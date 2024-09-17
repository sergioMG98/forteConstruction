import { Link } from "react-router-dom";
import "./navbarConnected.scss";
import { useEffect } from "react";

export default function NavbarConnected() {

    return (
        <div className="navbarConnected">
        
        <div className="burgerMenu" /* onClick={menuBurger} */>
                <span></span>
                <span></span>
                <span></span>
        </div>
        
        <nav>
            <div className="links">
                <Link to={"/connectedProfil"}><span>Profil</span>   <img src="public/connectedNavbar/profile.png" alt="" /> </Link>
                <Link to={"/connectedHome"}><span>Home</span></Link>
                <Link to={"/connectedProject"}><span>Projets</span>  <img src="public/connectedNavbar/projet.png" alt="" /></Link>
                <Link to={"/connectedEmployee"}><span>Employers</span><img src="public/connectedNavbar/employes.png" alt="" /></Link>
                <Link to={"/connectedCustomer"}><span>Clients</span>  <img src="public/connectedNavbar/clients.png" alt="" /></Link>
            </div>

            <div className="logoutLink">
                <Link><span>Déconnexion</span> <img src="public/connectedNavbar/se-deconnecter.png" alt="" /> </Link>
            </div>
            
        </nav>

        </div>
    )
}