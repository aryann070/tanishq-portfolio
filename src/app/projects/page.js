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
    image: "/images/master-thesis.png",
    tags: [
      "Figma",
      "FigJam",
      "Information Architecture",
      "MAXQDA",
      "NASA-TLX",
      "TiA (Trust in Automation)",
      "SUS",
      "Heuristic Evaluation",
      "Ethnography",
      "UI/UX",
      "AI Chatbot",
      "AI Voice Assistant",
      "Qualitative & Quantitative Data",
      "Overleaf",
      "LaTeX"
    ],
    approach: "The project started with understanding the requirements and defining clear objectives. A proper plan and system design were created to ensure smooth development. Suitable technologies were selected based on project needs. The implementation was carried out using modular and efficient coding practices. After development, thorough testing and debugging were performed to fix issues and improve performance. Finally, the project was deployed and monitored for stability.",
    challenges: "One of the major challenges was handling API failures and preventing application crashes. Performance optimization was also important to ensure smooth user experience. Ensuring scalability for handling larger data and users was another difficulty. Security concerns such as preventing unauthorized access and vulnerabilities had to be addressed carefully. Additionally, managing real-time data updates without inconsistencies was a challenging task.",
  },
{
  id: "human-factors-dlr",
    type: "PROFESSIONAL WORK @ DLR",
      year: "2024 - Present",
        title:
  "Human Factors for Software Engineering & Human-System Interaction at DLR",
    description:
  "Conducting human-centered research on collaborative and data-driven interactive systems.",
    image: "/images/professional-work.png",
      tags: [
        "HCI",
        "Aerospace",
        "Heuristics",
        "Figma",
        "Vibe Coding",
        "Conceptboard",
        "Miro",
        "FigJam",
        "Research Presentation",
        "LaTeX",
        "Overleaf",
        "Quantitative Methods",
        "Qualitative Methods",
        "MAXQDA",
        "SPSS",
        "Tableau",
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
    image: "/images/academic-research.png",
      tags: ["Unity", "C#", "VR/AR", "HCI Theory", "Spatial Computing", "User Testing"],
  },
{
  id: "fintech-product-suite",
    type: "PROFESSIONAL WORK",
      year: "2021",
        title: "Fintech Product Suite",
          description: "Designed comprehensive fintech solutions including a mobile wallet application and corporate banking dashboard for the Egyptian market.",
            image: "/images/fintech-product.png",
              tags: ["Fintech", "Mobile Design", "Web Dashboard", "Design Systems", "Figma", "UI/UX"]
},
{
  id: "design-for-fiction",
    type: "ACADEMIC SEMINAR @ UNI SIEGEN",
      year: "2023",
        title: "Design for Fiction: Speculative Futures",
          description: "A speculative design project exploring the ethical implications of future neuro-interfaces through diegetic prototyping and fictional narratives.",
            image: "/images/design-fiction.png",
              tags: ["Speculative Design", "Design Fiction", "Storytelling", "Video Production", "Critical Theory"]
},
{
  id: "protrack-athlete-performance",
    type: "PERSONAL PROJECT",
      year: "2022",
        title: "ProTrack: Athlete Performance Analytics",
          description: "A mobile application designed for elite athletes to track biomechanical data and recovery metrics in real-time.",
            image: "/images/protrack.png",
              tags: ["Mobile App", "Data Visualization", "Sports Tech", "iOS", "Dark Mode UI"]
}
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