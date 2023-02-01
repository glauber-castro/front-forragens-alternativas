import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import "./home.css"

const Home = () => {

    const [plants, setPlants] = useState([]);

    // listar todas as plantas
    const listPlants = () => {
        api.get("/")
            .then(({ data }) => {
                setPlants(data)
            })
    }

    useEffect(() => {
        listPlants()
    }, [])

    return (
        <div className="container">
            {plants.map((plant, index) => (
                <div key={index}>
                    <div className="positionLayuot">
                        <img className="imagemPlantas" src={plant.images[0].url} alt={plant.nomePopular} />
                        <h1 className="title">
                            {JSON.stringify(plant.nomePopular).toLowerCase().replace(/["]/g, '')}
                        </h1>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Home;