import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    jobtitle: {
        type: String,
        required: true,
        trim: true
    },
    contactNumber: {
        type: String,
        trim: true
    },
    jobRole: {
        type: String,
        trim: true
    },
    noPosition: {
        type: Number,
        min: 1
    },
    jobType: {
        type: [String], // Array of strings
        enum: ['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship', 'Volunteer']
    },
    workType: {
        type: [String], // Array of strings
        enum: ['On-site', 'Hybrid', 'Remote']
    },
    postDate: {
        type: Date,
        default: Date.now
    },
    benefits: {
        type: [String] // Array of strings for benefits
    },
    salary: {
        type: Number
    },
    jobLocation: {
        type: String,
        trim: true
    },
    appliedCandidates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Candidates',
    }],
    description: {
        type: String,
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