import "./connected_employee.scss";
import NavbarConnected from '../../../components/navbarConnected/navbarConnected';

export default function ConnectedEmployee(){
    return (
        <div className="connectedEmployeePage">
            <header>
                <NavbarConnected/>
            </header>

            <main>
                <section>
                    <h1>connected_employee</h1>
                </section>
            </main>
        </div>
    )
}