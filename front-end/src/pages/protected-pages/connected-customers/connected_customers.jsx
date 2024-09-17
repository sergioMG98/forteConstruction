import "./connected_customers.scss";
import NavbarConnected from '../../../components/navbarConnected/navbarConnected';

export default function ConnectedCustomers(){
    return (
        <div className="connectedCustomerPage">
            <header>
                <NavbarConnected/>
            </header>

            <main>
                <section>
                    <h1>connected_customers</h1>
                </section>
            </main>
        </div>
    )
}