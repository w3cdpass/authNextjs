import connectDB from '@/lib/mongodb';
import Job from '@/models/Job';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  try {
    const jobs = await Job.find({})
      .populate('user', 'name') // optional: show who posted it
      .select('-appliedCandidates'); // hide sensitive info
    return NextResponse.json({ jobs });
  } catch (err) {
    return NextResponse.json({ message: 'Failed to fetch jobs' }, { status: 500 });
  }
}
