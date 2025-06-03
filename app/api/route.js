import { NextResponse } from "next/server";

/**
 * @description This routes return a Message with `api Fallback !`
 * @returns Fallback route for /api/
 */
export function GET() {
    return NextResponse.json({message: 'api Fallback !'})
};