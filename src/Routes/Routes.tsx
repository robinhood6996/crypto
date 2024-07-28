import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import Layout from "../component/Layout.tsx";
import Home from "../pages/Home.tsx";
import SignIn from "../pages/SignIn/SignIn.tsx";
import Order from "../pages/Order.tsx";
import Market from "../pages/Market.tsx";
import Asset from "../pages/Asset.tsx";
import Account from "../pages/Account.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout />
        ),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/orders",
                element: <Order />
            },
            {
                path: "/market",
                element: <Market />
            },
            {
                path: "/assets",
                element: <Asset />
            },
            {
                path: "/account",
                element: <Account />
            }
        ]
    },
    {
        path: "/sign-in",
        element: <SignIn />
    }
]);

export default router;