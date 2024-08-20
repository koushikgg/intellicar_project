import { useNavigate } from "react-router-dom"
import "./Login.scss"
import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate= useNavigate()
    function handleLogin(){
        const data = {
            email: email,
            password:password
        }
        
    }
    return (
        <>  
            <div className="login-main-cnt">
                <div className="login-txt-cnt"><p>USER LOGIN</p></div>
                <div className="login-email-cnt">
                    <span id="login-email-txt">Email</span>
                    <input type="text" id="login-inp-txt" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="login-password-cnt">
                    <span id="login-email-txt">Password</span>
                    <input type="password" id="login-inp-txt" placeholder="********" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="login-btn-cnt">
                    <button id="login-btn1" onClick={()=>handleLogin()}>Login</button>
                    <button id="login-btn2" onClick={()=>navigate("/signup")}>SignUp</button>
                </div>
            </div>
        </>
    )
}
export default Login