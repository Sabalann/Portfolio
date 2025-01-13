import { useLanguage } from "./LanguageContext";
import { translations } from "../assets/translations";

export function NavBar() {
    const { language, toggleLanguage } = useLanguage();
    return (
        <>
            <div className="navBarContainer">
                <div className="navBar">
                    <a href="#hero" className="navButton"><button>Home</button></a>
                    <a href="#projects" className="navButton"><button>{translations[language].projectTitle}</button></a>
                    <a href="#about" className="navButton"><button>{translations[language].about}</button></a>
                    <a href="#contact" className="navButton"><button>Contact</button></a>
                    <div class="toggle-button-cover" onClick={toggleLanguage}>
                        <div id="button-3" class="button r">
                        <input class="checkbox" type="checkbox"/>
                        <div class="knobs"></div>
                        <div class="layer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;