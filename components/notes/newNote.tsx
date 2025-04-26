"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { NewNote } from "@/lib/api/newNote"; // tu función de fetch

export const NewNoteForm = ({ notesListId }: { notesListId: string }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#000000");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await NewNote({ title, content, color, notesListId });
      setTitle("");
      setContent("");
      setColor("#BFA540");
      router.refresh();
    } catch (err) {
      console.error("Error creando nota:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <label className="label">Title</label>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />
        <label className="label">Content</label>
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea"
        />
        <label className="label">Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn btn-neutral mt-4">
          Crear Nota
        </button>
      </fieldset>
    </form>
  );
};
