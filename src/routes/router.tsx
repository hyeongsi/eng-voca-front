import { createBrowserRouter, Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Header from "../components/Header";
import Day from "../components/Day";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: (
      <div>
        <Header title="토익 영단어(고급)" />
        <Link to="/">에러발생!</Link>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/day/:day", element: <Day /> },
    ],
  },
]);

export default router;
