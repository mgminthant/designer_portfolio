import Headroom from "react-headroom";
import '../../assets/styles/nav.css';

export default function NavBar() {
    return (
        <Headroom>
        <div className="nav-bar">
            <h3>
                MMT
            </h3>
            <div className="menu">
                <span>Home</span>
                <span>About</span>
                <span>Work</span>
                <span>Gallery</span>
                <span>Service</span>
            </div>
            <button>Contact Me</button>
        </div>
        </Headroom>
    )
}