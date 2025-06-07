import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Candidate from '@/models/Candidate';
import Job from '@/models/Job';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-hardcoded-secret';

export async function POST(req, { params }) {
  await connectDB();
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'candidate') {
      return NextResponse.json({ message: 'Only candidates can apply' }, { status: 403 });
    }

    const jobId = params.userid;
    const candidateId = decoded.id;

    const job = await Job.findById(jobId);
    const candidate = await Candidate.findById(candidateId);

    if (!job || !candidate) {
      return NextResponse.json({ message: 'Job or Candidate not found' }, { status: 404 });
    }

    // Prevent duplicate applications
    if (job.appliedCandidates.includes(candidateId)) {
      return NextResponse.json({ message: 'Already applied to this job' }, { status: 400 });
    }

    job.appliedCandidates.push(candidateId);
    candidate.appliedJobs.push(jobId);

    await job.save();
    await candidate.save();

    return NextResponse.json({ success: true, message: 'Applied successfully' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
