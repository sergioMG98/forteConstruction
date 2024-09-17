import './connected_project.scss';
import NavbarConnected from '../../../components/navbarConnected/navbarConnected';

export default function ConnectedProject(){
    return (
        <div className="connectedProjectPage">
            <header>
                <NavbarConnected/>
            </header>

            <main>
                <section>
                    <h1>connected_project</h1>
                </section>
            </main>
        </div>
    )
}