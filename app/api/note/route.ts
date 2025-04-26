import { NextResponse } from "next/server";
import { prisma } from "@/db";
import { getUserData } from "@/lib/auth";

export async function POST(req: Request) {
  const { title, content, color, notesListId } = await req.json();
  const userID = await getUserData();

  if (!title || !notesListId || !userID) {
    return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
  }

  await prisma.note.create({
    data: { title, content, color, userId: userID ?? "", notesListId },
  });

  return NextResponse.json({ message: "Created a new note" }, { status: 200 });
}

export async function DELETE() {
  await prisma.note.deleteMany({});
  return NextResponse.json(
    { message: "This note was deleted" },
    { status: 200 }
  );
}
