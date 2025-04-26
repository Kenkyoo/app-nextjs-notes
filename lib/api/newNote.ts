export async function NewNote(data: {
  title: string;
  content: string;
  color: string;
  notesListId: string;
}) {
  const res = await fetch("/api/note", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error al crear la nota");
  }

  return res.json();
}
