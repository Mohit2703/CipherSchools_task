import mongoose, { Schema as _Schema } from "mongoose";
const { Schema } = mongoose;

const profSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    education: {
        type: String
    },
    orgType: {
        type: String
    }
}, {
    timestamps: true
})

const Prof = mongoose.model("Prof", profSchema);
export { Prof };