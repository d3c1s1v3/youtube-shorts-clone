import { NextResponse } from "next/server";

export async function GET() {
  const array = [1, 2, 3];

  return NextResponse.json(array);
}
