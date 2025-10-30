import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "@/ui/Layout";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage";
import NeuviemePage from "@/pages/NeuviemePage";
import NS4Page from "@/pages/NS4Page";
import AboutUsPage from "@/pages/AboutUsPage";
import NeuviemeExamDetailsPage from "./pages/NeuviemeExamDetailsPage";
import NS4ExamDetailsPage from "./pages/NS4ExamDetailsPage";
import TryExamenPage from "./pages/TryExamenPage";
import FormulesPage from "./pages/FormulesPage";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
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
        path: "/neuvieme/:courseName",
        element: <NeuviemeExamDetailsPage />,
      },
      {
        path: "/ns4",
        element: <NS4Page />,
      },
      {
        path: "/ns4/:courseName",
        element: <NS4ExamDetailsPage />,
      },
      {
        path: "/a-propos",
        element: <AboutUsPage />,
      },
      {
        path: "/formules",
        element: <FormulesPage />,
      },
      {
        path: "/essai",
        element: <TryExamenPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
