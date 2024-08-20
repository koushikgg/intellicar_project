import { useNavigate } from "react-router-dom"
import "./Signup.scss"
import { memo, useState } from "react"
import { signupApi } from "../../service/userService"


function Signup() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    

    async function handleSignUp(){
        try {
            const data = {
                username:userName,
                email:email,
                age:age,
                gender:gender,
                mobile: number,
                password:password
            }
            const res = await signupApi(data)
            console.log(res.data.message);
            setMessage(res.data.message)
            if (res.data.message=='User created successfully'){
                navigate('/')
            }
            
        } catch (error) {
            console.log(error);
            alert(error.response.data.error)
        }
        
    }
    return (
        <>
            <div className="signup-main-cnt">
                <div className="signup-txt-cnt"><p>USER SIGNUP</p></div>
                <div className="signup-name-cnt">
                    <span id="signup-name-txt">User Name</span>
                    <input type="text" id="signup-inp-txt" placeholder="Enter your name" onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className="signup-number-cnt">
                    <span id="signup-name-txt">Mobile Number</span>
                    <input type="text" id="signup-inp-txt" placeholder="Enter mobile number" onChange={(e)=>setNumber(e.target.value)}/>
                </div>
                <div className="signup-gender-age-cnt">
                    <div className="signup-gender-cnt">
                        <label for="gender" id="signup-name-txt">Gender</label>
                        <select name="gender" id="gender" onChange={(e)=>setGender(e.target.value)}>
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="signup-age-cnt">
                        <span id="signup-name-txt">Age</span>
                        <select name="age" id="age" onChange={(e)=>setAge(e.target.value)}>
                            <option value=""></option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                </div>
                <div className="signup-email-pass-cnt">
                    <div className="signup-email-cnt">
                        <span id="signup-name-txt">Email</span>
                        <input type="text" id="signup-inp-txt" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="signup-pass-cnt">
                        <span id="signup-name-txt">Password</span>
                        <input type="password" id="signup-inp-txt" placeholder="********" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="signup-btn-cnt">
                    <button id="signup-btn2" onClick={()=>navigate("/")}>Login</button>
                    <button id="signup-btn1" onClick={()=>handleSignUp()}>Sign Up</button>
                </div>
                <div className="signup-msge-cnt">
                    <p style={{color:"green"}}>{message}</p>
                </div>
            </div>
        </>
    )
}
export default Signup