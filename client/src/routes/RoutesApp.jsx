import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/ui/layout/Layout";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage";
import NeuviemePage from "@/pages/NeuviemePage";
import NS4Page from "@/pages/NS4Page";
import AboutUsPage from "@/pages/AboutUsPage";
import StatistiquesPage from "@/pages/StatistiquesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/neuvieme",
        element: <NeuviemePage />,
      },
      {
        path: "/ns4",
        element: <NS4Page />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/statistiques",
        element: <StatistiquesPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const RoutesApp = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
