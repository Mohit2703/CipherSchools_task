import mongoose, { Schema as _Schema } from "mongoose";
const { Schema } = mongoose;

const socialSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    About: {
        type: String
    },
    linkedin: {
        type: String
    },
    github: {
        type: String
    },
    instagram: {
        type: String
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    website: {
        type: String
    }
}, {
    timestamps: true
})

const Social = mongoose.model("Social", socialSchema);
export { Social };