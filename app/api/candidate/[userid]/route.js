import connectDB from "@/lib/mongodb";
import Candidates from "@/models/Candidate";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { userid } = await params;
    await connectDB();
    try {
        const user = await Candidates.findById(userid).select('-password');
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to fetch user', error: error.message }, { status: 500 });
    }
}