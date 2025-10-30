import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          {/* https://dribbble.com/shots/25752589-E-learning-Educational-Dashboard-Design-Web-App */}
          {/* https://dribbble.com/shots/24168890-Education-dashboard */}
          <div className="bg-amber-200">
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
