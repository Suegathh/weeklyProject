import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="brand">Sprinkle Of Magic</h1>
            <Link to="/">Home</Link>
            <Link to="/agenda">Agenda</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/form">Form</Link>
            </div>
        </nav>
    );
}
export default Navbar;