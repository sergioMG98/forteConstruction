import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import './about.scss';

export default function About() {

    let itemContainer;
    

    window.addEventListener('scroll', (event) => {
        const items = document.querySelectorAll('.item');
        // taille visible ecran
        const sizeWindowHeight = window.innerHeight / 5 * 4;
        
        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < sizeWindowHeight ) {
                
                item.classList.add('show');
            } else {
                
                item.classList.remove('show');
            }
        });
    });


    useEffect(() => {
        itemContainer = document.querySelector('.itemContainer');
        
    })

    return(
        <div className="aboutPage">
            <header>
                <Navbar/>
            </header>

            <main>
                <section className="about">
                    <div className="summary">
                        <p><strong>Forte Construction</strong> est une Entreprise Générale de Bâtiment basée à Monaco, ayant acquis 25 années d’expérience dans l’ensemble des métiers de la construction et de la rénovation sur la Côte d’Azur et la Principauté.</p>
                        <p>Forte d’une équipe de 70 collaborateurs salariés, dont la majorité présente depuis sa création, la société GP CONSTRUCTION a su s’entourer de partenaires fidèles hautement qualifiés complétant ainsi le panel de ses activités.</p>
                        <p>Soucieuse d’apporter à ses clients un service de qualité, notre équipe de professionnels met en permanence son expérience et son savoir-faire pour vous conseiller et vous accompagner dans la réalisation de tous projets et travaux neufs ou de rénovation allant des plus simples aux plus complexes.</p>
                        <p>Evoluant essentiellement auprès d’une clientèle internationale exigeante, nous les accompagnons durant toutes les phases de développement et de réalisation de leur projet, et entretenons une relation de confiance et un suivi qui va bien au-delà de la livraison.</p>
                        <p>La satisfaction du travail bien fait est notre priorité afin que vos rêves n’aient pas de limites.</p>
                    </div>
                </section>

                <section className='timeline'>
                    <div className="line"></div>

                    <div className="itemContainer">
                        <div className="item">
                            <div className="bubble"></div>
                            <div className="card">
                                <h2>creation</h2>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis et adipisci, obcaecati magni quidem dignissimos facere beatae illo officia minus ex. Laboriosam voluptatibus ad voluptatum blanditiis necessitatibus quam ullam maiores voluptas sequi. Tempora fugiat voluptatibus facilis excepturi eaque, voluptatum nemo, consequuntur sint aliquid ducimus adipisci voluptate natus autem earum quia quas! Recusandae deleniti cupiditate laudantium. Vero alias praesentium debitis, dignissimos excepturi tenetur soluta deleniti laborum? Enim explicabo dolore architecto ea deserunt ut quidem consectetur, laborum cumque, aperiam doloribus repellendus nobis repellat molestiae quaerat ducimus incidunt est impedit placeat nihil id eaque, animi numquam. Soluta dignissimos cupiditate non in tempore.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="bubble"></div>
                            <div className="card">
                                <h2>premier salarié</h2>

                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi recusandae totam libero. Odit in molestiae quae quod ab deleniti aperiam aliquam asperiores totam ad culpa possimus assumenda reiciendis cumque eos laboriosam, voluptates fuga adipisci inventore voluptatibus voluptatem nam. Adipisci, inventore. Repudiandae, cupiditate? Recusandae iste necessitatibus ipsum reiciendis error! Dolore, nostrum dolorem tempore laudantium, consequatur minima obcaecati dolor tempora expedita repellendus at labore eveniet magni maiores corrupti esse, quibusdam repellat. Dolores, sed. Fuga, dolores consectetur dolorem deleniti aperiam quisquam porro itaque? Voluptatem animi id unde quos! Quisquam, ducimus, eaque sint, alias mollitia iure minus sed quas necessitatibus qui eos doloremque natus.</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="bubble"></div>
                            <div className="card">
                                <h2>agrandissement de l'equipe et équipement</h2>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis libero, eius nisi provident ipsam aut eligendi corporis expedita esse dolorum blanditiis voluptatibus, ratione quam placeat delectus tenetur harum accusamus suscipit natus at. Dolores vero, accusantium eos facere aliquam inventore ut porro asperiores ratione dicta id saepe fuga! Est atque non, corrupti tenetur aut magni omnis laborum nesciunt tempora nobis eaque iure nulla corporis vitae ut possimus facere. Qui, nesciunt porro. Quasi architecto magni fugiat earum ea. Culpa eum enim expedita, voluptate adipisci sapiente quisquam reprehenderit quasi ad ut, cumque similique temporibus? Quia sequi laborum quisquam sit inventore illo, suscipit itaque?</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="bubble"></div>
                            <div className="card">
                                <h2>agrandissement dans le secteur de zone de travail</h2>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis libero, eius nisi provident ipsam aut eligendi corporis expedita esse dolorum blanditiis voluptatibus, ratione quam placeat delectus tenetur harum accusamus suscipit natus at. Dolores vero, accusantium eos facere aliquam inventore ut porro asperiores ratione dicta id saepe fuga! Est atque non, corrupti tenetur aut magni omnis laborum nesciunt tempora nobis eaque iure nulla corporis vitae ut possimus facere. Qui, nesciunt porro. Quasi architecto magni fugiat earum ea. Culpa eum enim expedita, voluptate adipisci sapiente quisquam reprehenderit quasi ad ut, cumque similique temporibus? Quia sequi laborum quisquam sit inventore illo, suscipit itaque?</p>
                            </div>
                        </div>
                    </div>



                </section>
            </main>

            <footer>
                <Footer/>
            </footer>
            
        </div>
    )
}