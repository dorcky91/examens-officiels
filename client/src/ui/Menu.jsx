import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/LOGO.png";
// import "./Menu.css";

export const Menu = () => {
  return (
    <nav className="sticky top-0 border-b border-gray-300 backdrop-blur-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <img src={logo} alt="Logo" className="object-contain h-10" />
          </Link>
          <ul className="flex gap-3 items-center text-sm">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "text-blue-800 font-semibold" : "text-gray-500"
                  }>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const links = [
  { to: "/", label: "Accueil" },
  { to: "/neuvieme", label: "9AF" },
  { to: "/ns4", label: "NS4" },
  { to: "/motivation", label: "Motivation" },
  { to: "/a-propos", label: "À propos" },
  { to: "/statistiques", label: "Statistiques" },
];
