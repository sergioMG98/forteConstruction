import LeafletMap from "../../components/leafletMap/leafletMap";
import Navbar from "../../components/navbar/navbar";
import "./contact.scss";
import Footer from "../../components/footer/footer";


export default function Contact(){

    // envoie message
    const sendMessage = async(e) => {
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);

        const lastname = formData.get('lastname');
        const firstname = formData.get('firstname');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const message = formData.get('message');

        // condition email
        let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

        let notification = document.querySelector('.notification');
        let notificationMessage = document.querySelector('.notificationMessage')

        if (email.match(emailPattern)) {
            try {
                let options =  {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        lastname,
                        firstname,
                        phone,
                        email,
                        message
                    })
                }

                const response = await fetch('http://127.0.0.1:8000/api/contact', options);
                const data = await response.json();

                notificationMessage.innerHTML = data.message;
                notification.classList.add('active');
                console.log("data", data);

                if (data.status == 200) {
                    notification.style.backgroundColor = "green";
                } else {
                    notification.style.backgroundColor = "crimson";
                }
            } catch (error) {
                notificationMessage.innerHTML = "Une erreur d'envoie des donnée";
                notification.classList.add('active');
                notification.style.backgroundColor = "crimson";

            }
        } else {
            notificationMessage.innerHTML = "L' adresse mail ne correspond pas aux criteres";
            notification.classList.add('active');
            notification.style.backgroundColor = "crimson";

        }

    }

    // supprime la notification
    const deleteNotification = () => {
        let notification = document.querySelector('.notification');
        notification.classList.remove('active');
    }

    return (
        <div className="contactPage">
            <header>
                <Navbar/>
            </header>
            <main>
                <section className="notification">
                    <div className="notificationMessage"></div>
                    <button type="button" onClick={deleteNotification}>X</button>
                </section>

                <h1>contact</h1>
                <section className="formulaireContainer">
                    <form onSubmit={sendMessage} method="post">
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
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message" required></textarea>
                        </div>

                        <div className="formBtn">
                            <button type="submit">envoyer   <span className="effectBtn"> </span></button>
                            
                        </div>

                    </form>
                </section>

                <section className="mapContainer">
                    <LeafletMap/>
                </section>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}