import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const correctEmail = process.env.LOGIN_EMAIL;
  const correctPassword = process.env.LOGIN_PASSWORD;

  if (email === correctEmail && password === correctPassword) {
    // Set a cookie for session
    cookies().set("auth", "loggedin", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
