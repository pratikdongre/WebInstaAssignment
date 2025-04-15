// src/pages/Home.jsx
import React from "react";
import TemplateCard from "../components/TemplateCard";
import { useNavigate } from "react-router-dom";

import templates from "../templates";
import portfolio from "../templates/Portfolio";

const Home = () => {
  const navigate = useNavigate();
  const handleUseTemplate = (template) => {
    console.log("User selected:", template.data);
    localStorage.setItem("selectedTemplate", JSON.stringify(template.data));
    // navigate("/builder");
    // navigate("/builder", { state: { template: template.data } });

    navigate("/builder", { state: { template: template.data } });
    // ← for later

    // localStorage.removeItem("selectedTemplate");
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Choose a Template
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {Object.values(templates).map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onClick={handleUseTemplate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
