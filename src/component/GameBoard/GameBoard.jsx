import React, { useEffect, useState } from 'react';
import './GameBoard.scss';

function GameBoard() {
    const [bgColor, setBgColor] = useState(null)
    const [addCellValue, setAddCellValue] = useState(null)
    const [cellValues, setCellValues] = useState(() => {
        const cellsData = JSON.parse(localStorage.getItem('boardData')) || [];
        return cellsData;
    });
    const [boardName, setBoardName] = useState(() => {
        const boardData = (localStorage.getItem('boardName')) || '';
        return boardData;
    })
    const cells = [];


    useEffect(() => {
        localStorage.setItem('boardData', JSON.stringify(cellValues));
    }, [cellValues]);

    function backgroundColorChange(i) {
        setBgColor(i)
        setAddCellValue(i)
    }

    const number = []
    for (let i = 1; i <= 9; i++) {
        number.push(
            <div className='gameboard-number-inp' onClick={() => addTheValue(i)}>
                <p>{i}</p>
            </div>
        )
    }

    function addTheValue(i) {
        if (addCellValue) {
            const updatedCellValues = [...cellValues, { key: addCellValue, value: i }];
            setCellValues(updatedCellValues);
        }
    }

    for (let i = 0; i <= 90; i++) {
        if (i>0){
            if (`${i}`.includes(9)) continue;
        }
        console.log(i);
        
        let row = null
        let col = null
        let assignValue =null;
        let className = 'gameboard-cell-cnt';
        if (cellValues) {
            if (`${i}`.length < 2) {
                row = 0;
                col = i
                assignValue = cellValues[boardName][row][col]
                console.log(assignValue);
            }else{
                row=parseInt(`${i}`[0])
                col=parseInt(`${i}`[1])
                assignValue = cellValues[boardName][row][col]
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



        if (assignValue) {
            className += ' valuebackgroundColorChange';
        }

        cells.push(
            <div key={i} className={className} onClick={() => backgroundColorChange(i)} >
                {assignValue === 0 ? '' : assignValue}
            </div>
        );
    }
    return (
        <div className="gameboard-main-cnt">
            <div className="gameboard-table-main-cnt">
                {cells}
            </div>
            <div className='gameboard-number-inp-cnt'>
                {number}
            </div>
            <div className='gameboard-number-inp-btn'>
                <button>Undo</button>
            </div>
        </div>
    );
}

export default GameBoard;
