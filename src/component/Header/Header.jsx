import { useEffect, useState } from 'react';
import { getBoardApi, getGamesApi } from '../../service/GameServices';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { getUserInfoApi } from '../../service/userService';

export default function Header() {
    const navigate = useNavigate();
    const [gamesList, setGamesList] = useState([])
    const [validname, setValidname] = useState("");
    const [user, setUser] = useState({})


    useEffect(() => {
        getUserDetails()
    }, [])


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
                console.log(res);
                
                console.log("Updated board data in local storage for game:", validname);
            } catch (error) {
                console.error("Error fetching board details:", error);
            }
        };

        fetchBoardDetails();

        const intervalId = setInterval(fetchBoardDetails, 1000);

        return () => clearInterval(intervalId);
    }, [validname]);

    async function getBoardDetails(name) {
        setValidname(name)
        localStorage.setItem('boardName', name);

        // try {            
        //     const res = await getBoardApi(name );

        //     localStorage.setItem("boardData", JSON.stringify(res.data.data.board))
        //     localStorage.setItem('boardName', name)
        //     navigate('/dashboard/gameboard')
        //     window.location.reload();

        // } catch (error) {
        //     console.log(error);

        // }
    }

    function handleLogout() {
        console.log('logout');
        localStorage.clear()
        navigate('/');
    }


    async function getUserDetails() {
        try {
            const res = await getUserInfoApi();
            console.log(res.data.data);
            setUser(res.data.data)

        } catch (error) {
            console.log(error);
            alert(error.response.data.error)
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
                    <Link to="/dashboard/gameboard">
                        {gamesList.map((game, index) => (
                            <span onClick={() => getBoardDetails(game)} key={index}>{game}</span>
                        ))}
                    </Link>
                </div>
            </div>

            <div className="dropdown2">
                <button className="header-btn3">
                    <p>{(user?.username) ? user?.username[0] : 'P'}</p>
                </button>
                <div className="dropdown-content2">
                    <span>User: {(user?.username) ? user?.username : 'User Name'}</span>
                    <span onClick={handleLogout}>Logout</span>
                </div>
            </div>
        </div>
    );
}
