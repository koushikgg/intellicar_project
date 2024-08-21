import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import UserDetails from "./component/UserDetails/UserDetails";
import GameBoard from "./component/GameBoard/GameBoard";

function RoutingModule(){
    const appRoutes = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/signup",
            element:<Signup/>
        },
        {
            path:"/userdetails",
            element:<UserDetails/>
        },
        {
            path:"/gameboard",
            element:<GameBoard/>
        }
    ])
    return(
        <RouterProvider router={appRoutes}/>
    ) 
}
export default RoutingModule