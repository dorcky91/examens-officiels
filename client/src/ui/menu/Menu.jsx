import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
import "./Menu.css";

export const Menu = () => {
  return (
    <nav id="menu-navigation">
      <Link to="/">
        <img id="logo" src={logo} alt="Logo" />
      </Link>
      <div className="nav-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/neuvieme">Dashboard</NavLink>
        <NavLink to="/ns4">Login</NavLink>
      </div>
    </nav>
  );
};
