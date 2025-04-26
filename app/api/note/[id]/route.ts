import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, content, color } = await req.json();

  await prisma.note.update({
    where: {
      id: params.id,
    },
    data: {
      title,
      content,
      color,
    },
  });

  return NextResponse.json({ message: "Updated" }, { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await prisma.note.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json({ message: "Deleted" }, { status: 200 });
}
