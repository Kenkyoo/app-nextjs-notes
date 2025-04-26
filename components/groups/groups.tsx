"use client";
import { useRouter } from "next/navigation";
import { NotesList } from "@prisma/client";
import GroupsItems from "@/ui/groupsItems"; // Importa el componente GroupsItems

export const GroupsItemsComponent = ({ groups }: { groups: NotesList[] }) => {
  const router = useRouter();

  const deleteGroup = async (id: string) => {
    await fetch(`/api/groups/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

    router.refresh();
  };

  return (
    <div>
      <ul className="menu menu-lg bg-base-100 rounded-box w-full">
        <li className="menu-title">My Notes</li>
        {groups.map((group) => (
          <GroupsItems
            key={group.id}
            id={group.id}
            name={group.name}
            onDelete={deleteGroup} // Pasa la función deleteGroup como prop
          />
        ))}
      </ul>
    </div>
  );
};
