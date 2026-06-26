import {
  createBrowserRouter,
} from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import Home from "../pages/Home";
import Colleges from "../pages/Colleges";
import CollegesDetail from "../pages/CollegesDetail";
import Compare from "../pages/compare";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Saved from "../pages/Saved";
import NotFound from "../pages/NotFound";

export const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/register",
      element: <Signup />,
    },

    {
      path: "/colleges",
      element: <Colleges />,
    },

    {
      path: "/college/:id",
      element: <CollegesDetail />,
    },

    {
      path: "/colleges/:id",
      element: <CollegesDetail />,
    },

    {
      path: "/compare",
      element: <Compare />,
    },
    {
      path: "/profile/saved",
      element: (
        <ProtectedRoute>
          <Saved />
        </ProtectedRoute>
      ),
    },
    {
      path: "/saved",
      element: (
        <ProtectedRoute>
          <Saved />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
