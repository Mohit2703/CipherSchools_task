import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { User } from "../models/User.js";
import jwt from 'jsonwebtoken';
import { jwtSecret } from "../config.js";
import fs from 'fs';
import path from "path";

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

export { register, login, changePassword, editDetails, updateImage }