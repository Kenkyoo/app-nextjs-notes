"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { GroupsItemsProps } from "@/types/groupsTypes";
import clsx from "clsx";

export default function GroupsItems({ id, name, onDelete }: GroupsItemsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("list");

  const handleSelect = () => {
    const params = new URLSearchParams(searchParams);
    params.set("list", id);
    router.push(`/dashboard?${params.toString()}`);
  };

  return (
    <div
      onClick={handleSelect}
      className={clsx(
        "flex items-center justify-between cursor-pointer text-gray-600 hover:text-indigo-800 py-4 px-2 transition-all duration-300 hover:translate-x-1 rounded",
        id === selectedId && "bg-indigo-100 text-indigo-900 font-semibold"
      )}
    >
      <li>
        <a>{name}</a>
      </li>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(id);
        }}
        className="text-slate-500 hover:text-slate-800"
      >
        ✕
      </button>
    </div>
  );
}
