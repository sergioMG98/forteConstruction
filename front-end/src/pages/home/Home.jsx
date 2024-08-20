import { useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import './home.scss';
import Footer from "../../components/footer/footer";

export default function Home(){

    let sizePage;
    let page;

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

    useEffect(() => {
        page = document.querySelector('.homePage');
        sizePage = page.scrollHeight;
    })


    return (
        <div className="homePage">
            <header>
                <Navbar/>
            </header>

            <main>
                <section className="slidersContainer">
                    <h1>slider</h1>
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