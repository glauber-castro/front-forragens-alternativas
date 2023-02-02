import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import "./home.css"

const Home = () => {

    const [plants, setPlants] = useState([]);
    const [search, setSearch] = useState("")

    // listar todas as plantas
    const listPlants = () => {
        api.get("/")
            .then(({ data }) => {
                setPlants(data)
            })
    }

    const searchPlants = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        listPlants()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Digite o nome"
                onChange={searchPlants}
            />
            {plants
            .filter(plant =>{
                if(search === "") return plant;
                else if(plant.nomePopular.toLowerCase().includes(search)) return plant;
            })
            .map((plant, index) => (
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