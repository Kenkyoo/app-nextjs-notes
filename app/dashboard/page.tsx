import Sidebar from "@/ui/sidebar";
import { GroupsItemsComponent } from "@/components/groups/groups";
import Main from "@/ui/main";
import { NotesListItem } from "@/components/notes/notes";
import { prisma } from "@/db";
import { getUserData } from "@/lib/auth";
import { NewGroupForm } from "@/components/groups/newGroup";
import { NewNoteForm } from "@/components/notes/newNote";
import AddNote from "@/ui/addNote";
import { DeleteAllGroups } from "@/components/groups/deleteAll";
import { DeleteAllNotes } from "@/components/notes/deleteAll";
import Container from "@/ui/container";
import GridCols from "@/ui/gridColsNotes";
/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function Dashboard({
  searchParams,
}: {
  searchParams: any;
}) {
  const userID = await getUserData();

  const groups = await prisma.notesList.findMany({
    where: { userId: userID },
  });

  const selectedListId = searchParams?.list || groups[0]?.id;
  const notes = await prisma.note.findMany({
    where: {
      userId: userID,
      notesListId: selectedListId,
    },
  });

  return (
    <Container>
      <Main>
        <AddNote>
          <NewNoteForm notesListId={selectedListId} />
        </AddNote>
        <GridCols>
          <NotesListItem notes={notes} />
        </GridCols>
        <DeleteAllNotes notes={notes} />
      </Main>
      <Sidebar>
        <NewGroupForm />
        <GroupsItemsComponent groups={groups} />
        <DeleteAllGroups groups={groups} />
      </Sidebar>
    </Container>
  );
}
