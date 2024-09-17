import NavbarConnected from "../../../components/navbarConnected/navbarConnected";
import "./connected_profil.scss";

export default function ConnectedProfil(){
    return (
        <div className="connectedProfilPage">
            <header>
                <NavbarConnected/>
            </header>

            <main>
                <h1>Profile</h1>
               
                <section>
                    <form method="post">
                        <div className="lastname inputContainer">
                            <label htmlFor="lastname">Nom</label>
                            <input type="text" name="lastname" id="lastname" required/>
                        </div>

                        <div className="firstname inputContainer">
                            <label htmlFor="firstname">Prénom</label>
                            <input type="text" name="firstname" id="firstname" required/>
                        </div>

                        <div className="phone inputContainer">
                            <label htmlFor="phone">Téléphone</label>
                            <input type="tel" name="phone" id="phone" required/>
                        </div>

                        <div className="email inputContainer">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" required/>
                        </div>

                        <div className="password inputContainer">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="password" id="password" />
                        </div>

                        <div className="btn">
                            <button type="submit">modifier</button>
                            <span></span>
                        </div>
                        
                    </form>


                </section>
            </main>
        </div>
    )
}