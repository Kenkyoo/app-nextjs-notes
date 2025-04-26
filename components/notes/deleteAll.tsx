"use client";

import { useRouter } from "next/navigation";
import { Note } from "@prisma/client";

export const DeleteAllNotes = ({ notes }: { notes: Note[] }) => {
  const router = useRouter();
  const deleteAll = async (notes: Note[]) => {
    await fetch(`/api/note`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notes,
      }),
    });
    router.refresh();
  };

  return (
    <div
      className="tooltip tooltip-error absolute bottom-2 mx-auto"
      data-tip="This delete all notes"
    >
      <button
        type="button"
        onClick={() => deleteAll(notes)}
        className="btn btn-warning"
      >
        Delete All
      </button>
    </div>
  );
};
