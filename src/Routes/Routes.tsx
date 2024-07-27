import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout.tsx";
import Home from "../pages/Home.tsx";
import SignIn from "../pages/SignIn/SignIn.tsx";
import CurrentOrders from "../pages/Orders/CurrentOrders.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <CurrentOrders />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default router;
