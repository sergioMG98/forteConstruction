import { useEffect, useState } from 'react';
import './connected_home.scss';
import ListProject from '../../../components/listProject/listProject';
import NavbarConnected from '../../../components/navbarConnected/navbarConnected';

export default function ConnectedHome() {
    const [projects , setProjects] = useState();
    const [projectsFiltered, setProjectsFiltered ] = useState([]);

    const [profits, setProfits] = useState();
    const [managers, setManagers] = useState([]);
    const [money ,setMoney] = useState([]);

    const [slideA, setSlideA] = useState();
    const [slideB, setSlideB] = useState();
    const [rangeMin, setRangeMin] = useState();
    const [rangeMax, setRangeMax] = useState();

    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();

    const [projectFinish , setProjectFinish] = useState();
    const [projectBegin, setProjectBegin] = useState();
    const [projectProgress, setProjectProgress] = useState();
    const [projectStatusSelected, setProjectStatusSelected] = useState();

    // value pour le filtre
    const [selectManager, setSelectManger] = useState();

    // erreur filtre
    const [erreurFilter, setErreurFilter] = useState("");

    // récupére les projets
    const getProjects = async() => {
        const response = await fetch("http://127.0.0.1:8000/api/allProject");
        const data = await response.json();

        if (data.status == 200) {
            setProjects(data.projects);
            console.log("reussi", data);

            getProfits(data.projects);
            projectManager(data.projects);
            percentMoney(data.projects);
            dateControl(data.projects)
            statusProjectsController(data.projects);
        } else {
            console.log('erreur', data?.message);
        }

    }

    // filtre les chefs
    const projectManager = (array) => {

        array?.forEach(element => {
            
            if (managers.includes(element.project_manager) == false) {
                managers.push(element.project_manager);
            }

        });
    }

    // affect le manager
    const manager = (value) => {

        let allManager = document.querySelectorAll('.managerName');

        
        if (selectManager == value) {
            setSelectManger();

            allManager.forEach(element => {
                
                if (element.getAttribute('value') == value) {
                    element.classList.remove('selected')
                }
            });
            
        } else {
            setSelectManger(value);

            allManager.forEach(element => {
                if (element.getAttribute('value') == value) {
                    element.classList.add('selected');
                } else {
                    element.classList.remove('selected');
                }
            });
        }
    }

    // controlle la date
    const dateControl = (array) => {
        let sliderBar = document.querySelector('.progress');
        let sliderOne = document.querySelector('#slider-1');
        let sliderTwo = document.querySelector('#slider-2');

        let valueMin;
        let valueMax;

        // determine la plus petite date et la plus grande
        array.forEach(element => {
            // decortique les dates
            let splitMin = element.project_start.split('-');
            let splitMax = element.project_end.split('-');

            // recupere la date puis les transforme en milliseconde
            let min = new Date(splitMin[0], splitMin[1], splitMin[2]).getTime();
            let max = new Date(splitMax[0], splitMax[1], splitMax[2]).getTime();

            // filtre les valeurs
            if (valueMin == undefined || valueMin > min) {
                valueMin = min;

            }
            if (valueMax == undefined || valueMax < max) {
                valueMax = max;
            }
            
        });

        //valeurs max et min pour les input
        setRangeMin(valueMin);
        setRangeMax(valueMax);

        // permet l'affichage des dates
        setDateStart(new Date(slideA == undefined ? valueMin : Number(slideA)));
        setDateEnd(new Date(slideB == undefined ? valueMax : Number(slideB)));

        // insert valeur max et min
        setSlideA(slideA == undefined ? valueMin : sliderOne.value);  
        setSlideB(slideB == undefined ? valueMax : sliderTwo.value); 


        // affichage couleur bar entre point
        let tem = (((sliderTwo.value - valueMin) * 100) / valueMax) * 3.8806;

        // taille bar
        let tailleDate = valueMax - valueMin;

        let percent1 = Math.round((((sliderOne.value - valueMin) * 100) / tailleDate));
        let percent2 = Math.round((((sliderTwo.value - valueMin) * 100) / tailleDate));
        sliderBar.style.background = `linear-gradient(to right, #666666 ${percent1}%, #008b8b ${percent1}%, #008b8b ${percent2}%, #666666 ${percent2}% )`;

    }

    // calcul le pourcentage pour le graph bar
    const percentMoney = (array) => {
        let resultArgentFinal = 0;
        let resultArgentRecu = 0;
        let resultCout = 0; 

        // calcul toute les valeurs
        array.forEach(element => {
            resultArgentFinal = resultArgentFinal + element.project_price;
            resultArgentRecu = resultArgentRecu + element.money_obtained;
            resultCout = resultCout + element.project_cost;

        });

        // calcule le pourcentage des valeurs
        function calcul(highest) {
            // augmente la valeur la plus haute de 10%
            let max =  ((10 * highest) / 100) + highest ;

            // calcul le pourcentage par rapport a max
            let final = (resultArgentFinal * 100 / max);
            let recu = (resultArgentRecu * 100) /max;
            let cout = (resultCout * 100 ) / max;

            // vide le tableau "money"
            while (money.length != 0) {
                money.pop();
            }

            money.push({
                "final": final,
                "recu": recu,
                "cout": cout
            });
        }

        // determine la valeur la plus haute
        if (resultArgentFinal > (resultArgentRecu && resultCout)) {
            calcul(resultArgentFinal);

        } else if (resultArgentRecu > ( resultArgentFinal && resultCout)) {
            calcul(resultArgentRecu);

        } else {
            calcul(resultCout);

        }


    }

    // calcule les profits
    const getProfits = (values) => {
        let result = 0;

        if (projectsFiltered != "nothing") {
            values?.forEach(element => {
                result = result + element.profits;
    
            });
    
            if (result.toString().length > 3 && result.toString().length < 7) {
                // milles
                setProfits((result / 1000).toFixed(1) + " K" );
    
            } else if (result.toString().length >= 7 ){
                // millions
                setProfits((result / 1000000).toFixed(1) + " M" );
    
            } else {
                setProfits(result);
            }
        } else {
            setProfits(0);
        }



    }

    // calcul le pourcentage de status
    const statusProjectsController = (array) => {
        let finish = 0;
        let toBegin = 0;
        let inProgress = 0;

        array.forEach(element => {
            if (element.project_status == "finish") {
                finish = finish + 1;
            } else if(element.project_status == "to_begin") {
                toBegin = toBegin + 1;
            } else {
                inProgress = inProgress + 1;
            }

        });

        setProjectFinish((finish * 100 ) / array.length);
        setProjectBegin((toBegin * 100 ) / array.length);
        setProjectProgress((inProgress * 100 ) / array.length);

    }

    // status select
    const statusSelect = (value) => {

        let descriptifs = document.querySelectorAll('.descri');

        if (projectStatusSelected == value) {
            setProjectStatusSelected();
   
            descriptifs.forEach(element => {
                if (element.getAttribute('value') == value) {
                    element.classList.remove('selected')
                }
            });

        } else {
            setProjectStatusSelected(value);

            descriptifs.forEach(element => {
               
                if (element.getAttribute('value') == value) {
                    element.classList.add('selected');
                } else {
                    element.classList.remove('selected');
                }
               
            });
        }
    }

    // filtre la recherche de la personne
    const filterProjects = () => {
       
        let temporary = [];
        
        // vide le tableau
        while (projectsFiltered.length != 0) {
            projectsFiltered.pop();
        }

        // transform les date max et min pour les transformer en milliseconde
        let dateBegin = new Date(dateStart?.getFullYear(), dateStart?.getMonth(), dateStart?.getDate())?.getTime();
        let dateFinish = new Date(dateEnd?.getFullYear(), dateEnd?.getMonth(), dateEnd?.getDate())?.getTime();

    
        if (selectManager != undefined) {
            
            projects.forEach(element => {
                if(element.project_manager == selectManager){
                    
                    // decortique les dates
                    let splitMin = element.project_start.split('-');
                    let splitMax = element.project_end.split('-');

                    // recupere la date puis les transforme en milliseconde
                    let min = new Date(splitMin[0], splitMin[1], splitMin[2]).getTime();
                    let max = new Date(splitMax[0], splitMax[1], splitMax[2]).getTime();
                    
                    
                    if (min >= dateBegin && dateFinish >= max ) {
                        console.log("date");
                        if (projectStatusSelected != undefined) {

                            if (element.project_status == projectStatusSelected) {
                                temporary.push(element);
                            }
    
                        } else {
    
                            temporary.push(element);
                        }
                        
                    } else {
                        if (projectStatusSelected != undefined) {

                            if (element.project_status == projectStatusSelected) {
                                temporary.push(element);
                            }
    
                        } else {
    
                            temporary.push(element);
                        }
                    }
                    
                }
                
            });
        } else {
            projects?.forEach(element => {
                
                // decortique les dates
                let splitMin = element.project_start.split('-');
                let splitMax = element.project_end.split('-');

                // recupere la date puis les transforme en milliseconde
                let min = new Date(splitMin[0], splitMin[1], splitMin[2]).getTime();
                let max = new Date(splitMax[0], splitMax[1], splitMax[2]).getTime();
                
                
                if (min >= dateBegin && dateFinish >= max ) {
                    
                    if (projectStatusSelected != undefined) {

                        if (element.project_status == projectStatusSelected) {
                            temporary.push(element);
                        }

                    } else {

                        temporary.push(element);
                    }
                    
                } else {
                    
                    if (projectStatusSelected != undefined) {

                        if (element.project_status == projectStatusSelected) {
                            temporary.push(element);
                        }

                    }
                }
                    
                
                
            });
        }
        
        console.log("manager: ", selectManager);
        console.log("status: ", projectStatusSelected);
        console.log("temporary: ", temporary.length);
        // permet d'actualiser la page sans reload la page
        if (temporary.length == 0 /*(dateBegin != undefined && dateEnd != undefined) || */) {
            console.log("if");

            if (selectManager != undefined || projectStatusSelected != undefined) {
                setErreurFilter("nothing")
                console.log("if 2")
            } else {
                console.log("else 2");
                setProjectsFiltered(temporary);
                setErreurFilter("");
            }   

        } else {
            console.log("else");
            setProjectsFiltered(temporary);
            setErreurFilter("");
        }
        
    }

    useEffect(() => {
        getProjects();
    }, []);

    useEffect(() => {
        filterProjects();
    }, [selectManager, projectStatusSelected]);

    useEffect(() => {
        getProfits(projectsFiltered);
        projectManager(projectsFiltered);
        percentMoney(projectsFiltered);
        dateControl(projectsFiltered)
    }, [projectsFiltered.length]);

    console.log("----->", projectsFiltered);
    return (
        <div className="connectedHomePage">
            <header>
                <NavbarConnected/>
            </header>

            <main>
                <section>
                    <div className="detailsProjectsContainer">
                        <div className="projectManagerContainer box">
                            <div className="title">
                                <h2>Chef de projet</h2>
                            </div>
                            <div className="manager">
                                <ul>
                                    {
                                        managers?.map((element, index) => {
                                            return (
                                                <li className='managerName' key={index} onClick={() => manager(element)} value={element}>
                                                    {element}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            
                        </div>

                        <div className="dateContainer box">
                            <div className="title">
                                <h2>Date</h2>
                            </div>

                            <div className="rangeSliderContainer">
                                <div className="dateBoxContainer">
                                    <div className="dateStart dateBox">
                                        {
                                            `${dateStart?.getDate()} / ${dateStart?.getMonth() + 1} / ${dateStart?.getFullYear()}`
                                        }
                                    </div>

                                    <div className="dateEnd dateBox">
                                        {
                                            `${dateEnd?.getDate()} / ${dateEnd?.getMonth() + 1} / ${dateEnd?.getFullYear()}`
                                        }
                                    </div>
                                </div>

                                <div className="controlDate">
                                    <div className="slider">
                                        <div className="progress"></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range"  min={rangeMin} max={rangeMax} value={slideA} id='slider-1' onInput={() => dateControl(projects)}/>
                                        <input type="range"  min={rangeMin} max={rangeMax} value={slideB} id='slider-2' onInput={() => dateControl(projects)}/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="moneyContainer box">
                            <div className="title">
                                <h2>Claims and Costs</h2>
                            </div>

                            <div className="money">
                                <div className="descriptif">
                                    <div className="descri">
                                        <span></span> <p>Total d'argent à recevoir ce jour</p>
                                    </div>

                                    <div className="descri">
                                        <span></span> <p>Coûts totaux à ce jour</p>
                                    </div>

                                    <div className="descri">
                                        <span></span> <p>Total d' argent reçu à ce jour</p>
                                    </div>

                                </div>
                                <div className="array">
                                    <div className="column" style={{"--percent": money[0]?.final+"%"}}></div>
                                    <div className="column" style={{"--percent": money[0]?.recu+"%"}}></div>
                                    <div className="column" style={{"--percent": money[0]?.cout+"%"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="profitsContainer box">
                            <div className="title">
                                <h2>Profits</h2>
                            </div>

                            <div className="profits">
                                {
                                    profits + " €"
                                }
                            </div>
                        </div>

                        <div className="statusContainer box">
                            <div className="title">
                                <h2>Status du projet(s)</h2>
                            </div>

                            <div className="graphic">
                                <div className="chart" 
                                    style={{
                                        "--blue": projectBegin + "%",
                                        "--green": projectProgress + "%",
                                        "--red": projectFinish + "%",
                                    }}>

                                </div>

                                <div className="descriptif">
                                    <div className="descri" onClick={() => statusSelect("to_begin")} value="to_begin">
                                        <span></span>pour commencer<p></p>
                                    </div>

                                    <div className="descri" onClick={() => statusSelect("in_progress")} value="in_progress">
                                        <span></span> <p>en cours</p>
                                    </div>

                                    <div className="descri" onClick={() => statusSelect("finish")} value="finish">
                                        <span></span> <p>fini</p>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className="listProjectsContainler box">
                        <div className="barInformation">
                            <ul>
                                <li>Nom du projet</li>
                                <li>Chef de projet</li>
                                <li>Début de projet</li>
                                <li>Fin du projet</li>
                                <li>Argent déjà réclamé</li>
                                <li>Prix du projet</li>
                                <li>Cout du projet</li>
                                <li>Profits</li>
                                <li>Nombre de jours restant</li>
                            </ul>
                        </div>

                        <div className="listContainer">
                            {
                                projectsFiltered.length == 0 ?
                                    
                                    <ListProject array={projects} erreurFilter={erreurFilter}/>

                                    :

                                    <ListProject array={projectsFiltered} erreurFilter={erreurFilter}/>
                                        
                            }

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}