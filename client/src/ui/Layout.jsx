import { Outlet } from "react-router";
import { Menu } from "./Menu";
import Footer from "./Footer";
import CallToAction from "@/components/home/CallToAction";
import "@/embla.css";
import ScrollTop from "./ScrollTop";

export const Layout = () => {
  return (
    <>
      <ScrollTop />
      <Menu />

      <div className="min-h-screen relative">
        <div className="w-full max-w-screen mx-auto px-3">
          <Outlet />
          <CallToAction />
        </div>
      </div>

      <Footer />
    </>
  );
};
