import { useEffect, useState } from "react";
import { api } from "../../utils/api";

//Components
import SearchBar from "../../components/SearchBar/SearchBar";

//images
import logo from "../../assets/banner/MiniLogoVerde.png"

//styles
import "./home.css"
import { Link } from "react-router-dom";

//icons
import { BiChevronRight } from "react-icons/bi"

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
        // eslint-disable-next-line 
    }, [search])

    return (
        <>
            <div className="bannerPosition">
                <img src={logo} alt="logo" />
            </div>

            <SearchBar searchBar={searchPlants} />

            {plants.map((plant, index) => (
                <div key={index}>
                    <div className="positionLayuot">
                        <img className="imagemPlantas" src={plant.images[0].url} alt={plant.nomePopular} />
                        <div className="positionTitle">
                            <Link to={`/planta/${plant.nomePopular}`} className="styleLink">
                                <h1 className="title">{plant.nomePopular}</h1>
                            </Link>
                            <h2 className="subtitle">{plant.nomeCientifico}</h2>
                        </div>
                        <BiChevronRight className="styleButtonRight" />
                    </div>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default Home;