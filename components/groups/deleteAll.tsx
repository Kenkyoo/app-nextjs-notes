"use client";

import { useRouter } from "next/navigation";
import { NotesList } from "@prisma/client";

export const DeleteAllGroups = ({ groups }: { groups: NotesList[] }) => {
  const router = useRouter();
  const deleteAll = async (groups: NotesList[]) => {
    await fetch(`/api/groups`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groups,
      }),
    });
    router.refresh();
  };

  return (
    <div
      className="tooltip tooltip-error absolute bottom-2 mx-auto text-center"
      data-tip="This delete all groups"
    >
      <button
        type="button"
        onClick={() => deleteAll(groups)}
        className="btn btn-warning "
      >
        Delete All
      </button>
    </div>
  );
};
