import React, { useEffect, useState } from 'react';
import './GameBoard.scss';
import { getBoardApi, undoApi, updateMoveApi } from '../../service/GameServices';
import { useNavigate } from 'react-router-dom';

function GameBoard() {
    const [bgColor, setBgColor] = useState(null)
    const [addCellValue, setAddCellValue] = useState(null)
    const [row, setRow] = useState(null)
    const [coloum, setColoum] = useState(null)
    const navigate = useNavigate()
    const [undoCount, setUndoCount] = useState(0)
    const [cellValues, setCellValues] = useState(() => {
        const cellsData = JSON.parse(localStorage.getItem('boardData')) || [];
        return cellsData;
    });
    const [boardName, setBoardName] = useState(() => {
        const boardData = (localStorage.getItem('boardName')) || '';
        return boardData;
    })
    const [wrongMoves, setWrongMoves] = useState(false)
    const cells = [];
    let countMoves = 0


    useEffect(() => {
        localStorage.setItem('boardData', JSON.stringify(cellValues));
    }, [cellValues], [wrongMoves]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedCellsData = JSON.parse(localStorage.getItem('boardData')) || [];
            setCellValues(updatedCellsData);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function backgroundColorChange(i, row, coloum) {
        setBgColor(i)
        setAddCellValue(i)
        setRow(row)
        setColoum(coloum)
    }

    async function handleUndo() {
        try {
            await undoApi({ boardId: localStorage.getItem('boardName') })
            const res = await getBoardApi(localStorage.getItem('boardName'))
            setCellValues(res.data.data.board)
            // (localStorage.setItem('boardData',JSON.stringify(res.data.data.board)))
            const count = undoCount + 1
            setUndoCount(count)
            setBgColor(null)

        } catch (error) {
            console.log(error);

        }
    }

    const number = []
    for (let i = 1; i <= 9; i++) {
        number.push(
            <div className='gameboard-number-inp' onClick={() => addTheValue(i)}>
                <p>{i}</p>
            </div>
        )
    }



    async function addTheValue(i) {
        if (addCellValue !== null && bgColor !== null) {
            try {
                if (cellValues[row][coloum] === 0) {
                    console.log({ boardId: localStorage.getItem('boardName'), row: row, coloum: coloum, value: i });

                    const res = await updateMoveApi({ boardId: localStorage.getItem('boardName'), row: row, coloum: coloum, value: i });
                    setBgColor(null)
                    const updatedCellValues = cellValues.map(row => [...row]);
                    updatedCellValues[row][coloum] = i;
                    setCellValues(updatedCellValues);
                }

            } catch (error) {
                console.log(error.response.data.error);
                if (error.response.data.error === 'Invalid move according to Sudoku rules') {
                    setWrongMoves(true)
                }
            }
        }
    }


    for (let i = 0; i <= 90; i++) {
        if (i > 0) {
            if (`${i}`.includes(9)) continue;
        }

        let row = null
        let col = null
        let assignValue = null;
        let className = 'gameboard-cell-cnt';
        if (cellValues) {
            if (`${i}`.length < 2) {
                row = 0;
                col = i
                assignValue = cellValues[row][col]
            } else {
                row = parseInt(`${i}`[0])
                col = parseInt(`${i}`[1])
                assignValue = cellValues[row][col]
            }
        }

        if (((`${i}`.startsWith('2')) && (`${i}`.length > 1)) || ((`${i}`.startsWith('5')) && (`${i}`.length > 1))) {
            className += ' cell-border-bottom';
        }
        if ((`${i}`.endsWith('2')) || (`${i}`.endsWith('5'))) {
            className += ' cell-border-right';
        }
        if (i === bgColor) {
            className += ' backgroundColorChange';
        }

        if (assignValue > 0) {
            className += ' valuebackgroundColorChange';
            countMoves += 1

        }

        cells.push(
            <div key={i} className={className} onClick={() => backgroundColorChange(i, row, col)} >
                {assignValue === 0 ? '' : assignValue}
            </div>
        );
    }



    const handleNavigate = () => {
        navigate('/')
        navigate("/dashboard/newgame")

    }

    const handleClose = () => {
        setWrongMoves(false)
        setBgColor(null)
    }
<div className="gameOver-inner-main-cnt">
                        <div className="gameOver-header">
                            Game Alert
                        </div>
                        <div className="gameOver-input-cnt">
                            <div className='gameOver-input-desc'>You have made Wrong Move</div>
                        </div>

                        <div className='gameOver-header'><button className='gameOver-header-btn' onClick={() => handleClose()} >Close</button></div>

                    </div>
    return (
        <>
            {wrongMoves || countMoves === 81 ?
                <div className="gameOver-main-cnt">
                    {countMoves === 81 ?
                        <div className="gamewon-inner-main-cnt">
                            <div className="gameOver-header">
                                Game Alert
                            </div>
                            <div className="gameOver-input-cnt">
                                <div className='gameOver-input-desc'>Congratulations...!!!</div>
                                <p>You Won</p>
                            </div>

                            <div className='gameOver-header'><button className='gameOver-header-btn  gamewon-header-btn' onClick={() => navigate('/dashboard')} >Close</button></div>

                        </div> :
                        <div className="gameOver-inner-main-cnt">
                            <div className="gameOver-header">
                                Game Alert
                            </div>
                            <div className="gameOver-input-cnt">
                                <div className='gameOver-input-desc'>You have made Wrong Move</div>
                            </div>

                            <div className='gameOver-header'><button className='gameOver-header-btn' onClick={() => handleClose()} >Close</button></div>

                        </div>
                    }

                </div> : ''
            }
            <center>
                <div className="gameboard-main-cnt">
                    <div className="gameboard-table-main-cnt">
                        {cells}
                    </div>
                    <div className='gameboard-number-inp-cnt'>
                        {number}
                    </div>
                    <div className='gameboard-number-inp-btn'>
                        <button onClick={() => handleUndo()}>Undo</button>
                    </div>
                </div>
                <div className='gameboard-history-display-main-cnt'>

                </div>
            </center>
        </>
    );
}

export default GameBoard;
