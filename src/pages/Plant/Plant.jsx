import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Component Carrousel 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"

//Chamando api
import { api } from "../../utils/api";

//imagens
import { AiOutlineClose } from "react-icons/ai";
import iconFolha from "../../assets/carrousel/icon-folha.jpg";

//styles
import "./plant.css"


const Plant = () => {

    const [single, setSingle] = useState("")
    const { nomePopular } = useParams();
    const navigate = useNavigate();

    //função que chamar uma determinada planta
    const singlePlant = async () => {
        await api.get(`/planta/${nomePopular}`)
            .then(res => setSingle(res.data))
            .catch(error => alert("Error em chamar a planta"))
    }

    const closeButton = (e) => {
        e.preventDefault();
        navigate("/")
    }

    useEffect(() => {
        singlePlant()
        // eslint-disable-next-line
    }, [single])

    return (
        <div>
            <div className="cabecalhoSingle">
                <img src={iconFolha} alt={single.nomeCientifico} />
                <div className="positionItems">
                    <h1 className="singleTitle">{single.nomePopular}</h1>
                </div>
                <AiOutlineClose className="styleButtonClose" onClick={closeButton} />
            </div>
            {single && (
                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showStatus={false}
                >
                    <div className="carroselPosition1">
                        {single.images.map((image, index) => (
                            <div className="imagemPosition" key={index}>
                                <img src={image.url} alt="" />
                            </div>
                        ))}
                    </div>

                    <div>
                        ola
                    </div>
                </Carousel>
            )}
        </div>
    )
}

export default Plant;