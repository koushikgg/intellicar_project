import { useEffect, useState } from 'react';
import { getBoardApi, getGamesApi } from '../../service/GameServices';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [gamesList, setGamesList] = useState([]);
    const [validname, setValidname] = useState(""); 

    useEffect(() => {
        async function fetchGames() {
            try {
                const res = await getGamesApi();
                setGamesList(res?.data?.data);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        }

        fetchGames();
    }, []);

    useEffect(() => {
        if (!validname) return; 

        const fetchBoardDetails = async () => {
            try {
                const res = await getBoardApi(validname);
                localStorage.setItem("boardData", JSON.stringify(res.data.data.board));
                localStorage.setItem('boardName', validname);
                console.log("Updated board data in local storage for game:", validname);
            } catch (error) {
                console.error("Error fetching board details:", error);
            }
        };

        fetchBoardDetails(); 

        const intervalId = setInterval(fetchBoardDetails, 2000);

        return () => clearInterval(intervalId); 
    }, [validname]); 

    async function getBoardDetails(name) {
        setValidname(name); 
        // navigate('/dashboard/gameboard');
    }

    function handleLogout() {
        console.log('logout');
        localStorage.removeItem('token');
        localStorage.removeItem("boardData");
        localStorage.removeItem('boardName');
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

                    <Link to="/dashboard/gameboard">
                    {gamesList.map((game, index) => (
                        <span onClick={() => getBoardDetails(game)} key={index}>{game}</span>
                    ))}
                    </Link>
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
