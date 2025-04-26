"use client";

import { useRouter } from "next/navigation";
import { Note } from "@prisma/client";
import update from "immutability-helper";
import { useCallback, useEffect, useState } from "react";
import { NoteCard } from "@/ui/noteItem";

export const NotesListItem = ({ notes }: { notes: Note[] }) => {
  const [notesItem, setNotes] = useState<Note[]>([]);
  const router = useRouter();

  useEffect(() => {
    setNotes(notes); // Inicializa solo una vez
  }, [notes]);

  const deleteNote = async (id: string) => {
    await fetch(`/api/note/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  const moveNote = useCallback((dragIndex: number, hoverIndex: number) => {
    setNotes((prevNotes) =>
      update(prevNotes, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevNotes[dragIndex]],
        ],
      })
    );
  }, []);

  return (
    <>
      {notesItem.map((note, index) => (
        <NoteCard
          key={note.id}
          id={note.id}
          index={index}
          title={note.title}
          moveCard={moveNote}
          color={note.color}
          content={note.content}
          onDelete={() => deleteNote(note.id)}
        />
      ))}
    </>
  );
};
