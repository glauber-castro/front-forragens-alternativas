import { useEffect, useState } from "react";
import { api } from "../../utils/api";

//images
import logo from "../../assets/banner/MiniLogoVerde.png"

//styles
import "./home.css"

const Home = () => {

    const [plants, setPlants] = useState([]);
    const [search, setSearch] = useState("")

    // listar todas as plantas
    const listPlants = async () => {
        const res = await api.get(`/search?nome=${search}`)
        setPlants(res.data)
    }

    const searchPlants = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        listPlants()
    }, [search])

    return (
        <div className="container">
            <div className="bannerPosition">
                <img src={logo} alt="logo" />
            </div>
            <div className="searchPosition">
                <input
                    type="text"
                    placeholder="Digite o nome"
                    onChange={searchPlants}
                />
            </div>
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