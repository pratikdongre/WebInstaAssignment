import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

const DroppableCanvas = ({ onDrop, children }) => {
  const { setNodeRef } = useDroppable({ id: "canvas" });

  return (
    <div
      ref={setNodeRef}
      id="canvas"
      className="relative w-full h-[500px] border-2 border-dashed rounded p-4 bg-red-100"
    >
      {children}
    </div>
  );
};

export default DroppableCanvas;
