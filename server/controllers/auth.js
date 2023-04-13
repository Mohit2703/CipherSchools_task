import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { User } from "../models/User.js";
import jwt from 'jsonwebtoken';
import { jwtSecret } from "../config.js";
import fs from 'fs';
import path from "path";
import { Prof } from "../models/ProfInfo.js";
import { Social } from "../models/SocialMedia.js";
import { Follow } from "../models/Follow.js";

const salt = bcrypt.genSaltSync(10);

const register = async (req, res) => {
    
    const { email, password, firstName, lastName, phone } = req.body;

    try {
        const validationError = validationResult(req);

        if (!validationError.isEmpty()) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: validationError.array()
            })
        }

        let findUser = await User.findOne({ email });

        if (findUser) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: "User Already Exsists"
            })
        }
        
        const hashPassword = bcrypt.hashSync(password, salt);
        const buffer = fs.readFileSync('/media/mohit/New Volume/web development/CipherSchools_task/server/controllers/1946429.jpg');
        const encode = buffer.toString('base64');

        console.log(encode);

        const photo = {
            data: buffer,
            contentType: 'image/jpg'
        }
        
        const registerUser = await User.create({
            email, password: hashPassword, firstName, lastName, phone, photo
        })
        
        const userDetails = {id: registerUser.id};
        
        const token = jwt.sign(userDetails, jwtSecret);
        
        return res.status(200).json({
            message: "SUCCESS",
            token
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const validationError = validationResult(req);
        
        if (!validationError.isEmpty()) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: validationError.array()
            })
        }
        
        let findUser = await User.findOne({ email });
        
        if (!findUser) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: "User Doesn't Exsist"
            })
        }
        
        const b = bcrypt.compareSync(password ,findUser.password)
        
        if (!b) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: "Invalid Password"
            })
        }
        const userDetails = {id: findUser.id};
        
        const token = jwt.sign(userDetails, jwtSecret);
        
        return res.status(200).json({
            message: "SUCCESS",
            token
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const { userId } = req;
    try {
        const validationError = validationResult(req);
        
        if (!validationError.isEmpty()) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: validationError.array()
            })
        }
        const findUser = await User.findById(userId)
        console.log(findUser);        
        if (!findUser) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: "User Doesn't Exsist"
            })
        }
        
        const b = bcrypt.compareSync(currentPassword, findUser.password)
        
        if (!b) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: "Invalid Password"
            })
        }
        
        const hashPassword = bcrypt.hashSync(newPassword, salt);
        
        const updatePassword = await User.findByIdAndUpdate(userId, {
            password: hashPassword
        })
        
        return res.status(200).json({
            message: "SUCCESS",
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
        
    }
}

const editDetails = async (req, res) => {
    const { firstName, lastName, phone } = req.body;
    const { userId } = req;
    
    try {
        const validationError = validationResult(req);
        
        if (!validationError.isEmpty()) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: validationError.array()
            })
        }

        let updateDetails = {};

        if (firstName) {
            updateDetails.firstName = firstName;
        }
        if (lastName) {
            updateDetails.lastName = lastName;
        }
        if (phone) {
            updateDetails.phone = phone;
        }

        const updateUser = await User.findByIdAndUpdate(userId, updateDetails);

        return res.status(200).json({
            message: "SUCCESS",
        })

    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const updateImage = async (req, res) => {
    const { userId } = req;
    const file = req.files;
    console.log(file);
    try {
        const photo = {
            data: file.data,
            contentType: 'image/png'
        }
        
        const imgUpdate = await User.findByIdAndUpdate(userId, photo);

        console.log(imgUpdate);
        
        return res.status(200).json({
            message: "SUCCESS"
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const fetchUserDetails = async (req, res) => {
    const { userId } = req;
    
    try {
        const validationError = validationResult(req);
        
        if (!validationError.isEmpty()) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: validationError.array()
            })
        }

        const userDetails = await User.findById(userId);

        return res.status(200).json({
            message: "SUCCESS",
            userDetail: {
                email: userDetails.email,
                firstName: userDetails.firstName,
                lastName: userDetails.lastName,
                profileImg: userDetails.photo,
                phone: userDetails.phone
            }
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const updateProf = async (req, res) => {
    const { userId } = req;
    const { education, orgType } = req.body;
    try {
        const profUser = await Prof.findOne({ userId: userId });

        if (!profUser) {
            const insertProf = await Prof.create({
                userId, education, orgType
            })

            return res.status(200).json({
                message: "SUCCESS"
            })
        }
        
        const updateProf = await Prof.findByIdAndUpdate(profUser.id, {
            education, orgType
        })
        
        return res.status(200).json({
            message: "SUCCESS"
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const fetchProf = async (req, res) => {
    const { userId } = req;

    try {
        const profDetail = await Prof.findOne({ userId })

        return res.status(200).json({
            message: "SUCCESS",
            profDetails: {
                education: profDetail.education,
                orgType: profDetail.orgType
            }
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const editAbout = async (req, res) => {
    const { userId } = req;
    const { about } = req.body;
    
    try {
        const validationError = validationResult(req);
        
        if (!validationError.isEmpty()) {
            return res.status(400).json({
                message: "BAD REQUEST",
                error: validationError.array()
            })
        }

        const find = await Social.findOne({ userId });
        
        if (!find) {
            const addEdit = await Social.create({
                userId, About: about
            })

            return res.status(200).json({
                message: "SUCCESS"
            })
        }
        const aboutEdit = await Social.findByIdAndUpdate(find.id, {
            About: about
        })
        
        return res.status(200).json({
            message: "SUCCESS"
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const editSocial = async (req, res) => {
    const { userId } = req;
    const { linkedin, github, instagram, facebook, website, twitter } = req.body;
    
    try {
        const find = await Social.findOne({ userId });
        const editData = {};
        if (linkedin) {
            editData.linkedin = linkedin;
        }
        if (github) {
            editData.github = github;
        }
        if (instagram) {
            editData.instagram = instagram;
        }
        if (facebook) {
            editData.facebook = facebook;
        }
        if (website) {
            editData.website = website;
        }
        if (twitter) {
            editData.twitter = twitter;
        }
        
        if (!find) {
            editData.userId = userId;
            
            const addSocial = await Social.create(editData);
            return res.status(200).json({
                message: "SUCCESS"
            })
        }
        
        const editSocial = await Social.findByIdAndUpdate(find.id, editData);
        
        
        return res.status(200).json({
            message: "SUCCESS"
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const fetchSocial = async (req, res) => {
    const { userId } = req;
    
    try {
        const findSocial = await Social.findOne({ userId });

        return res.status(200).json({
            message: "SUCCESS",
            socialData: {
                about: findSocial.About,
                linkedin: findSocial.linkedin
            }
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const fetchFollowers = async (req, res) => {
    const { userId } = req;
    
    try {
        const userPopular = await Follow.findOne({ userId });
        
        if (!userPopular) {
            return res.status(200).json({
                message: "SUCCESS",
                data: {
                    noFollower: 0,
                    noFollowing: 0,
                    follower: [],
                    following: []
                }
            })
        }
        
        return res.status(200).json({
            message: "SUCCESS",
            data: {
                noFollower: userPopular.follower.length,
                noFollowing: userPopular.following.length,
                follower: userPopular.follower,
                following: userPopular.following
            }
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const addFollower = async (req, res) => {
    const { userId } = req;
    const { id } = req.body;
    console.log(id);
    try {
        const userPopular = await Follow.findOne({ userId: id });
        const userFollow = await Follow.findOne({ userId });

        if (!userPopular) {
            const addUserFollow = await Follow.create({
                userId,
                following: [id]
            })
        } else {
            const updateUserFollow = await Follow.findByIdAndUpdate(userPopular.id, {
                following: userPopular.following.push({ id })
            })
        }

        console.log("1");

        if (!userFollow) {
            const addUserFollowing = await Follow.create({
                userId: id,
                follower: [{ id: userId }]
            })
        } else {
            const updateUserFollowing = await Follow.findByIdAndUpdate(userFollow.id, {
                follower: userFollow.follower.push({ id: userId })
            })
        }

        return res.status(200).json({
            message: "SUCCESS"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}

export { register, login, changePassword, editDetails, updateImage, fetchUserDetails, updateProf, fetchProf, editAbout, editSocial, fetchSocial, fetchFollowers, addFollower };