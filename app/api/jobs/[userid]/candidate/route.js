import connectDB from '@/lib/mongodb';
import Job from '@/models/Job';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  await connectDB();
  try {
    const job = await Job.findById(params.jobId).populate('appliedCandidates', 'name email');
    if (!job) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ candidates: job.appliedCandidates });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
