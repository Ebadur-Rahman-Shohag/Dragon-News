import { createBrowserRouter } from "react-router";
import App from "../App";
import HomeLayout from "../Layout/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomeLayout />,
            },
            {
                path: "/about",
                element: <div>About</div>
            }
        ]
    },
]);
