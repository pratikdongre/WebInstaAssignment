// src/components/CanvasElement.jsx
import React from "react";
import { Rnd } from "react-rnd";

const CanvasElement = ({ element, onUpdate, onSelect }) => {
  const { id, x, y, width, height, content, type, color, backgroundColor } =
    element;

  return (
    <Rnd
      size={{ width, height }}
      position={{ x, y }}
      onDragStop={(e, d) => {
        onUpdate(id, { x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        onUpdate(id, {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: position.x,
          y: position.y,
        });
      }}
      bounds="parent"
    >
      <div
        className="bg-white border rounded shadow p-2 h-full w-full cursor-pointer"
        onClick={() => onSelect(element)}
        style={{
          backgroundColor: backgroundColor || "#ffffff",
          color: color || "#000000",
        }}
      >
        {type === "text" ? (
          <p className="w-full h-full">{content}</p>
        ) : type === "button" ? (
          <button className="w-full h-full bg-blue-500 text-white rounded">
            {content}
          </button>
        ) : type === "image" ? (
          <img
            src={content}
            alt="Canvas Element"
            className="w-full h-full object-cover rounded"
          />
        ) : null}
      </div>
    </Rnd>
  );
};

export default CanvasElement;
