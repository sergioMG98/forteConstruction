import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import './home.scss';
import Footer from "../../components/footer/footer";

export default function Home(){

    const [homePicture, setHomePictures] = useState();
    const [pictureNumber, setPictureNumber ] = useState(0);

    let sizePage;
    let page;

    // navbar effect
    window.onscroll = function() {
        // taille visible de l'ecran
        let sizeWindowHeight = window.innerHeight;
        let totalHeight = sizePage - sizeWindowHeight;
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        console.log('progressHeight', progressHeight);

        let navbarHeader = document.querySelector('.homePage header');
        if (progressHeight != 0) {
            navbarHeader.classList.add("navbarFixed");
        } else {
            navbarHeader.classList.remove("navbarFixed");
        }
    }

    // récupération des images
    const getPicturesProject = async() => {
        
        try {
            const response = await fetch('http://127.0.0.1:8000/api/homePicture');
            const data = await response.json();

            if (data.status == 200) {
                setHomePictures(data.pictures);
            }
        } catch (error) {
            console.log("recup error", error);
        }
    }

    // scroll les images
    const slidePictures = (value) => {
        if (value == 'left') {
            if (pictureNumber == 0) {
                setPictureNumber(homePicture.length - 1);
            } else {
                setPictureNumber(pictureNumber - 1);
            }
            
        } else {

            if (pictureNumber == homePicture.length - 1) {
                setPictureNumber(0);
            } else {
                setPictureNumber(pictureNumber + 1);
            }
        }
    }

    // récupére les donnée obligatoir pour l'effet de la navbar
    useEffect(() => {
        page = document.querySelector('.homePage');
        sizePage = page.scrollHeight;
    });

    // active fonction 
    useEffect(() => {
        getPicturesProject();
    }, []);

    
    return (
        <div className="homePage">
            <header>
                <Navbar/>
            </header>

            <main>
                <section className="slidersContainer">
                    {
                        homePicture != undefined ?
                            <img src={homePicture[pictureNumber]} alt="" />
                        : null
                    }

                    <button type="button" className="left" onClick={() => slidePictures("left")} >{"<"}</button>
                    <button type="button" className="right" onClick={() => slidePictures("right")}>{">"}</button>
                    
                </section>

                <section className="presentation">
                    <div className="summary">
                        <p><strong>Forte Construction</strong> est une Entreprise Générale de Bâtiment basée à Monaco, ayant acquis 25 années d’expérience dans l’ensemble des métiers de la construction et de la rénovation sur la Côte d’Azur et la Principauté.</p>
                        <p>Forte d’une équipe de 70 collaborateurs salariés, dont la majorité présente depuis sa création, la société GP CONSTRUCTION a su s’entourer de partenaires fidèles hautement qualifiés complétant ainsi le panel de ses activités.</p>
                        <p>Soucieuse d’apporter à ses clients un service de qualité, notre équipe de professionnels met en permanence son expérience et son savoir-faire pour vous conseiller et vous accompagner dans la réalisation de tous projets et travaux neufs ou de rénovation allant des plus simples aux plus complexes.</p>
                        <p>Evoluant essentiellement auprès d’une clientèle internationale exigeante, nous les accompagnons durant toutes les phases de développement et de réalisation de leur projet, et entretenons une relation de confiance et un suivi qui va bien au-delà de la livraison.</p>
                        <p>La satisfaction du travail bien fait est notre priorité afin que vos rêves n’aient pas de limites.</p>
                    </div>
                </section>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}