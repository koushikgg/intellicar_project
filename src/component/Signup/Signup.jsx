import { useNavigate } from "react-router-dom"
import "./Signup.scss"
import { useState } from "react"


function Signup() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSignUp(){
        const data = {
            userName:userName,
            email:email,
            age:age,
            gender:gender,
            number: number,
            password:password
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
                            <option value="18" style={{height:'20px'}}>18</option>
                            <option value="19" style={{height:'20px'}}>19</option>
                            <option value="20" style={{height:'20px'}}>20</option>
                            <option value="21" style={{height:'20px'}}>21</option>
                            <option value="22" style={{height:'20px'}}>22</option>
                            <option value="23" style={{height:'20px'}}>23</option>
                            <option value="24" style={{height:'20px'}}>24</option>
                            <option value="25" style={{height:'20px'}}>25</option>
                            <option value="26" style={{height:'20px'}}>26</option>
                            <option value="27" style={{height:'20px'}}>27</option>
                            <option value="28" style={{height:'20px'}}>28</option>
                            <option value="29" style={{height:'20px'}}>29</option>
                            <option value="30" style={{height:'20px'}}>30</option>
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
                    <button id="signup-btn1" onClick={handleSignUp()}>Sign Up</button>
                    <button id="signup-btn2" onClick={()=>navigate("/")}>Login</button>
                </div>
            </div>
        </>
    )
}
export default Signup