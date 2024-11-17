import { createBrowserRouter, Navigate } from "react-router-dom";
import LazyRoute from "../components/LazyRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyRoute loader={() => import("../pages/CommonLayout")} />,
    children: [
      {
        index: true,
        element: <LazyRoute loader={() => import("../pages/Home")} />,
      },
      {
        path: "aboutUs",
        element: <LazyRoute loader={() => import("../pages/AboutUs")} />,
      },
      {
        path: "adoptions",
        children: [
          {
            path: "",
            element: <LazyRoute loader={() => import("../pages/Adoptions")} />,
          },
          {
            path: "register",
            element: (
              <LazyRoute loader={() => import("../pages/PetRegister")} />
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
