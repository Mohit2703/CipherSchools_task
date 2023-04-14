import React, { useEffect, useState } from "react";
import './User.css'
import userLogo from '../../assets/userLogo.webp';
import { localhost } from "../../config";
import { BsFillPencilFill } from "react-icons/bs";
import axios from "axios";

const User = () => {
    const [load, setLoad] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [logo, setLogo] = useState();
    const [follower, setFollower] = useState(0);
    useEffect(() => {
        setLoad(true);
        const link = localhost + `auth/userDetails`;
        axios.get(link, { headers: { 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzcwYzExYmU0ODJmYzQ5NWY1MGJmYSIsImlhdCI6MTY4MTMyOTE4NX0.GYt0C8s7UlmKlZh6Vwscu3dovoaTj4Rn9KRHwgHA5W4' } }).then((response) => {
            const base64 = response.data.userDetail.profileImg.data.data.toString('base64');
            let image = `data:` + response.data.userDetail.profileImg.contentType + `;base64,$(` + base64 + `)`;
            setFirstName(response.data.userDetail.firstName);
            setLastName(response.data.userDetail.lastName);
            setMail(response.data.userDetail.email);
            setLogo(image);
            setFollower(response.data.userDetail.followers)
        }).catch((err) => {
            console.log(err);
        })
        setLoad(false);
        // console.log(logo);
    }, []);
    return (
        <div>
            <div className="loading">
                {load && (
                    <div>
                        <img src={userLogo} alt="" />
                    </div>
                )}
            </div>
            <div className="userBox">
                {!load && (
                    <div className="userback">
                        <div className="userProfileBox">
                            <div className="userImg">
                                <img src={logo ? logo : userLogo} alt="" className="imgUser" />
                            </div>
                            <div className="editUser">
                                <BsFillPencilFill />
                            </div>
                        </div>
                        <div className="userDetails">
                            <div className="leftUserDetail">
                                <h2 className="greeting">
                                    Hello,
                                </h2>
                                <h1 className="userName">
                                    {firstName} {lastName}
                                </h1>
                                <h2 className="userEmail">
                                    {mail}
                                </h2>
                            </div>
                            <div className="rightUserDetail">
                                <div className="followers">
                                    <span> {follower} </span>
                                    Followers
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default User;