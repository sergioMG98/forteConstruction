import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./achievement.scss";

import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useNavigate} from "react-router-dom";

export default function Achievement(){
    
    const navigate = useNavigate()

    const [picturesProject, setPicturesProject ] = useState();

    // récupére les images 
    const getPictures = async() => {

        try {
            const response = await fetch('http://127.0.0.1:8000/api/allPictures');
            const data = await response.json();

            if (data.status == 200) {
                setPicturesProject(data.pictures);

            } else {
                console.log("response", data.status);

            }
        } catch (error) {
            console.log("error", error);
        }

    }

    useEffect(() => {
        getPictures();
    }, []);

    return (
        <div className="achievementPage">
            <header>
                <Navbar/>
            </header>
            
            <main>
                <section>
                    <ResponsiveMasonry 
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                        className="responsiveMasonry"
                    >
                        <Masonry 
                            gutter = "10px"
                            className="masonry"
                        >
                            
                            {
                                picturesProject?.map((element, index) => (
                                    
                                    <img src={element.first_picture} alt="" key={index} onClick={() => navigate("/project", { state: { indexProject: element.project_id }})}/>

                                ))
                            }
                        </Masonry>

                    </ResponsiveMasonry>
                    
                </section>
            </main>
        </div>
    )
}