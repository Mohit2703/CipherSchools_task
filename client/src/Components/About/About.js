import React from 'react';
import './About.css';
import { BsFacebook, BsGithub, BsGlobe2, BsInstagram, BsKeyFill, BsLinkedin, BsTwitter } from 'react-icons/bs';
import CipherMap from '../CipherMap/CipherMap';

const About = () => {
    return (
        <div className="UserInfo">
            <div className='aboutMe informations'>
                <div className="topHead aboutHead">
                    <h3 className='headInfo'> ABOUT ME </h3>
                    <a href="/"> Edit </a>
                </div>
                <textarea className='aboutText' />
            </div>
            <div className="cipherMap informations">
                <div className="topHead aboutHead">
                    <h3 className='headInfo'> CIPHER MAP </h3>
                </div>
                <div className="CipherM">
                    <CipherMap />
                </div>
            </div>
            <div className="onTheWeb informations">
                <div className="topHead aboutHead">
                    <h3 className='headInfo'> ON THE WEB </h3>
                    <a href="/"> Edit </a>
                </div>
                <div className="webLinks">
                    <div className="webCol">
                        <div className="linkWeb">
                            <div className="webTitle">Linkedin</div>
                            <div className="webInputLink">
                                <span className="linkIcon"><BsLinkedin /></span>
                                <input class="mp-link-text" placeholder="LinkedIn" disabled="" value="" />
                            </div>
                        </div>
                        <div className="linkWeb">
                            <div className="webTitle">Github</div>
                            <div className="webInputLink">
                                <span className="linkIcon"><BsGithub /></span>
                                <input class="mp-link-text" placeholder="Github" disabled="" value="" />
                            </div>
                        </div>
                        <div className="linkWeb">
                            <div className="webTitle">Facebook</div>
                            <div className="webInputLink">
                                <span className="linkIcon"><BsFacebook /></span>
                                <input class="mp-link-text" placeholder="Facebook" disabled="" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="webCol">
                        <div className="linkWeb">
                            <div className="webTitle">Twitter</div>
                            <div className="webInputLink">
                                <span className="linkIcon"><BsTwitter /></span>
                                <input class="mp-link-text" placeholder="Twitter" disabled="" value="" />
                            </div>
                        </div>
                        <div className="linkWeb">
                            <div className="webTitle">Instagram</div>
                            <div className="webInputLink">
                                <span className="linkIcon"><BsInstagram /></span>
                                <input class="mp-link-text" placeholder="Instagram" disabled="" value="" />
                            </div>
                        </div>
                        <div className="linkWeb">
                            <div className="webTitle">Website</div>
                            <div className="webInputLink">
                                <span className="linkIcon"><BsGlobe2 /></span>
                                <input class="mp-link-text" placeholder="Website" disabled="" value="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="professional informations">
                <div className="topHead aboutHead">
                    <h3 className='headInfo'> PROFESSIONAL INFORMATION </h3>
                    <a href="/"> Edit </a>
                </div>
                <div className="webLinks">
                    <div className="webCol">
                        <div className="linkWeb">
                            <div className="webTitle">Highest Education</div>
                            <div className="webInputLink">
                                <span className="linkIcon"><BsLinkedin /></span>
                                <input class="mp-link-text" placeholder="LinkedIn" disabled="" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="webCol">
                        <div className="linkWeb">
                            <div className="webTitle">What do you do currently?</div>
                            <div className="webInputLink">
                                <span className="linkIcon"><BsLinkedin /></span>
                                <input class="mp-link-text" placeholder="LinkedIn" disabled="" value="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="password informations">
                <div className="topHead aboutHead">
                    <h3 className='headInfo'> PASSWORD & SECURITY </h3>
                    <a href="/"> Edit </a>
                </div>
                <div className="changePass">
                    <div className="linkWeb">
                        <div className="webInputLink">
                            <span className="linkIcon"><BsKeyFill /></span>
                            <input class="mp-link-text" placeholder="**********" disabled="" value="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="interests informations">
                <div className="topHead aboutHead">
                    <h3 className='headInfo'> INTERESTS </h3>
                    <a href="/"> Edit </a>
                </div>
            </div>
        </div>
    )
}

export default About;