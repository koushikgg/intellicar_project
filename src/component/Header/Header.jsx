import './Header.css'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const navigate= useNavigate()
    return (
        <>

            <div className="header-container">

                <div className='header-btn1' onClick={()=>navigate("/dashboard/newgame")}>Newgame</div>


                <div class="dropdown">
                    <button class="dropdown-btn">Joingame</button>
                    <div class="dropdown-content">
                        <span >Game 1</span>
                        <span >Game 2</span>
                        <span >Game 1</span>
                    </div>
                </div>


                <div class="dropdown2">
              

                       <button className='header-btn3'>
                       <p>P</p>
                        </button>

                        <div class="dropdown-content2">
                        <span>User: P</span>
                        <span>Logout</span>
                       
                    </div>

                

                </div>
                

            </div>

        </>
    )
}