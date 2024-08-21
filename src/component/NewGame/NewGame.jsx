import { useNavigate } from 'react-router-dom'
import './NewGame.scss'
function NewGame() {
    const navigate = useNavigate()
    return (
        <div className="newGame-main-cnt">
            <div className="newGame-inner-main-cnt">

                <div className="newGame-header">
                    NEW GAME
                </div>
                <div className="newGame-input-cnt">
                    <div className='newGame-input-desc'>Enter the Game Name</div>
                    <div ><input className='newGame-input' type="text" /></div>
                </div>
                <div className='newGame-btn-cnt'>
                    <button className='newGame-btn' onClick={()=>navigate('/dashboard/gameboard')}>Create</button>
                </div>
            </div>

        </div>
    )
}

export default NewGame