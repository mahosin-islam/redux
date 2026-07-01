import { createBrowserRouter } from "react-router";

import Lagnding from "../Components/Home/Lagnding";
import MFS from "../Components/MFS/MFS";
import Banck from "../Components/Banck/Banck";
import Profile from "../Components/Profile/Profile";
import MainLayout from "../Layout/MainLayout";
import Card from "../Components/Card/Card";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Lagnding />
            },

            {
                path: "/",
                element: <Lagnding />
            },
            {
                path: "/successful",
                element: <MFS />,
            },
            {
                path: "/bank",
                element: <Banck />
            },
            {
                path: "/card",
                element:<Card/>
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    },
]);