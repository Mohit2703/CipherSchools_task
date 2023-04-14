import React from "react";
import './Main.css';
import SideBar from '../SideBar/SideBar'
import User from "../User/User";
import About from "../About/About";

const Main = () => {
    return (
        <div className="mainUser">
            <div className="sidebar">
                <SideBar/>
            </div>
            <div className="mainBody">
                <div className="userBody">
                    <User />
                    <About />
                </div>
            </div>
        </div>
    )
}

export default Main;