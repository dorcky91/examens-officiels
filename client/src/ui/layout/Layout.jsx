import { Outlet } from "react-router-dom";
import { Menu } from "../menu/Menu";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <Menu />
      <main id="section-outlet">
        <Outlet />
      </main>
    </>
  );
};
