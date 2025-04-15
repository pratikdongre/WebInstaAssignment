import React from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

const ElementProperties = ({ selected, updateProperties }) => {
  if (!selected)
    return (
      <div className="text-gray-500">
        Select an element to edit its properties
      </div>
    );

  return (
    <form className="space-y-2">
      <label className="block">
        Content:
        <input
          type="text"
          value={selected.content}
          onChange={(e) => updateProperties(e.target.value)}
          className="mt-1 block w-full border rounded p-1"
        />
      </label>
    </form>
  );
};

export default ElementProperties;
