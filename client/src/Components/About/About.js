import React, { useEffect, useState } from 'react';
import './About.css';
import { BsFacebook, BsGithub, BsGlobe2, BsInstagram, BsKeyFill, BsLinkedin, BsTwitter } from 'react-icons/bs';
import CipherMap from '../CipherMap/CipherMap';
import { jwtToken, localhost } from '../../config';
import axios from 'axios';
import { MdSchool, MdWork } from 'react-icons/md';

const About = () => {
    const [editAbout, setEditAbout] = useState(false);
    const [editWeb, setEditWeb] = useState(false);
    const [editProf, setEditProf] = useState(false);
    const [editPass, setEditPass] = useState(false);
    const [pageLoad, setPageLoad] = useState(false);
    const [about, setAbout] = useState('');
    const [Linkedin, setLinkedin] = useState('');
    const [Insta, setInsta] = useState('');
    const [Face, setFace] = useState('');
    const [Twitter, setTwitter] = useState('');
    const [Github, setGithub] = useState('');
    const [Web, setWeb] = useState('');
    useEffect(() => {
        setPageLoad(true);
        const getSocialLink = localhost + `auth/fetchSocial`;
        axios.get(getSocialLink, { headers: { 'authorization': jwtToken } }).then((response) => {
            setAbout(response.data.socialData.About)
            setInsta(response.data.socialData.instagram)
            setLinkedin(response.data.socialData.linkedin)
            setFace(response.data.socialData.facebook)
            setTwitter(response.data.socialData.twitter)
            setGithub(response.data.socialData.github)
            setWeb(response.data.socialData.website)
        })
        setPageLoad(false);
    }, [])

    const changeAbout = () => {
        if (!editAbout) {
            setEditAbout(true);
        } else {
            let link = localhost + `auth/updateAbout`;
            var data = {'about': about}
            axios.post(link, data, {headers: {'authorization': jwtToken}}).then((response) => {
                console.log(response);
            })
            setEditAbout(false);
        }
    }
    const changeWeb = () => {
        if (!editWeb) {
            setEditWeb(true);
        } else {
            let link = localhost + `auth/updateSocial`;
            var data = {'linkedin': Linkedin, 'github': Github, 'instagram': Insta, 'website': Web, 'twitter': Twitter, 'facebook': Face}
            axios.post(link, data, {headers: {'authorization': jwtToken}}).then((response) => {
                console.log(response);
            })
            setEditWeb(false);
        }
    }
    const changeProf = () => {
        if (!editProf) {
            setEditProf(true);
        } else {
            setEditProf(false);
        }
    }
    const changePass = () => {
        if (!editPass) {
            setEditPass(true);
        } else {
            setEditPass(false);
        }
    }

    return (
        <div className="infoUser">
            <div className="load">
                {pageLoad && (
                    <div>Loading</div>
                )}
            </div>
            {!pageLoad && (
                <div className="UserInfo">
                    <div className='aboutMe informations'>
                        <div className="topHead aboutHead">
                            <h3 className='headInfo'> ABOUT ME </h3>
                            <div className="btnChange" onClick={changeAbout}> {editAbout ? 'Save' : 'Edit'} </div>
                        </div>
                        <textarea className='aboutText' disabled={!editAbout} value={about} onChange={(e) => setAbout(e.target.value)} />
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
                            <div className="btnChange" onClick={changeWeb}> {editWeb ? 'Save' : 'Edit'} </div>
                        </div>
                        <div className="webLinks">
                            <div className="webCol">
                                <div className="linkWeb">
                                    <div className="webTitle">Linkedin</div>
                                    <div className="webInputLink">
                                        <span className="linkIcon"><BsLinkedin /></span>
                                        <input className="mp-link-text" placeholder="LinkedIn" disabled={!editWeb} value={Linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                                    </div>
                                </div>
                                <div className="linkWeb">
                                    <div className="webTitle">Github</div>
                                    <div className="webInputLink">
                                        <span className="linkIcon"><BsGithub /></span>
                                        <input className="mp-link-text" placeholder="Github" disabled={!editWeb} value={Github} onChange={(e) => setGithub(e.target.value)} />
                                    </div>
                                </div>
                                <div className="linkWeb">
                                    <div className="webTitle">Facebook</div>
                                    <div className="webInputLink">
                                        <span className="linkIcon"><BsFacebook /></span>
                                        <input className="mp-link-text" placeholder="Facebook" disabled={!editWeb} value={Face} onChange={(e) => setFace(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="webCol">
                                <div className="linkWeb">
                                    <div className="webTitle">Twitter</div>
                                    <div className="webInputLink">
                                        <span className="linkIcon"><BsTwitter /></span>
                                        <input className="mp-link-text" placeholder="Twitter" disabled={!editWeb} value={Twitter} onChange={(e) => setTwitter(e.target.value)} />
                                    </div>
                                </div>
                                <div className="linkWeb">
                                    <div className="webTitle">Instagram</div>
                                    <div className="webInputLink">
                                        <span className="linkIcon"><BsInstagram /></span>
                                        <input className="mp-link-text" placeholder="Instagram" disabled={!editWeb} value={Insta} onChange={(e) => setInsta(e.target.value)} />
                                    </div>
                                </div>
                                <div className="linkWeb">
                                    <div className="webTitle">Website</div>
                                    <div className="webInputLink">
                                        <span className="linkIcon"><BsGlobe2 /></span>
                                        <input className="mp-link-text" placeholder="Website" disabled={!editWeb} value={Web} onChange={(e) => setWeb(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="professional informations">
                        <div className="topHead aboutHead">
                            <h3 className='headInfo'> PROFESSIONAL INFORMATION </h3>
                            <div className="btnChange"> Edit </div>
                        </div>
                        <div className="webLinks">
                            <div className="webCol">
                                <div className="linkWeb">
                                    <div className="webTitle">Highest Education</div>
                                    <div className="webInputLink">
                                        <span className="linkIcon"><MdSchool /></span>
                                        <input className="mp-link-text" placeholder="Education" disabled="" value="Graduation" />
                                    </div>
                                </div>
                            </div>
                            <div className="webCol">
                                <div className="linkWeb">
                                    <div className="webTitle">What do you do currently?</div>
                                    <div className="webInputLink">
                                        <span className="linkIcon"><MdWork /></span>
                                        <input className="mp-link-text" placeholder="Work" disabled="" value="College Student" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="password informations">
                        <div className="topHead aboutHead">
                            <h3 className='headInfo'> PASSWORD & SECURITY </h3>
                            <div className="btnChange" onClick={changePass}> {editPass ? 'Save' : 'Edit'} </div>
                        </div>
                        <div className="changePass">
                            <div className="linkWeb">
                                <div className="webInputLink">
                                    <span className="linkIcon"><BsKeyFill /></span>
                                    <input className="mp-link-text" placeholder="**********" disabled={!editPass} value="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="interests informations">
                        <div className="topHead aboutHead">
                            <h3 className='headInfo'> INTERESTS </h3>
                            <div className="btnChange"> Edit </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default About;