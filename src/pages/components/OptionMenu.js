

export const OptionMenu = ({icon, title, description})=> {



    return (
        <div className="option-menu">
            <div className="header-option-menu">
                <img src={icon} alt={title}/>
                
            </div>
            <div className="body-option-menu">
                <div className="title-header-option-menu">{title}</div>
                <div className="message-option-menu">{description}</div>
            </div>
            
        </div>
    )
}