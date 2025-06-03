import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your-hardcoded-secret';

/**
 * Handles GET requests to retrieve all users from the database (excluding passwords).
 *
 * Connects to the database and fetches all user records, omitting the `password` field
 * for security reasons.
 *
 * @returns {NextResponse} JSON response indicating the result:
 *   - 200 with a list of users if successful.
 *   - 500 if a database connection or query error occurs.
 */

export async function GET() {
  try {
    await connectDB();
    
    const users = await User.find({}, '-password');

      return NextResponse.json({ success: true, data: users});
  } catch (error) {
    console.error('MongoDB error:', error);
    return NextResponse.json({ success: false, error: 'Database connection failed' }, { status: 500 });
  }
}

/**
 * Handles POST requests to register a new user and generate a JWT token.
 *
 * Steps:
 * 1. Parses the request body to extract user details (`name`, `email`, `password`, `role`).
 * 2. Connects to the database and checks if a user with the given email already exists.
 * 3. If the email is unique, creates a new user and signs a JWT token.
 * 4. Sets the JWT as a cookie in the response and returns user info (excluding password).
 *
 * @param {Request} req - The incoming HTTP request with a JSON body containing user registration data.
 * @returns {NextResponse} JSON response:
 *   - 200 with user info and token cookie if registration succeeds.
 *   - 400 if the email already exists.
 *   - 500 if a server or database error occurs.
 */

export async function POST(req) {
  try {
    const { name, email, password, role } = await req.json();
    await connectDB();
    const existingUser = await User.findOne({ email });
    if(existingUser){return NextResponse.json({message:"Email already exists"}, {status: 400})}
    const user = new User({ name, email, password , role});
    const token = jwt.sign({ id: user._id, email: user.email,role: user.role }, JWT_SECRET , { expiresIn: '1h' });
    await user.save()
    const response = NextResponse.json({ message: 'SignUp complete', user: { id: user._id, name: user.name, email: user.email,} });
    // return NextResponse.json({message: 'User create Successfully', user}, {status: 201})
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