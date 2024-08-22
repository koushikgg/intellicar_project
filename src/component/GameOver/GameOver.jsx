import { useNavigate } from 'react-router-dom'
import './GameOver.scss'
function GameOver() {

    


    return (

        <div className="gameOver-main-cnt">
            <div className="gameOver-inner-main-cnt">
                <div className="gameOver-header">
                    Game Over
                </div>
                <div className="gameOver-input-cnt">
                    <div className='gameOver-input-desc'>You have made 3 mistakes and lost this game</div>
                </div>

                <div className='gameOver-header'><button className='gameOver-header-btn' >Second Chance</button></div>

                <div className='gameOver-btn-cnt' >
                    <button >New Game</button>
                </div>
            </div>

        </div>
    )
}

export default GameOver;