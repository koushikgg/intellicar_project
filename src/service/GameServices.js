import axios from "axios";


export async function getGamesApi(){
    return await axios.get('http://192.168.74.11:3000/api/v1/games/getgames',{ headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
}


