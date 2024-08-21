import { useEffect, useState } from 'react';
import { getGamesApi } from '../../service/GameServices';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        async function fetchGames() {
            try {
                const res = await getGamesApi();
                const data = Object.keys(res?.data?.data || {});
                setGamesList(data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        }

        fetchGames();
    }, []); 

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="header-container">
            <div className="header-btn1" onClick={() => navigate("/dashboard/newgame")}>
                Newgame
            </div>

            <div className="dropdown">
                <button className="dropdown-btn">Joingame</button>
                <div className="dropdown-content">
                    {gamesList.map((game, index) => (
                        <span key={index}>{game}</span>
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
