import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import UserDetails from "./component/UserDetails/UserDetails";
import GameBoard from "./component/GameBoard/GameBoard";
import Header from "./component/Header/Header";
import DashBoard from "./component/DashBoard/DashBoard";
import NewGame from "./component/NewGame/NewGame";

function RoutingModule() {
    const appRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/dashboard",
            element: <DashBoard />,
            children: [
                {
                    path: "gameboard",
                    element: <GameBoard />
                }, {
                    path: "newgame",
                    element: <NewGame />
                },
            ]
        },
        {
            path: "/userdetails",
            element: <UserDetails />
        },

    ])
    return (
        <RouterProvider router={appRoutes} />
    )
}
export default RoutingModule