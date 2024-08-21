import './NewGame.scss'
function NewGame(){
    return(
        <div className="newGame-main-cnt">

            <div className="newGame-header">
                NEW GAME
            </div>
            <div className="newGame-input-cnt">
                <div className='newGame-input-desc'>Enter the Game Name</div>
                <div ><input className='newGame-input' type="text" /></div>
            </div>
            <div className='newGame-btn-cnt'>
                <button className='newGame-btn'>Create</button>
            </div>
        </div>
    )
}

export default NewGame