"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";


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
    year: "March 2024 - Present",
    title:
      "Human Factors for Software Engineering & Human-System Interaction at DLR",
    description:
      "Working on human-centered research for large-scale, data-driven platforms and safety-critical aerospace systems within the Institute of Software Technology.",
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
    year: "2022 - 2023",
    title: "Fintech Product Suite",
    description: "Designed comprehensive fintech solutions including a mobile wallet application and corporate banking dashboard for the Egyptian market.",
    image: "/images/fintech-product.png",
    tags: ["Fintech", "Mobile Design", "Web Dashboard", "Design Systems", "Figma", "UI/UX"]
  },
  {
    id: "design-for-fiction",
    type: "ACADEMIC SEMINAR @ UNI SIEGEN",
    year: "2023 - 2024",
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
    <section id="projects" className="px-4 md:px-10 lg:px-20 py-16 bg-[#f8fafc]">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-12">

          <span className="text-sm font-medium bg-blue-100 text-[#155DFC] px-3 py-2 border border-blue-300 rounded-full">
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
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }} // all come from bottom
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2, // 👈 this creates the "one by one" effect
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="h-full flex flex-col cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden group">

                  <div className="relative h-56 overflow-hidden group cursor-pointer">

                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-white/10 transition duration-300"></div>

                    {/* View Details button */}
                    <div className="absolute top-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                      <span className="bg-white/90 backdrop-blur-md text-black px-3 py-1 rounded-full text-xs font-medium shadow">
                        View Details
                      </span>
                    </div>

                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs font-semibold">
                      <span className="text-[#155DFC]">{project.type}</span>{" "}
                      <span className="text-[#90A1B9]">• {project.year}</span>
                    </p>

                    <h3 className="text-lg font-bold mt-2 text-gray-900 min-h-[48px] transition-colors duration-300 group-hover:text-[#155DFC]">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2 min-h-[60px]">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-[#F1F5F9] text-black px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-[#155DFC] transition"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}