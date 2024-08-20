import { useNavigate } from "react-router-dom"
import "./Login.scss"
import { useState } from "react"
import { loginApi } from "../../service/userService"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate= useNavigate()
    async function handleLogin(){
        try {
            const data = {
                email: email,
                password:password
            }
            const res = await loginApi(data)
            localStorage.setItem('token',res.data.token)
            if (res.data.message=='User signin successfully'){
                navigate('/userdetails')
            }
            
        } catch (error) {
            console.log(error);
            alert(error.response.data.error)
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