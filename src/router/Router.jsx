import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Details from "../components/Details/Details";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
            },
        ]
    },
    {
        path: "/details",
        element: <Details />,
        loader: () => fetch("/public/news.json")
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);
