import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

const DraggableElement = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-move p-2 border rounded bg-white shadow"
    >
      {children}
    </div>
  );
};

export default DraggableElement;
