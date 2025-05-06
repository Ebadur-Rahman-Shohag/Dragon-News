import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Details from "../pages/Details";
import News from "../components/News/News";
import Auth from "../pages/Auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/category/:id",
                element: <News />,
                loader: () => fetch("/news.json"),
            }
        ],
    },
    {
        path: "/details/:id",
        element: <Details />,
        loader: () => fetch("/news.json"),
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "/auth/login",
                element: <Login />
            },
            {
                path: "/auth/register",
                element: <Register />
            }
        ]
    },


]);
