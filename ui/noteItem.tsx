"use client";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import type { FC } from "react";
import type { Identifier, XYCoord } from "dnd-core";
import { NoteCardProps, DragItem, ItemTypes } from "../types/notesTypes";
import { NoteItem, NoteLink, NoteText, NoteTitle } from "@/styles/styckyNotes";
const style = {
  cursor: "move",
};

export const NoteCard: FC<NoteCardProps> = ({
  id,
  title,
  content,
  color,
  index,
  moveCard,
  onDelete,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: ItemTypes.NOTE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) return;

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.NOTE,
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ ...style, opacity: isDragging ? 0.5 : 1 }}
      data-handler-id={handlerId}
    >
      <NoteItem>
        <div className="tooltip  tooltip-right" data-tip="delete this note">
          <button className="btn btn-ghost" onClick={() => onDelete(id)}>
            X
          </button>
        </div>
        <NoteLink style={{ backgroundColor: color }} index={index}>
          <NoteTitle>{title}</NoteTitle>
          <NoteText>{content}</NoteText>
        </NoteLink>
      </NoteItem>
    </div>
  );
};
