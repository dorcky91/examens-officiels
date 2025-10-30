import { useControlSreenView } from "@/hooks/useCustomHook";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  //#region Hooks
  const { showViewSm } = useControlSreenView();
  useEffect(() => {
    const handleResize = () => {
      setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  //#endregion

  return (
    <nav className="sticky w-screen top-0 z-50 border-b border-gray-200 bg-white">
      <div className="w-full max-w-screen mx-auto px-3">
        <div className="flex justify-between items-center p-3 md:px-2">
          <Link to="/">
            <img alt="Logo" src="/logoArche.png" className="h-14" />
            {/* <img alt="Logo" src="/arche.png" className="h-11" />x */}
          </Link>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer md:hidden"
            aria-label="Menu Button">
            <Bars3Icon className="h-6 w-6" />
          </button>

          {showViewSm ? (
            <>
              {showMenu && (
                <div className="absolute top-0 left-0 w-full h-dvh mt-12 bg-black/80 border border-gray-200 shadow-lg">
                  <ul className="flex flex-col py-3 bg-white text-sm">
                    {links.map(({ to, label }) => (
                      <li key={to}>
                        <NavLink
                          onClick={() => {
                            setShowMenu(false);
                            scrollToTop();
                          }}
                          to={to}
                          className={({ isActive }) =>
                            `px-5 py-3 block ${
                              isActive ? "text-blue-800 font-semibold" : ""
                            }`
                          }>
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <>
              <ul className="flex gap-3 items-center text-sm">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      onClick={scrollToTop}
                      to={to}
                      className={({ isActive }) =>
                        isActive ? "text-blue-800 font-semibold" : ""
                      }>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                  Se connecter
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const links = [
  { to: "/", label: "Accueil" },

  { to: "/neuvieme", label: "9AF" },
  { to: "/ns4", label: "NS4" },
  { to: "/formules", label: "Formules" },
  { to: "/a-propos", label: "À propos" },
];
