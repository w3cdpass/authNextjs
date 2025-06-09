import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import User from '@/models/User';
import connectDB from '@/lib/mongodb';
const JWT_SECRET = 'your-hardcoded-secret'; // Same as in signin route

/**
 * Handles GET requests to authenticate and retrieve the current user based on JWT token.
 *
 * 1. Connects to the database.
 * 2. Checks for a JWT token in cookies.
 * 3. Verifies and decodes the token.
 * 4. Fetches the user from the database using the decoded user ID.
 * 5. Returns essential user info if found and authenticated.
 *
 * @returns {NextResponse} JSON response:
 *   - 200 with user data if authentication is successful.
 *   - 401 if no token is present or if token is invalid.
 *   - 404 if the user corresponding to the token ID is not found.
 */

export async function GET() {
    await connectDB(); // Ensure DB is connected

    const token = cookies().get('token')?.value;

    if (!token) {
        return NextResponse.json({ user: null, message: 'No token' }, { status: 401 });
    }

    try {
        // Decode the token
        const decoded = jwt.verify(token, JWT_SECRET);

        // Fetch the user from DB using decoded.id
        const user = await User.findById(decoded.id).select('name role _id');
        console.log(decoded);
        
        if (!user) {
            return NextResponse.json({ user: null, message: 'Response will return null because it is Protecte !' }, { status: 404 });
        }

        // Return essential user info
        return NextResponse.json({
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
            }
        });

    } catch (err) {
        console.error('Token decode error:', err);
        return NextResponse.json({ user: null, message: 'Invalid token' }, { status: 401 });
    }
}
