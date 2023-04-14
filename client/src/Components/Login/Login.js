import React, { useState } from "react";
import './Login.css';
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../../assets/Cipherschools.png'
import { localhost } from "../../config";
import axios from "axios";

const Login = () => {
    const [regi, setRegi] = useState(0);
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
    const signRegis = async () => {
        let link = localhost + `auth/register`;
        axios.post(link, {
            firstName: first,
            lastName: last,
            email,
            password: pass,
            phone
        }).then((response) => {
            console.log(response);
            const jwtToken = response.data.token;
        }).catch((err) => {
            console.log(err);
        })
    }
    
    const loginRegis = async () => {
        let link = localhost + `auth/login`;
        axios.post(link, {
            email,
            password: pass,
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })
    }

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
                                <input type="email" placeholder="Email Id" className="rowInput" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="inputRow">
                                <input type="password" placeholder="Password" className="rowInput" value={pass} onChange={(e) => setPass(e.target.value)} />
                            </div>
                            <div className="inputClick">
                                <div className="clickInput" onClick={loginRegis}>
                                    Sign In
                                </div>
                            </div>
                        </div>
                    }
                    {(regi === 1) &&
                        <div className="signupForm">
                            <div className="inputRow">
                                <input type="text" className="rowInput" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)}  />
                            </div>
                            <div className="inputRow">
                                <input type="text" className="rowInput" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} />
                            </div>
                            <div className="inputRow">
                                <input type="email" placeholder="Email Id" className="rowInput" value={email} onChange={(e) => setEmail(e.target.value)}  />
                            </div>
                            <div className="inputRow">
                                <input type="tel" placeholder="Phone (Optional)" className="rowInput" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="inputRow">
                                <input type="password" placeholder="Password" className="rowInput" value={pass} onChange={(e) => setPass(e.target.value)} />
                            </div>
                            <div className="inputClick">
                                <div className="clickInput" onClick={signRegis}>
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