import Menu from "../menu";
import "./navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <a href='/'>
                Aura Music
            </a>
            
            <Menu />
        </nav>
    )
}

export default Navbar;