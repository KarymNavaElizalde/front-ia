
import { useNavigate } from "react-router-dom"

export const Getstarted = ()=> {

    const navigate = useNavigate()

    const logoutUser = ()=> {
        localStorage.removeItem("sesionToken")
        navigate("/home")
    }

    return (
        <div className="started-main-container">
            <div className="secondary-container-started">
                <div className="tools-column-started">
                    <div className="profile-column-started">
                        <span class="material-symbols-outlined">
                        account_circle
                        </span>My Profile</div>
                    
                        <div className="option-menu">
                        <span class="material-symbols-outlined">
                            home
                        </span>Home</div>
                        <div className="option-menu"><span class="material-symbols-outlined">
                            groups
                        </span>Comunity Feed</div>
                        <div className="option-menu"><span class="material-symbols-outlined">
                            feed
                        </span>Personal Feed</div>
                    
                    
                        <div className="option-menu user-tools">User Tools</div>
                        <div className="option-menu"><span class="material-symbols-outlined">
                            palette
                        </span>
                            AI Image Generation</div>
                        <div className="option-menu"><span class="material-symbols-outlined">
                            dashboard
                        </span>
                            AI Canvas </div>
                        <div className="option-menu"><span class="material-symbols-outlined">
                            chat
                        </span>
                            AI Chat</div>
                        <div className="btn-logout-container">
                            <div className="btn-logout" onClick={logoutUser}>Logout</div>
                        </div>
                </div>
                <div className="galery-container" >
                    <div className="card-galery">
                        <div className="imagen1"></div>
                        <div className="title-card-galery">Lorem Ipsum</div>
                        <div className="description-card-galery">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className="card-galery">
                    <div className="imagen2"></div>
                        <div className="title-card-galery">Lorem Ipsum</div>
                        <div className="description-card-galery">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className="card-galery">
                    <div className="imagen3"></div>
                        <div className="title-card-galery">Lorem Ipsum</div>
                        <div className="description-card-galery">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className="card-galery">
                    <div className="imagen4"></div>
                        <div className="title-card-galery">Lorem Ipsum</div>
                        <div className="description-card-galery">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className="card-galery">
                        <div className="imagen5"></div>
                        <div className="title-card-galery">Lorem Ipsum</div>
                        <div className="description-card-galery">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className="card-galery">
                        <div className="imagen6"></div>
                        <div className="title-card-galery">Lorem Ipsum</div>
                        <div className="description-card-galery">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}