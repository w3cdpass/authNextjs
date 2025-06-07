import connectDB from "@/lib/mongodb";
import Candidates from "@/models/Candidate";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-hardcoded-secret';

export async function GET() {
    try {
        await connectDB()
        const candiates = await Candidates.find({});
        return NextResponse.json({ success: true, candidates: candiates})
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { name, email, password, phoneNumber, dob, gender, address, education, fresher, experience } = await req.json();
        await connectDB();
        const existingUser = await Candidates.findOne({ email });
        if (existingUser) return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
        const newCandidate = new Candidates({ name, email, password,role: 'candidate',phoneNumber, dob, gender, address, education, fresher, experience });
        const token = jwt.sign({ id: newCandidate._id, email: newCandidate.email,role: 'candidate' }, JWT_SECRET, { expiresIn: '1h' });
        await newCandidate.save();
        const response = NextResponse.json({ message: 'SignUp complete', candiates: { id: newCandidate._id, name: newCandidate.name, email: newCandidate.email, role: 'candidate' } })
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: true,
            maxAge: 3600,
            path: '/'
        });
        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}