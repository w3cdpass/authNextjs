import connectDB from "@/lib/mongodb";
import Candidate from "@/models/Candidate";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-hardcoded-secret'; // Replace with secure env var in production

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        await connectDB();

        const user = await Candidate.findOne({ email }).select('+password');
        if (!user) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const token = jwt.sign({ id: user._id, email: user.email, role: 'candidate' }, JWT_SECRET, { expiresIn: '1h' });

        const response = NextResponse.json({
            message: 'Login successful',
            candidate: { id: user._id, name: user.name, email: user.email, role: 'candidate' }
        });

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: true, // set to true in production (with HTTPS)
            maxAge: 3600,
            path: '/',
        });

        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
} 