
import { OptionMenu, HeaderFooterMenu } from "./index"
import aimodel from "../../images/aimodel-icon.png"
import creativity from "../../images/creativity-icon.png"
import material from "../../images/material-icon.png"
import style from "../../images/style-icon.png"

export const FooterMenu = ()=> {



    return (
        <div className="footer-menu">
            <div className="header-footer-menu-container">
                <HeaderFooterMenu />
            </div>
            <div className="options-footer-menu-container">
                <OptionMenu icon={style} title="Style" description="Choose your style" />
                <OptionMenu icon={material} title="Material" description="Choose material" />
                <OptionMenu icon={creativity} title="Creativity" description="High-level" />
                <OptionMenu icon={aimodel} title="AI model" description="Midjourney 5.0" />
            </div>
        </div>
    )
}