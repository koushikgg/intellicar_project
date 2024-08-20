import { useEffect } from "react";
import "./UserDetails.scss"

function UserDetails() {
    useEffect(() => {
        getUserDetails()
    }, [])
    function getUserDetails() {

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
                        <p>:{ }</p>
                    </div>                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">Gender  </span>
                    <div className="userDetails-text-cnt">
                        <p>:{ }</p>
                    </div>                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">Age  </span>
                    <div className="userDetails-text-cnt">
                        <p>:{ }</p>
                    </div>                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">Email  </span>
                    <div className="userDetails-text-cnt">
                        <p>:{ }</p>
                    </div>                </div>
                <div className="userDetails-pass-cnt">
                    <span id="userDetails-name-txt">Phone Number  </span>
                    <div className="userDetails-text-cnt">
                        <p>:{ }</p>
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