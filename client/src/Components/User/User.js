import React from "react";
import './User.css'
import userLogo from '../../assets/userLogo.webp';

const User = () => {
    return (
        <div className="userBox">
            <div className="userback">
                <div className="userProfileBox">
                    <div className="userImg">
                        <img src={userLogo} alt="" className="imgUser" />
                    </div>
                </div>
                <div className="userDetails">
                    <div className="leftUserDetail">
                        <h2 className="greeting">
                            Hello,
                        </h2>
                        <h1 className="userName">
                            Mohit Agrawal
                        </h1>
                        <h2 className="userEmail">
                            mohitmittal2703@gmail.com
                        </h2>
                    </div>
                    <div className="rightUserDetail">
                        <div className="followers">
                            <span>0</span>
                            Followers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;