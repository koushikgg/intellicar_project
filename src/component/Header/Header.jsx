import { useEffect, useState } from 'react';
import { getGamesApi } from '../../service/GameServices';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [gamesList, setGamesList] = useState([])


    useEffect(() => {
        async function fetchGames() {
            try {
                const res = await getGamesApi();
                // console.log(res?.data?.data);
                setGamesList(res?.data?.data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        }

        fetchGames();
    }, []); 

    async function getBoardDetails(index){
        const res = await getGamesApi();
        localStorage.setItem("boardData",JSON.stringify(res.data.data))
        localStorage.setItem('boardName',index)
        navigate('/dashboard/gameboard')
    }

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="header-container">
            <div className="header-btn1" onClick={() => navigate("/dashboard")}>
                Home
            </div>
            <div className="header-btn2" >
                Newgame
            </div>


            <div className="dropdown">
                <button className="dropdown-btn">Joingame</button>
                <div className="dropdown-content">
                    {gamesList.map((game, index) => (
                        <span onClick={()=>getBoardDetails(game)} key={index}>{game}</span>
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
