import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Error from "../Components/Error";
import Login from "../Login/Login";
import Shop from "../Shop/Shop";
import Details from "../Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Details",
        element: <Details></Details>,
        
      },
    ],
  },
]);

export default router;
