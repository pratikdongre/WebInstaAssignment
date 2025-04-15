import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import DraggableElement from "./Element";

const Sidebar = ({ onElementDrag }) => {
  return (
    <div className="w-1/4 p-4 border-r bg-gray-50">
      <h2 className="text-lg font-bold mb-4">Elements</h2>
      <DraggableElement id="text">Text</DraggableElement>
      <DraggableElement id="button">Button</DraggableElement>
      <DraggableElement id="image">Image</DraggableElement>
    </div>
  );
};
export default Sidebar;
