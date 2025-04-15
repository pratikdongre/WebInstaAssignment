// src/components/TemplateCard.jsx
import React from "react";

const TemplateCard = ({ template, onClick }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-red-300 hover:shadow-xl transition-shadow duration-300">
      <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center text-4xl font-bold text-white">
        {template.icon}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{template.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{template.description}</p>
        <button
          onClick={() => onClick(template)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Use Template
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
