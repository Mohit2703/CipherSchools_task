import React, { useState } from "react";
import './Login.css';
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../../assets/Cipherschools.png'

const Login = () => {
    const [regi, setRegi] = useState(0);
    return (
        <div className="registerPage">
            <div className="registerModel">
                <div className="registerTop">
                    <h2 className="registerType">
                        {(regi === 0) ? `Sign In` : `Register`}
                    </h2>
                    <div className="registerClose">
                        <AiOutlineClose />
                    </div>
                </div>
                <div className="registerGreet">
                    <div className="companyLogo">
                        <img src={logo} alt="" className="logoComp" />
                        <h4>Cipher Schools</h4>
                    </div>
                    <div className="greeting">
                        Hey, Welcome!
                    </div>
                </div>
                <div className="registerForm">
                    {(regi === 0) &&
                        <div className="loginForm">
                            <div className="inputRow">
                                <input type="email" placeholder="Email Id" className="rowInput" />
                            </div>
                            <div className="inputRow">
                                <input type="password" placeholder="Password" className="rowInput" />
                            </div>
                            <div className="inputClick">
                                <div className="clickInput">
                                    Sign In
                                </div>
                            </div>
                        </div>
                    }
                    {(regi === 1) &&
                        <div className="signupForm">
                            <div className="inputRow">
                                <input type="text" className="rowInput" placeholder="First Name" />
                            </div>
                            <div className="inputRow">
                                <input type="text" className="rowInput" placeholder="Last Name" />
                            </div>
                            <div className="inputRow">
                                <input type="email" placeholder="Email Id" className="rowInput" />
                            </div>
                            <div className="inputRow">
                                <input type="tel" placeholder="Phone (Optional)" className="rowInput" />
                            </div>
                            <div className="inputRow">
                                <input type="password" placeholder="Password" className="rowInput" />
                            </div>
                            <div className="inputClick">
                                <div className="clickInput">
                                    Create Account
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="registerBottom">
                    {(regi === 0) &&
                        <div className="loginChange">
                            Don't have an account?
                            <span onClick={() => setRegi(1)}> Get Started </span>
                        </div>
                    }{(regi === 1) &&
                        <div className="loginChange">
                            Do have an account?
                            <span onClick={() => setRegi(0)} > SignIn Now </span>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login;