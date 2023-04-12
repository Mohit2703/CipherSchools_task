import mongoose, { Schema as _Schema } from "mongoose";
const { Schema } = mongoose;

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
    "photo": {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", UserSchema);
export { User };