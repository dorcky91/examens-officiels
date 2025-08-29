import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/ui/Layout";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage";
import NeuviemePage from "@/pages/NeuviemePage";
import NS4Page from "@/pages/NS4Page";
import AboutUsPage from "@/pages/AboutUsPage";
import StatistiquesPage from "@/pages/StatistiquesPage";
import NeuviemeExamDetailsPage from "./pages/NeuviemeExamDetailsPage";
import NS4ExamDetailsPage from "./pages/NS4ExamDetailsPage";
import TryExamenPage from "./pages/TryExamenPage";

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
        path: "/neuvieme/:courseId",
        element: <NeuviemeExamDetailsPage />,
      },
      {
        path: "/ns4",
        element: <NS4Page />,
      },
      {
        path: "/ns4/:courseId",
        element: <NS4ExamDetailsPage />,
      },
      {
        path: "/a-propos",
        element: <AboutUsPage />,
      },
      {
        path: "/motivations",
        element: <h4>Page des Motivations</h4>,
      },
      {
        path: "/statistiques",
        element: <StatistiquesPage />,
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
