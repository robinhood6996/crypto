import {createBrowserRouter, Link, Outlet} from "react-router-dom";
import Layout from "../component/Layout.tsx";
import Home from "../pages/Home.tsx";
import SignIn from "../pages/SignIn/SignIn.tsx";

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
            }
        ]
    },
    {
        path: "/sign-in",
        element: <SignIn />
    }
]);

export default router;