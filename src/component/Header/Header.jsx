import { useEffect, useState } from 'react';
import { getBoardApi, getGamesApi } from '../../service/GameServices';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { getUserInfoApi } from '../../service/userService';

export default function Header() {
    const navigate = useNavigate();
    const [gamesList, setGamesList] = useState([]);
    const [validname, setValidname] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        getUserDetails();
    }, []);

    useEffect(() => {
        async function fetchGames() {
            try {
                const res = await getGamesApi();
                setGamesList(res?.data?.data || []);
            } catch (error) {
                console.error("Error fetching games:", error);
            }
        }
        const intervalId = setInterval(fetchGames,2000)
        return () =>clearInterval(intervalId)
        
    }, []);

    useEffect(() => {
        if (!validname) return;
        
        const fetchBoardDetails = async () => {
            try {
                const res = await getBoardApi(localStorage.getItem('newBoard',));
                localStorage.setItem("boardData", JSON.stringify(res.data.data.board));
                localStorage.setItem('boardName', validname);
            } catch (error) {
                console.error("Error fetching board details:", error);
            }
        };

        fetchBoardDetails();
        const intervalId = setInterval(fetchBoardDetails, 1000);

        return () => clearInterval(intervalId);

    }, [validname, navigate]);

    function handleGameClick(name) {
        setValidname(name); 
        navigate('/dashboard/gameboard'); 
        localStorage.setItem('newBoard',name)
    }

    function handleLogout() {
        localStorage.removeItem('token')
        navigate('/');
    }

    async function getUserDetails() {
        try {
            const res = await getUserInfoApi();
            setUser(res.data.data);
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.error || 'An error occurred');
        }
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
                    {gamesList?.map((game, index) => (
                        <span onClick={() => handleGameClick(game)} key={index}>{game}</span>
                    ))}
                </div>
            </div>

            <div className="dropdown2">
                <button className="header-btn3">
                    <p>{(user?.username) ? user?.username[0] : 'P'}</p>
                </button>
                <div className="dropdown-content2">
                    <span> {(user?.username) ? `User: ${user?.username }`: 'Please Login'}</span>
                    <span onClick={handleLogout}>Logout</span>
                </div>
            </div>
        </div>
    );
}
