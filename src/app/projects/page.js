"use client";

import Link from "next/link";

const projects = [
  {
    id: "ai-interaction",
    type: "MASTER'S THESIS",
    year: "2023",
    title:
      "Designing AI-Assisted Interaction Concepts for Collaborative Scientific Work",
    description:
      "Integrated an AI-powered voice assistant into an Electronic Laboratory Notebook (ELN) to enable hands-free documentation for scientists.",
    image: "/images/project1.jpg",
    tags: [
      "Figma",
      "Information Architecture",
      "MAXQDA",
      "NASA-TLX",
      "UX/UI",
      "AI Chatbot",
      "LaTeX",
    ],
  },
  {
    id: "human-factors-dlr",
    type: "PROFESSIONAL WORK @ DLR",
    year: "2024 - Present",
    title:
      "Human Factors for Software Engineering & Human-System Interaction at DLR",
    description:
      "Conducting human-centered research on collaborative and data-driven interactive systems.",
    image: "/images/project2.jpg",
    tags: [
      "HCI",
      "Aerospace",
      "Heuristics",
      "Figma",
      "Miro",
      "SPSS",
      "Data Visualization",
    ],
  },
  {
    id: "immersive-research",
    type: "ACADEMIC RESEARCH @ UNI SIEGEN",
    year: "2022 - 2023",
    title: "Immersive Interaction Research & Prototyping",
    description:
      "Exploring user presence, spatial perception, and interaction metaphors in VR/AR.",
    image: "/images/project3.jpg",
    tags: ["Unity", "C#", "VR/AR", "HCI Theory", "Spatial Computing"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-16 py-16 bg-[#f8fafc]">

      {/* Header */}
      <div className="mb-12">
        <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          Portfolio
        </span>
        <h2 className="text-4xl font-bold mt-4 text-gray-900">
          Work & Research
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl">
          A collection of projects exploring the intersection of human factors,
          aerospace technology, and artificial intelligence.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>

            {/* ✅ FULL HEIGHT CARD */}
            <div className="h-full flex flex-col cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden group">
              {/* Image (fixed height) */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* ✅ FLEX CONTENT */}
              <div className="p-6 flex flex-col flex-grow">

                <p className="text-xs text-blue-600 font-semibold">
                  {project.type} • {project.year}
                </p>

                {/* TITLE */}
                <h3 className="text-lg font-bold mt-2 text-gray-900 min-h-[48px] transition-colors duration-300 group-hover:text-blue-600">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-sm mt-2 min-h-[60px] transition-colors duration-300">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-black px-2 py-1 rounded-full transition-colors duration-300 group-hover:bg-blue-100 group-hover:text-blue-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}