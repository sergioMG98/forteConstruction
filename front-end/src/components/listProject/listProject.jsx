export default function ListProject({array, erreurFilter}) {
   
    // compte les jours restant
    const remainingDay = (project_end) => {

        // separe les valeurs
        const end = project_end.split('-');

        // recup la date d'aujourd'hui
        const now = new Date();
        
        // recup la date choisie
        let endDay = new Date(end[0], end[1] - 1, end[2]);

        // transforme en milliseconde puis calcul la difference
        let time_difference = endDay.getTime() - now.getTime();
        
        // calcul d'une journée 
        let oneDay = 24 * 60 * 60 * 1000;
        
        // calcul de la difference de jour
        let days_difference = time_difference / oneDay;

        return days_difference < 0 ? 0 : Math.round(days_difference);
    }
    
    return (
        <div>
            {
                erreurFilter == "nothing" ? 
                    <div className="nothingMessage">rien ne correspond a votre recherche</div>
                :
            
                    array?.map((element, index) => {
                        
                        return (
                            <div className="list" key={index}>
                                <ul>
                                    <li>{element.project_name}</li>
                                    <li>{element.project_manager}</li>
                                    <li>{element.project_start}</li>
                                    <li>{element.project_end}</li>
                                    <li>{element.money_obtained} €</li>
                                    <li>{element.project_price} €</li>
                                    <li>{element.project_cost} €</li>
                                    <li>{element.profits} €</li>
                                    <li>{remainingDay(element.project_end)}</li>
                                </ul>
                            </div>
                        )
                    })
            }
        </div>


    )
}