export function ContactSection() {
    return (
        <div className="contactSection">
            <p className="email">
                S.Alaeiyeh@gmail.com
            </p>
            <hr className="divider"/>
            <p>(+31) 686072388</p>
            <hr className="divider"/>


            <button
                onClick={() => window.open('https://www.linkedin.com/in/sabalan-alaeiyeh-b65321277', '_blank')}>LinkedIn
            </button>
            <span>|</span>
            <button onClick={() => window.open('https://github.com/Sabalann', '_blank')}>GitHub</button>
        </div>
    );
}

export default ContactSection;