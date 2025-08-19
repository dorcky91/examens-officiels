import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "../ui/layout/Layout";
import { HomePage } from "../pages/HomePage";
import { DashboardPage } from "../pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
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
