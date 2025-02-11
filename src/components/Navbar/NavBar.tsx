import Headroom from "react-headroom";
import { useContext } from "react";
import "../../assets/styles/nav.css";
import ThemeContext from "../../contexts/StyleContext";

export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Headroom>
      <div className="nav-bar">
        <h3>MMT</h3>
        <div className="menu">
          <span>Home</span>
          <span>About</span>
          <span>Work</span>
          <span>Gallery</span>
          <span>Service</span>
        </div>
        <div className="nav-buttons">
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button>Contact Me</button>
        </div>
      </div>
    </Headroom>
  );
}
