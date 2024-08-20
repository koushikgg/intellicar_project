import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import UserDetails from "./component/UserDetails/UserDetails";

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
        }
    ])
    return(
        <RouterProvider router={appRoutes}/>
    ) 
}
export default RoutingModule