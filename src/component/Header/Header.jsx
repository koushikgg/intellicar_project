import { useEffect, useState } from 'react';
import { getBoardApi, getGamesApi } from '../../service/GameServices';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [gamesList, setGamesList] = useState([])


    useEffect(() => {
        async function fetchGames() {
            try {
                const res = await getGamesApi();
                console.log(res);
                setGamesList(res?.data?.data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        }

        fetchGames();
    }, []);

    async function getBoardDetails(name) {
        try {            
            const res = await getBoardApi(name );
            console.log(res.data.data.board);

            localStorage.setItem("boardData", JSON.stringify(res.data.data.board))
            localStorage.setItem('boardName', name)
            navigate('/dashboard/gameboard')

        } catch (error) {
            console.log(error);

        }
    }

    function handleLogout() {
        console.log('logout');
        localStorage.removeItem('token');
        localStorage.removeItem("boardData")
        localStorage.removeItem('boardName')
        navigate('/');
    }

    return (
        <div className="header-container">
            <div className="header-btn1" onClick={() => navigate("/dashboard")}>
                Home
            </div>
            <div className="header-btn2" onClick={() => navigate("/dashboard/newgame")}>
                Newgame
            </div>


            <div className="dropdown">
                <button className="dropdown-btn">Joingame</button>
                <div className="dropdown-content">
                    {gamesList.map((game, index) => (
                        <span onClick={() => getBoardDetails(game)} key={index}>{game}</span>
                    ))}
                </div>
            </div>

            <div className="dropdown2">
                <button className="header-btn3">
                    <p>P</p>
                </button>
                <div className="dropdown-content2">
                    <span>User: P</span>
                    <span onClick={handleLogout}>Logout</span>
                </div>
            </div>
        </div>
    );
}
