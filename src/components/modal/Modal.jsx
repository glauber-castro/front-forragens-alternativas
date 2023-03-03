import Modak from "react-modal"
import { AiOutlineClose } from "react-icons/ai"

//style
import "./modal.css"

const Modal = ({ closeModal, animais }) => {
    return (
        <div className="backgroundModal">
            <AiOutlineClose className="modalCloseButton" onClick={() => closeModal(false)} />
            <div>
                <h3 className="modalTitle">ESPÉCIES ANIMAIS QUE CONSOMEM A PLANTA:</h3>
                <p className="modalText">{animais}</p>
            </div>
        </div>
    )
}

export default Modal;