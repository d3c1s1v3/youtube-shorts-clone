import { NextResponse } from "next/server";

export async function GET() {
  const res = "Hello from API endpoint";

  return NextResponse.json(res);
}
