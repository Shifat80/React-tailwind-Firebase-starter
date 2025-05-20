import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/layout/HomeLayout";
import Home from "../pages/Home"; // Use your existing Home page
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
]);

export default router;
