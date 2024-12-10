export function NavBar() {
    return (
        <>
            <div className="navBarContainer">
                <div className="navBar">
                    <a href="#hero" className="navButton"><button>Home</button></a>
                    <a href="#projects" className="navButton"><button>Projects</button></a>
                    <a href="#about" className="navButton"><button>About</button></a>
                    <a href="#contact" className="navButton"><button>Contact</button></a>
                </div>
            </div>
        </>
    )
}

export default NavBar;