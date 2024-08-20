import Navbar from "../../components/navbar/navbar";
import "./contact.scss";

export default function Contact(){
    return (
        <div className="contactPage">
            <header>
                <Navbar/>
            </header>
            <main>
                <h1>contact</h1>
                <section className="formulaireContainer">
                    <form action="" method="post">
                        <div className="lastname contactInputContainer">
                            <input type="text" name="lastname" id="lastname" placeholder="Nom" required/>
                        </div>

                        <div className="firstname contactInputContainer">
                            <input type="text" name="firstname" id="firstname" placeholder="Prénom" required/>
                        </div>

                        <div className="phone contactInputContainer">
                            <input type="tel" name="phone" id="phone" placeholder="Téléphone" required/>
                        </div>

                        <div className="email contactInputContainer">
                            <input type="email" name="email" id="email" placeholder="E-mail" required/>
                        </div>

                        <div className="contactTextareaContainer">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Votre message"></textarea>
                        </div>

                        <div className="formBtn">
                            <button type="submit">envoyer   <span className="effectBtn"> </span></button>
                            
                        </div>

                    </form>
                </section>

                <section className="mapContainer">

                </section>
            </main>
        </div>
    )
}