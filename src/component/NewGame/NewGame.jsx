import { useNavigate } from 'react-router-dom'
import './NewGame.scss'
import { useState } from 'react'
function NewGame() {
    const [gameMode,setGameMode] = useState("")
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
                <div className='gameMode-cnt'>
                    <div className='gameMode-header'>Game Mode</div>
                    <div className='gameMode-opt'><select name="gameMode" id="gameMode" onChange={(e)=> setGameMode(e.target.value)}>
                        {/* <option value=""></option> */}
                        <option className='easy-mode' value="easy">easy</option>
                        <option className='medium-mode' value="medium">medium</option>
                        <option className='hard-mode' value="hard">hard</option>
                        <option className='evil-mode' value="evil">evil</option>
                        </select></div>
                </div>
                <div className='newGame-btn-cnt'>
                    <button className='newGame-btn' onClick={()=>navigate('/dashboard/gameboard')}>Create</button>
                </div>
            </div>

        </div>
    )
}

export default NewGame