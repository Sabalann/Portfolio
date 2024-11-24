export function ContactSection() {
    return (
        <div className="contactSection">
            <p className="email">
                S.Alaeiyeh@gmail.com
            </p>
            <hr className="divider" id="divider1"/>
            <p>(+31) 686072388</p>
            <hr className="divider" id="divider2"/>
            <button
                onClick={() => window.open('https://www.linkedin.com/in/sabalan-alaeiyeh-b65321277', '_blank')}>LinkedIn
            </button>
            <span>|</span>
            <button onClick={() => window.open('https://github.com/Sabalann', '_blank')}>GitHub</button>
            <hr className="divider" id="divider3"/>
        </div>
    );
}

export default ContactSection;