
import "./home.css"
import { Header, BodyHome, FooterMenu } from "./pages/components"

export const Home = ()=> {

    return (
        <div className="main-container">
            
            <div className="home-components-container">  
                
                <div className="navbar-container">
                    < Header />
                </div>
                <div className="body-container">
                    < BodyHome />
                </div>
                <div className="menu-container">
                    <FooterMenu />
                </div>
            
            </div>
         
             
        </div>
    )
}
