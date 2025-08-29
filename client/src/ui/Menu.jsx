import { LINKS } from "@/utils/helpers";
import { Link, NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className="sticky top-0 border-b border-gray-300 backdrop-blur-lg z-50 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <img
              src="/LOGO.png"
              alt="Logo"
              loading="lazy"
              className="object-contain h-10"
            />
          </Link>
          <ul className="flex gap-3 items-center text-sm">
            {LINKS.map(({ to, label }) => (
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
