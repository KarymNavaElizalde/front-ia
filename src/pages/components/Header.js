
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

export const Header = ()=> {

    const navigate = useNavigate()

    const handleSignin = ()=> {
        navigate("/login")
    }

    return (
                <div className="header-container">
                    <div className="logo-container">noon</div>
                    <div className="links-container">
                        <Link className="link" to={"#"}>Pricing</Link>
                        <Link className="link" to={"#"}>Features</Link>
                        <Link className="link" to={"#"}>Open sources</Link>
                        <Link className="link" to={"#"}>Contact</Link>
                    </div>
                    <div className="button-signin-container">
                        <div className="btn-signin" onClick={handleSignin}>
                            Sign in
                        </div>
                    </div>
                </div>
    )
}

