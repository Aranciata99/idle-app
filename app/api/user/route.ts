import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { username } = await request.json();

  const user = await prisma.user.create({
    data: {
      username: username,
    },
  });

  return NextResponse.json(user);
}