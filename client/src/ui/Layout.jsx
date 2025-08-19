import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <Menu />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
