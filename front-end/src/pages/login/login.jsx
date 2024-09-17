import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import './login.scss';

export default function Login() {

    const navigate = useNavigate();

    // condition pour le mot de passe
    let passwordPattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$";
    // condition email
    let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    // connexion    
    const login = async(e) => {
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);

        const email = formData.get("email_login");
        const password = formData.get("password_login");

        let notification = document.querySelector('.notification');
        let notificationMessage = document.querySelector('.notificationMessage')


        if (email.match(emailPattern)) {
            if (password.match(passwordPattern)) {
                let options =  {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    }),
                }

                const response = await fetch("http://127.0.0.1:8000/api/login", options);
                const data = await response.json();

                console.log("data", data);

                notificationMessage.innerHTML = data.message;
                notification.classList.add('active');

                if (data.status == 200) {
                    // stock le token dans le local storage
                    localStorage.setItem('TokenUser_ForteConstruction', data.token);
                    
                    // redirige vers une autre page 
                    navigate(data.link);
                    
                } else {
                    notification.style.backgroundColor = "crimson";
                }
            } else {
                notificationMessage.innerHTML = "Le mot de passe ne correspond aux criteres";
                notification.classList.add('active');
                notification.style.backgroundColor = "crimson";
            }
        } else {
            notificationMessage.innerHTML = "L' email ne correspond pas aux criteres";
            notification.classList.add('active');
            notification.style.backgroundColor = "crimson";
        }

    }

    // supprime la notification
    const deleteNotification = () => {
        let notification = document.querySelector('.notification');
        notification.classList.remove('active');
    }

    // affecte le visuel selon l'email et mot de passe
    const verifiyValues = (field, value) => {
        

        if (field == "email") {
            // email
            let  input = document.querySelector('#email_login');

            if (value.match(emailPattern)) {
            
                input.style.borderBottom = "4px solid green";
            } else {
                input.style.borderBottom = "4px solid red";
            }

        } else {
            // mot de passe
            let  input = document.querySelector('#password_login');

            if (value.match(passwordPattern)) {
            
                input.style.borderBottom = "4px solid green";
            } else {
                input.style.borderBottom = "4px solid red";
            }
        }

    }
    

    return (
        <div className="loginPage">
            <header>
                <Navbar/>
            </header>

            <main>
                <section className='notification'>
                    <div className="notificationMessage"></div>
                    <button type="button" onClick={deleteNotification}>X</button>
                </section>

                <section className='formulaireContainer'>
                    <h1>login</h1>
                    <form onSubmit={login} method='post'>
                        <div className="emailContainer">
                            <input type="email" name="email_login" id="email_login" placeholder='email' required onChange={(e) => verifiyValues("email", e.target.value)}/>
                        </div>

                        <div className="passwordContainer">
                            <input type="password" name="password_login" id="password_login" placeholder='mot de passe' required onChange={(e) => verifiyValues("password", e.target.value)}/>
                        </div>

                        <div className="formBtn">
                            <button type="submit">connexion <span className="effectBtn"> </span></button>
                        </div>
                    </form>
                </section>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}