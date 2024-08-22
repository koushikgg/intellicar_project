import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function DashBoard() {
    return (
        <>
            <Header />
            <div style={{width:'100%',height:'80vh',display:"flex",alignItems:'center',justifyContent:"center"}}>
            <h1 style={{fontSize:'50px'}}>WelCome..!!</h1>

            </div>
            <Outlet/>

        </>
    )
}

export default DashBoard;