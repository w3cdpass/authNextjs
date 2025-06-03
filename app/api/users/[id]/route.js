import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { hashPasswordIfPresent } from "@/utils/hashPassword";
import { NextResponse } from "next/server";

/**
 * Handles GET requests to retrieve a single user by ID from the database.
 *
 * Connects to the database and fetches the user document matching the provided ID,
 * excluding the password field for security.
 *
 * @param {Request} req - The incoming HTTP request object.
 * @param {Object} context - An object containing route parameters (`params`), specifically the user's ID.
 * @returns {NextResponse} JSON response:
 *   - 200 with user data if found.
 *   - 404 if the user does not exist.
 *   - 500 if a database error occurs.
 */

export async function GET(req, { params }) {
    await connectDB();
    try {
        const user = await User.findById(params.id).select('-password');
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Failed to fetch user', error: error.message }, { status: 500 });
    }
}

/**
 * Handles PUT requests to update a user's information by ID.
 *
 * Connects to the database, parses the request body, and updates the specified user's data.
 * If a password is present in the request body, it will be hashed before updating.
 *
 * @param {Request} req - The incoming HTTP request containing the updated user data in JSON format.
 * @param {Object} context - An object containing route parameters (`params`), specifically the user's ID.
 * @returns {NextResponse} JSON response:
 *   - 200 with the updated user object if successful.
 *   - 404 if the user does not exist.
 *   - 500 if an error occurs during the update process.
 */

export async function PUT(req, { params }) {
    await connectDB();
    try {
        const body = await req.json();
        const hashedData = await hashPasswordIfPresent(body)
        const updatedUser = await User.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Update failed', error: error.message }, { status: 500 });
    }
}

/**
 * Handles PATCH requests to partially update a user's data by ID.
 *
 * Connects to the database, parses the request body, and applies partial updates to the specified user.
 * If a password is included in the update data, it will be hashed before saving.
 *
 * @param {Request} req - The incoming HTTP request containing JSON body with user fields to update.
 * @param {Object} context - An object containing route parameters (`params`), specifically the user's ID.
 * @returns {NextResponse} JSON response:
 *   - 200 with the updated user data if successful.
 *   - 404 if the user is not found.
 *   - 500 if an error occurs during the update.
 */

export async function PATCH(req, { params }) {
    await connectDB();

    try {
        const body = await req.json();
        const hashedData = await hashPasswordIfPresent(body)
        const updatedUser = await User.findByIdAndUpdate(params.id, body, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

/**
 * Handles DELETE requests to remove a user by ID from the database.
 *
 * Connects to the database and attempts to delete the user with the specified ID.
 *
 * @param {Request} req - The incoming HTTP request object.
 * @param {Object} context - An object containing route parameters (`params`), specifically the user's ID.
 * @returns {NextResponse} JSON response:
 *   - 200 with a confirmation message if the user was deleted.
 *   - 404 if no user with the given ID was found.
 *   - 500 if an error occurs during the deletion process.
 */

export async function DELETE(req, { params }) {
    await connectDB();
    
    try {
        const deletedUser = await User.findByIdAndDelete(params.id);
        if (!deletedUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted' }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}