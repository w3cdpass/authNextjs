import connectDB from '@/lib/mongodb';
import Candidate from '@/models/Candidate';
import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  await connectDB();
  try {
    const candidate = await Candidate.findById(params.candidateId).populate('appliedJobs');
    if (!candidate) {
      return NextResponse.json({ message: 'Candidate not found' }, { status: 404 });
    }

    return NextResponse.json({ appliedJobs: candidate.appliedJobs });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
