import axios from "axios";

export async function loginApi(data){
    return await axios.post('http://192.168.74.11:3000/api/v1/users/signin',data)
}

export async function signupApi(data){
    return await axios.post('http://192.168.74.11:3000/api/v1/users/signup',data)
}

export async function getUserInfoApi(){
    return await axios.get('http://192.168.74.11:3000/api/v1/users/getuserinfo',{ headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }})
}