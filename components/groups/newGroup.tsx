"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NewGroup } from "@/lib/api/newGroup";

export const NewGroupForm = () => {
  const [newItem, setNewItem] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await NewGroup({ name: newItem.trim() }); // Llama a tu función del backend
      setNewItem(""); // Limpia el input
      router.refresh(); // Actualiza la lista de grupos
    } catch (err) {
      console.error("Error creando grupo:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="New group"
          className="input mx-auto my-5"
          required
        />
      </form>
    </div>
  );
};
