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

interface DeleteContext {
  params: {
    id: string;
  };
}

export async function DELETE(req: Request, context: DeleteContext) {
  const { id } = context.params;

  await prisma.note.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Deleted Item" }, { status: 200 });
}
