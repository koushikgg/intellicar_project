import { useEffect, useState } from "react";
import "./UserDetails.scss"
import { getUserInfoApi } from "../../service/userService";

function UserDetails() {
    const [user , setUser] = useState({})
    useEffect(() => {
        getUserDetails()
    }, [])
    async function getUserDetails() {
        const res = await getUserInfoApi();
        console.log(res.data.data);
        setUser(res.data.data)
        
    }
    return (
        <>
            <h1 id="userdetails-txt">User Details:</h1>
            <div className="userDetails-main-cnt">
                <div className="userDetails-profile-cnt">
                    <div className="userDetails-profile-inner-cnt">
                        <p>P</p>
                    </div>
                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">User Name  </span>
                    <div className="userDetails-text-cnt">
                        <p>: {user?.username}</p>
                    </div>                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">Gender  </span>
                    <div className="userDetails-text-cnt">
                        <p>: {user?.gender}</p>
                    </div>                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">Age  </span>
                    <div className="userDetails-text-cnt">
                        <p>: {user?.age}</p>
                    </div>                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">Email  </span>
                    <div className="userDetails-text-cnt">
                        <p>: {user?.email}</p>
                    </div>                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">Phone Number  </span>
                    <div className="userDetails-text-cnt">
                        <p>: {user?.mobile }</p>
                    </div>
                </div>
                <div className="userDetails-btn-cnt">
                    <button id="userdetails-btn"> Save Changes</button>
                </div>
            </div>
        </>
    )
}
export default UserDetails;