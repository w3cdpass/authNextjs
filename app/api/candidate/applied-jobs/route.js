import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import Candidate from '@/models/Candidate';

const JWT_SECRET = 'your-hardcoded-secret';

export async function GET(req) {
    await connectDB();
    try {
        const token = req.cookies.get('token')?.value;
        if (!token) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const candidate = await Candidate.findById(decoded.id).populate('appliedJobs', '-appliedCandidates  -user  -noPosition');

        if (!candidate) {
            return NextResponse.json({ message: 'Candidate not found' }, { status: 404 });
        }

        return NextResponse.json({ appliedJobs: candidate.appliedJobs });
    } catch (err) {
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
