import { NextResponse } from 'next/server';
import User from '@/models/User';
import connectDB from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const JWT_SECRET = 'your-hardcoded-secret'; // 🔒 Use same value as in middleware

/**
 * Handles POST requests to authenticate a user and issue a JWT token.
 *
 * Steps:
 * 1. Connects to the database.
 * 2. Retrieves the user by email, including the hashed password.
 * 3. Compares the provided password with the stored hashed password.
 * 4. If authentication succeeds, generates a JWT token valid for 1 hour.
 * 5. Returns user info and sets the token as a cookie.
 *
 * @param {Request} req - The incoming HTTP request containing JSON body with `email` and `password`.
 * @returns {NextResponse} JSON response:
 *   - 200 with user info and token cookie if login is successful.
 *   - 401 if email is invalid or password does not match.
 */

export async function POST(req) {
    await connectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email }).select('+password');
    // const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ message: 'Invalid email' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
    }

    const token = jwt.sign(
        { id: user._id, name: user.name, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: '1h' }
    );

    const response = NextResponse.json({
        message: 'Login successful',
        user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });

    response.cookies.set('token', token, {
        httpOnly: true, // Set to true in production (for HTTPS)
        secure: true, // Set to true in production (for HTTPS)
        maxAge: 3600,
        path: '/',
    });

    return response;
}
