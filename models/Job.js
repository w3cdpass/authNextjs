import mongoose from "mongoose";


const JobSchema = new mongoose.Schema({
    jobtitle: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    numberOfPositions: {
        type: Number,
        required: true,
        min: 1
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);
export default Job;
