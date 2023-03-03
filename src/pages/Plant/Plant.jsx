import { useEffect, useState, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Component Carrousel 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Modal from "../../components/modal/Modal";

//Chamando api
import { api } from "../../utils/api";

//imagens
import { AiOutlineClose, AiOutlineExclamationCircle } from "react-icons/ai";
import iconFolha from "../../assets/carrousel/icon-folha.jpg";
import microscopio from "../../assets/carrousel/microscopio.png"

//styles
import "./plant.css"


const Plant = () => {

    const [single, setSingle] = useState("");
    const [openModal, setOpenModal] = useState(false);

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
                <img className="imagemCabecalho" src={iconFolha} alt={single.nomeCientifico} />
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

                    <div className="carroselPosition2">
                        <div className="imagemPosition2">
                            <img className="imagenLayout2" src={microscopio} alt="microscopio" />
                        </div>

                        <div className="positionInform">
                            <AiOutlineExclamationCircle 
                                className="iconInformacao"
                                onClick={() => setOpenModal(true)}
                            />
                            {openModal && <Modal animais={single.consumidorPor} closeModal={setOpenModal} />}
                        </div>

                        <div className="textPosition2">
                            <h1 className="titlePosition2">Nome Científico:</h1>
                            <p className="nomeCientifico2">{single.nomeCientifico}</p>
                            <h1 className="familiaPosition2">ABA(familia):</h1>
                            <p className="nomeFamilia2">{single.nomeFamilias}</p>
                        </div>
                    </div>


                </Carousel>
            )}
        </div>
    )
}

export default memo(Plant);