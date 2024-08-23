import axios from "axios";


export async function getGamesApi(){
    return await axios.get('http://192.168.74.140:3000/api/v1/games/getgames',{ headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
}



export async function getBoardApi(name) {
    return await axios.get(`http://192.168.74.140:3000/api/v1/games/getboard/${name}`, {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
    }});
}

export async function createNewGameApi(data){
    return await axios.post('http://192.168.74.140:3000/api/v1/games/newgame',data,{ headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
}

export async function updateMoveApi(data){
    return await axios.post('http://192.168.74.140:3000/api/v1/games/move',data,{ headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
}

export async function undoApi(data){
    return await axios.post('http://192.168.74.140:3000/api/v1/games/undo',data,{ headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
}

export async function getHistoryApi(name) {
    return await axios.get(`http://192.168.74.140:3000/api/v1/games/history/${name}`, {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
    }});
}