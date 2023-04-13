import mongoose, { Schema as _Schema } from "mongoose";
const { Schema } = mongoose;

const followSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    follower: Array,
    following: Array
}, {
    timestamps: true
})

const Follow = mongoose.model("Follow", followSchema);
export { Follow };