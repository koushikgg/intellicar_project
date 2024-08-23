import { useNavigate } from 'react-router-dom'
import './NewGame.scss'
import { useState } from 'react'
import { createNewGameApi } from '../../service/GameServices'
function NewGame() {
    const [gameMode,setGameMode] = useState("")
    const [gameName,setGameName] = useState("")
    const navigate = useNavigate()
    async function handleCreate(){

        try {
            const res = await createNewGameApi({boardId:gameName,level:gameMode})
            localStorage.setItem("boardData", JSON.stringify(res.data.data.board))
            localStorage.setItem('boardName', gameName)
            navigate('/dashboard/gameboard')
            localStorage.setItem('newBoard',gameName)
            
        } catch (error) {
            console.log(error.response.data);
            alert("Please Select Game Name and Mode")
            
        }
    }
    return (
        <div className="newGame-main-cnt">
            <div className="newGame-inner-main-cnt">

                <div className="newGame-header">
                    NEW GAME
                </div>
                <div className="newGame-input-cnt">
                    <div className='newGame-input-desc'>Enter the Game Name</div>
                    <div ><input className='newGame-input' type="text" onChange={(e)=> setGameName(e.target.value)} required/></div>
                </div>
                <div className='gameMode-cnt'>
                    <div className='gameMode-header'>Game Mode</div>
                    <div className='gameMode-opt'><select name="gameMode" id="gameMode" onChange={(e)=> setGameMode(e.target.value)}>
                        <option value=""></option>
                        <option className='easy-mode' value="easy">easy</option>
                        <option className='medium-mode' value="medium">medium</option>
                        <option className='hard-mode' value="hard">hard</option>
                        <option className='evil-mode' value="evil">evil</option>
                        </select></div>
                </div>
                <div className='newGame-btn-cnt'>
                    <button className='newGame-btn' onClick={()=>handleCreate()}>Create</button>
                </div>
            </div>

        </div>
    )
}

export default NewGame