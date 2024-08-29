import { useLocation } from 'react-router-dom';
import './project.scss';
import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import SliderPictures from '../../components/before_after_slider/sliderPictures';


export default function Project(){

    const location = useLocation();

    const [allPicturesProject, setAllPicturesProject] = useState();

    // récupération de certaines info du projet
    const getProjectData = async() => {

        const response = await fetch(`http://127.0.0.1:8000/api/specificData/${location.state.indexProject}`);
        const data = await response.json();

        
        if (data.status == 200) {
            console.log("data", data.pictures);
            setAllPicturesProject(data.pictures);

        } else {
            console.log("error", data.pictures);
        }
    }

    useEffect(() => {
        getProjectData();
    }, [])

    return (
        <div className="projectPage">
            <header>
                <Navbar/>
            </header>

            <main>
                <section>
                    {
                        allPicturesProject?.map((element, index) => (
                            /* console.log("foreach", element.lambda); */
                            
                            
                            element.lambda != null ?

                                <img src={element.lambda} alt="" key={index} />
                            : 
                                <div className="sliderPicturesContainer" key={index}>
                                    <div className="wordContainer">
                                        <span>before</span> <span>after</span>
                                    </div>
                                    <SliderPictures before={element.before} after={element.after}/>
                                </div>

                        ))
                    }
                </section>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}