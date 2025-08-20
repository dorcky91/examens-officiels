import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";
import Footer from "./Footer";
import QuickAction from "@/components/home/QuickAction";

export const Layout = () => {
  return (
    <>
      <Menu />
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <Outlet />

        <QuickAction />
        <Footer />
      </div>
    </>
  );
};
