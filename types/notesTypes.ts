export const ItemTypes = {
  NOTE: "note",
};

export interface NoteCardProps {
  id: string;
  title: string;
  index: number;
  color: string;
  content: string;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  onDelete: (id: string) => void;
}

export interface DragItem {
  index: number;
  id: string;
  type: string;
}
