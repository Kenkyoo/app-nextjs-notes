import { NextResponse } from "next/server";
import { prisma } from "@/db";
import { getUserData } from "@/lib/auth";

export async function POST(req: Request) {
  const userID = await getUserData();
  const { name } = await req.json();

  if (userID) {
    if (typeof name !== "string" || name.length === 0) {
      throw new Error("That can't be a title");
    }
    await prisma.notesList.create({
      data: { name, userId: userID ?? "" },
    });

    return NextResponse.json({ message: "Created group" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}

export async function DELETE() {
  await prisma.notesList.deleteMany({});
  return NextResponse.json({ message: "All groups Deleted" }, { status: 200 });
}
