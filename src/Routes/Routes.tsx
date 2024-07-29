import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/Layout.tsx";
import Home from "../pages/Home.tsx";
import SignIn from "../pages/SignIn/SignIn.tsx";
import CurrentOrders from "../component/Orders/CurrentOrders.tsx";
import Account from "../pages/Account/Account.tsx";
import Assets from "../pages/Assets/Assets.tsx";
import Market from "../pages/Market/Market.tsx";
import Bindings from "../pages/Bindings/Bindings.tsx";
import Withdraw from "../pages/Withdraw/Withdraw.tsx";
import Setting from "../pages/Settings/Setting.tsx";

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
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/assets",
        element: <Assets />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/bindings",
        element: <Bindings />,
      },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },
      {
        path: "/settings",
        element: <Setting />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

export default router;
