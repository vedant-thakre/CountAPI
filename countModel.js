import mongoose from "mongoose";

const countSchema = mongoose.Schema(
    {
        webID : String,
        value : {
            type: Number,
            default: 0,
        }
    },
    {
        timestamps: true,
    },
)

const Count = mongoose.models.Count || mongoose.model("Count", countSchema);

export default Count;