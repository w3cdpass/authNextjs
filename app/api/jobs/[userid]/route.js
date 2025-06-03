import connectDB from "@/lib/mongodb";
import Job from '@/models/Job';
import { NextResponse } from "next/server";

// GET jobs by user
/**
 * Handles GET requests to retrieve all job entries associated with a specific user.
 *
 * Connects to the database and queries for jobs where the `user` field matches the provided `userid`.
 *
 * @param {Request} req - The incoming HTTP request object.
 * @param {Object} context - An object containing request parameters (`params`), specifically the `userid` to filter jobs by.
 * @returns {NextResponse} JSON response with:
 *   - 200 and a list of jobs if successful.
 *   - 500 if an error occurs while fetching the data.
 */

export async function GET(req, { params }) {
    const { userid } = await params;
    await connectDB();
    try {
        const jobs = await Job.find({user: userid});
        // console.log(jobs);
        
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
    }
}

// UPDATE job by job ID (passed in body)
/**
 * Handles PATCH requests to update a job entry in the database.
 *
 * Connects to the database, parses the request body to extract the job ID and update data,
 * and attempts to update the specified job using Mongoose's findByIdAndUpdate method.
 *
 * @param {Request} req - The incoming HTTP request, expected to contain a JSON body with a `jobId` and fields to update.
 * @param {Object} context - An object containing request parameters (e.g. `params` from the route).
 * @returns {NextResponse} JSON response indicating the result:
 *   - 200 with updated job data if successful.
 *   - 400 if `jobId` is missing.
 *   - 404 if the job is not found.
 *   - 500 if an unexpected error occurs.
 */
export async function PATCH(req, { params }) {
    await connectDB();
    try {
        const body = await req.json();
        const { jobId, ...updateData } = body;

        if (!jobId) {
            return NextResponse.json({ error: 'Job ID is required' }, { status: 400 });
        }

        const updatedJob = await Job.findByIdAndUpdate(jobId, updateData, { new: true });

        if (!updatedJob) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, job: updatedJob });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// DELETE job by job ID (passed in body)
/**
 * Handles DELETE requests to remove a job entry from the database.
 *
 * Connects to the database and attempts to delete the job document
 * with the ID provided in the request parameters.
 *
 * @param {Request} req - The incoming HTTP request object.
 * @param {Object} context - An object containing request parameters (`params`), specifically the job ID to delete.
 * @returns {NextResponse} JSON response indicating the result:
 *   - 200 if the job was successfully deleted.
 *   - 404 if the job was not found.
 *   - 500 if an unexpected server error occurs.
 */

export async function DELETE(req, { params }) {
    await connectDB();
    try {
        const job = await Job.findOneAndDelete(params.id);
        if (!job) {
            return NextResponse.json({ error: "Job not found or not owned by user" }, { status: 404 });
        }
        return NextResponse.json({ message: "Job deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete job" }, { status: 500 });
    }
}