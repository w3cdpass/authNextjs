import connectDB from "@/lib/mongodb";
import Job from '@/models/Job';
import User from "@/models/User";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
const JWT_SECRET = 'your-hardcoded-secret'; // Same as in signin route

// GET all jobs
/**
 * Handles GET requests to retrieve job listings based on user role.
 *
 * Connects to the database and authenticates the request using a JWT token from cookies.
 * - If the token is missing or invalid, responds with 401 or 500 respectively.
 * - If the user is an admin, fetches and returns all jobs, populating user name and email.
 * - If the user has a 'user' role, access is denied with a 200 response and a message.
 *
 * @returns {NextResponse} JSON response indicating the result:
 *   - 200 with job data for admin users.
 *   - 200 with an "Unauthorized" message for regular users.
 *   - 401 if no token is provided.
 *   - 500 if token verification fails or job fetching fails.
 */

export async function GET(req) {
  const cookieStore = await cookies();
  const token =  cookieStore.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role === 'admin') {
      // unconventional error from this code 
      // const jobs = await Job.find({}).populate('user').populate('appliedCandidates');
      const jobs = await Job.find({})
      return NextResponse.json({ message: 'Admin View', jobs }, { status: 200 });
    } else if (decoded.role === 'candidate') {
      const jobs = await Job.find({}).select('-appliedCandidates');
      return NextResponse.json({message: 'Candidate View', jobs }, {status: 200})
    } else {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}

// POST a new job
/**
 * Handles POST requests to create a new job entry in the database.
 *
 * Connects to the database and attempts to create a new job using the data
 * provided in the request body. Requires a `user` field to associate the job with a user.
 *
 * @param {Request} req - The incoming HTTP request, expected to contain a JSON body with job data.
 * @returns {NextResponse} JSON response indicating the result:
 *   - 201 with the created job object if successful.
 *   - 400 if the user ID is missing from the request body.
 *   - 500 if an error occurs during job creation.
 */
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    // Make sure the user ID is included in the body
    if (!body.user) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    const job = await Job.create(body);
    return NextResponse.json({ success: true, job, message: 'Job created successfully' }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
