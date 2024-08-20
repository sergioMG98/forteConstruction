import { Link } from "react-router-dom";
import './footer.scss';

export default function Footer() {
    return (
        <div className="footer">
            <div className="utilityLinks">
                <h4>liens utiles</h4>

                <Link to={"/"}>contact</Link>
                <Link to={"/"}>carrières</Link>
            </div>

            <div className="socialMediaContainer">
                <h4>suivez-nous</h4>

                <div className="links">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="public/socialMedia/facebook.png" alt="" />
                    </a>

                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="public/socialMedia/linkedin.png" alt="" />
                    </a>

                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="public/socialMedia/twitter.png" alt="" />
                    </a>

                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src="public/socialMedia/instagram.png" alt="" />
                    </a>
                </div>

            </div>

            <div className="informationWeb">
                <h4>information sur le site</h4>
            </div>
        </div>
    )
}