import { useState } from "react";
import TitleHeader from "../components/TitleHeader";

const ProjectsAccordion = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "MoonLanding",
      url: "/moonlanding.html",
    },
    {
      id: 2,
      name: "NatureFlight",
      url: "/natureflight.html",
    },
  ];

  const handleProjectClick = (project) => {
    // Open project in a new window/tab
    window.open(project.url, '_blank');
  };

  return (
    <div className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="My Projects" sub="🚀 Featured Landing Pages" />

        <div className="mt-10">
          {/* Accordion Header */}
          <div
            className="card-border rounded-xl p-6 cursor-pointer transition-all hover:bg-black-200/50"
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-white">
                Landing Pages
              </h3>
              <svg
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  isAccordionOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Accordion Content */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isAccordionOpen ? "max-h-96 mt-4" : "max-h-0"
            }`}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="card-border rounded-xl p-6 cursor-pointer transition-all hover:scale-105 hover:bg-black-200/50"
                  onClick={() => handleProjectClick(project)}
                >
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {project.name}
                    </h4>
                    <p className="text-sm text-white-50">Click to preview</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectsAccordion;

