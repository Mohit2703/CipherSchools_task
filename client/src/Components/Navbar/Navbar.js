import React from "react";
import './Navbar.css';
import logo from "../../assets/Cipherschools.png";
import { BsBell, BsSearch, BsSliders } from "react-icons/bs";
import { AiOutlineCompass } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="mainComp" id="compLeft">
                <div className="menuNav">
                    <GiHamburgerMenu />
                </div>
                <div className="compLogo">
                    {/* <div className="logoComp"> */}
                        <img src={logo} alt="" className="imgLogo" />
                        <h1 className="textLogo">CipherSchools</h1>
                    {/* </div> */}
                </div>
                <div className="browseFeatures">
                    <div className="iconLittle" id="browseIcon">
                        <AiOutlineCompass />
                    </div>
                    <span className="browseText">
                        Browse
                    </span>
                    <div className="iconLittle" id="downArrow">
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>
            <div className="mainComp" id="compRight">
                <div className="serchBar rightComp">
                    <div className="search-container">
                        <BsSearch className="searchItem" />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Search and Learn"
                            className="input-field searchItem"
                        />
                        <BsSliders className="searchItem" />
                    </div>
                </div>
                <div className="notify rightComp">
                    <BsBell />
                </div>
                <div className="profile rightComp">
                    <img src={logo} alt="" className="profile-mid" />
                </div>
                <div className="coins rightComp">
                    <div className="profile">
                        <img src={logo} alt="" className="profile-sm" />
                    </div>
                    <div className="text">
                        0
                    </div>
                </div>
                <div className="changeTheme rightComp">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Navbar;