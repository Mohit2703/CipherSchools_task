import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import { User } from "../models/User.js";
import jwt from 'jsonwebtoken';
import { jwtSecret } from "../config.js";

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
        
        const registerUser = await User.create({
            email, password: hashPassword, firstName, lastName, phone
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


        
        console.log(findUser);
        
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

export { register, login }