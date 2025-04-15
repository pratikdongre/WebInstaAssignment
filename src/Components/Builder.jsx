import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Add useNavigate
import { DndContext } from "@dnd-kit/core";

import DroppableCanvas from "./Canvas";
import ElementProperties from "./PropertyForm";
import Sidebar from "./Sidebar";
import DraggableElement from "./Element";
import "./Builder.css";
import CanvasElement from "./CanvasElement";

const Builder = () => {
  const location = useLocation();
  const navigate = useNavigate(); // in case you want to redirect

  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const handleDelete = (id) => {
    setElements(elements.filter((el) => el.id !== id));
  };

  useEffect(() => {
    if (elements.length > 0) {
      localStorage.setItem("selectedTemplate", JSON.stringify(elements));
    }
  }, [elements]);

  useEffect(() => {
    const raw =
      location.state?.template ||
      JSON.parse(localStorage.getItem("selectedTemplate"));

    if (Array.isArray(raw)) {
      const patched = raw.map((el) => ({
        ...el,
        x: el.x ?? 100,
        y: el.y ?? 100,
        width: el.width ?? 200,
        height: el.height ?? 50,
      }));
      setElements(patched);
    } else {
      navigate("/");
    }
  }, [location.state, navigate]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && over.id === "canvas") {
      const newElement = {
        id: `${active.id}-${Date.now()}`,
        type: active.id,
        content: active.id === "text" ? "Editable Text" : "Click Me",
        x: 100,
        y: 100,
        width: 200,
        height: 50,
      };
      setElements([...elements, newElement]);
    }
  };

  const updateProperties = (content) => {
    setElements(
      elements.map((el) =>
        el.id === selectedElement.id ? { ...el, content } : el
      )
    );
    setSelectedElement({ ...selectedElement, content });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-4">
          <DroppableCanvas>
            {elements.length === 0 ? (
              <p className="text-gray-400">Drop elements here...</p>
            ) : (
              elements.map((el) => (
                <CanvasElement
                  key={el.id}
                  element={el}
                  onUpdate={(id, newProps) =>
                    setElements((prev) =>
                      prev.map((item) =>
                        item.id === id ? { ...item, ...newProps } : item
                      )
                    )
                  }
                  onSelect={(element) => setSelectedElement(element)}
                />
              ))
            )}
          </DroppableCanvas>
        </main>
        <aside className="w-1/4 p-4 border-l bg-gray-50">
          <h2 className="text-lg font-bold mb-4">Properties</h2>
          <ElementProperties
            selected={selectedElement}
            updateProperties={updateProperties}
            onDelete={handleDelete}
          />
        </aside>
      </div>
    </DndContext>
  );
};

export default Builder;
