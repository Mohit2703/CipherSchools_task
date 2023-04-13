import React from "react";
import { AiFillCopyrightCircle, AiFillHome, AiOutlineLogout } from "react-icons/ai";
import './SideBar.css';
import { GiBookshelf } from "react-icons/gi";
import { FaCompass } from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri"
import { MdDashboard, MdFeedback } from "react-icons/md"
import { BsDiscord } from "react-icons/bs";
import { BiDirections } from "react-icons/bi"

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sideTop">
                <div className="home sideOpt">
                    <div className="logoSide">
                        <AiFillHome />
                    </div>
                    <div className="textSide">
                        Home
                    </div>
                </div>
                <div className="courses sideOpt">
                    <div className="logoSide">
                        <GiBookshelf />
                    </div>
                    <div className="textSide">
                        Courses
                    </div>
                </div>
                <div className="trending sideOpt">
                    <div className="logoSide">
                        <FaCompass />
                    </div>
                    <div className="textSide">
                        Treanding
                    </div>
                </div>
                <div className="follow sideOpt">
                    <div className="logoSide">
                        <RiUserFollowFill />
                    </div>
                    <div className="textSide">
                        Following
                    </div>
                </div>
                <div className="dashboard sideOpt">
                    <div className="logoSide">
                        <MdDashboard />
                    </div>
                    <div className="textSide">
                        Dashboard
                    </div>
                </div>
                <div className="discord sideOpt">
                    <div className="logoSide">
                        <BsDiscord />
                    </div>
                    <div className="textSide">
                        Discord
                    </div>
                </div>
                <div className="creator sideOpt">
                    <div className="logoSide">
                        <AiFillCopyrightCircle />
                    </div>
                    <div className="textSide">
                        Creator Access
                    </div>
                </div>
                <div className="feedback sideOpt">
                    <div className="logoSide">
                        <MdFeedback />
                    </div>
                    <div className="textSide">
                        Feedback
                    </div>
                </div>
                <div className="tour sideOpt">
                    <div className="logoSide">
                        <BiDirections />
                    </div>
                    <div className="textSide">
                        Tour
                    </div>
                </div>
            </div>
            <div className="sideBottom">
                <div className="logout sideOpt">
                    <div className="logoSide">
                        <AiOutlineLogout />
                    </div>
                    <div className="textSide">
                        LogOut
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;