
import { useNavigate} from "react-router-dom"

export const BodyHome = ()=> {

    const navigate = useNavigate()

    const getStarted = ()=> {
        navigate("/login")
    }

    return (
        <div className="body-home">
            <h1>
                Make it awesome.
            </h1>
            <h4>
                Al trained to generate realistic 3D objects.
            </h4>
            <div className="btn-getstarted" onClick={getStarted}>
                Get started 
                    
                        <span class="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    
            </div>
        </div>
    )
}