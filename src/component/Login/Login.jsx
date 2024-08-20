import { useNavigate } from "react-router-dom"
import "./Login.scss"
import { useState } from "react"
import { loginApi } from "../../service/userService"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [resetPassword, setResetPassword] = useState('')
    async function handleLogin() {
        try {
            const data = {
                email: email,
                password: password
            }
            const res = await loginApi(data)
            localStorage.setItem('token', res.data.token)
            if (res.data.message == 'User signin successfully') {
                setTimeout(()=>{
                    navigate('/userdetails')
                },3000)
            }

        } catch (error) {
            console.log(error);
            alert(error.response.data.error)
        }
    }
    return (
        <>
            {resetPassword ?
                <div className="login-pass-main-cnt">
                    <div className="login-pass-res-txt-main">
                        <span>USER PASSWORD RESET</span>
                    </div>
                    <div className="login-pass-res-txt-inp-main">
                        <span>Enter your email address to send password</span><p></p>
                        <span>reset link</span>
                        <input type="text" placeholder="Enter your email"/>
                    </div>
                    <div className="login-pass-res-btn-main">
                        <button id="login-pass-res-btn1" onClick={()=>setResetPassword('')}>BACK</button>
                        <button id="login-pass-res-btn2">SEND MAIL</button>
                    </div>
                </div>
                :
                <div className="login-main-cnt">
                    <div className="login-txt-cnt"><p>USER LOGIN</p></div>
                    <div className="login-email-cnt">
                        <span id="login-email-txt">Email</span>
                        <input type="text" id="login-inp-txt" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="login-password-cnt">
                        <span id="login-email-txt">Password</span>
                        <input type="password" id="login-inp-txt" placeholder="********" onChange={(e) => setPassword(e.target.value)} />
                        <span id="login-forget-pass-txt" onClick={()=>setResetPassword('reset')}>Forget password?</span>
                    </div>
                    <div className="login-btn-cnt">
                        <button id="login-btn2" onClick={() => navigate("/signup")}>SignUp</button>
                        <button id="login-btn1" onClick={() => handleLogin()}>Login</button>
                    </div>
                </div>
            }
        </>
    )
}
export default Login