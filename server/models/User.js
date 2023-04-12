import { Schema } from "mongoose";

const UserSchema = new Schema({
    "email": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true,
    },
    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "phone": {
        type: String,
        length: 10
    },
    
})