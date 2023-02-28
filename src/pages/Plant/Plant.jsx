import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

//Chamando api
import { api } from "../../utils/api";


const Plant = () => {

    const [single, setSingle] = useState("")
    const {nomePopular} = useParams();

    //função que chamar uma determinada planta
    const singlePlant = async () =>{
        await api.get(`/planta/${nomePopular}`)
        .then(res => setSingle(res.data))
        .catch(error => alert("Error em chamar a planta"))
    }

    useEffect(() =>{
        singlePlant()
        // eslint-disable-next-line
    },[single])

    return(
        <div>
           {single && (
                <div>
                    <p>{single.nomePopular}</p>
                    <p>{single.nomeCientifico}</p>
                </div>
           )}
        </div>
    )
}

export default Plant;