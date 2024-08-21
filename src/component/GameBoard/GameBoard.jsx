import React, { useEffect, useState } from 'react';
import './GameBoard.scss';

function GameBoard() {
    const [bgColor, setBgColor] = useState(null)
    const [addCellValue, setAddCellValue] = useState(null)
    const [cellValues, setCellValues] = useState(() => {
        const cellsData = JSON.parse(localStorage.getItem('cellValues')) || [];
        return cellsData;
    });
    const cells = [];

    useEffect(() => {
        localStorage.setItem('cellValues', JSON.stringify(cellValues));
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

    for (let i = 1; i <= 90; i++) {
        if (i % 10 === 0) continue;

        let className = 'gameboard-cell-cnt';

        if (((`${i}`.startsWith('2')) && (`${i}`.length > 1)) || ((`${i}`.startsWith('5')) && (`${i}`.length > 1))) {
            className += ' cell-border-bottom';
        }
        if ((`${i}`.endsWith('3')) || (`${i}`.endsWith('6'))) {
            className += ' cell-border-right';
        }
        if (i === bgColor) {
            className += ' backgroundColorChange';
        }
        const assignValue = cellValues?.find(item => item.key === i)
        if (assignValue?.key) {
            className += ' valuebackgroundColorChange';
        }

        cells.push(
            <div key={i} className={className} onClick={() => backgroundColorChange(i)} >
                {assignValue?.value}
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
