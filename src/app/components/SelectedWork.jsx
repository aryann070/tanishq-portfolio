"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SelectedWork() {
    const projects = [
        {
            id: "ai-interaction",
            title:
                "Designing AI-Assisted Interaction Concepts for Collaborative Scientific Work",
            category: "MASTER'S THESIS",
            description:
                "Integrated an AI-powered voice assistant into an Electronic Laboratory Notebook (ELN) to enable hands-free documentation for scientists.",
            tags: ["Figma", "FigJam", "Information Architecture"],
            image: "/images/master-thesis.png",
        },
        {
            id: "human-factors-dlr",
            title:
                "Human Factors for Software Engineering & Human-System Interaction at DLR",
            category: "PROFESSIONAL WORK @ DLR",
            description:
                "Conducting human-centered research on collaborative and data-driven interactive systems within the Institute of Software Technology.",
            tags: ["HCI", "Aerospace", "Heuristics"],
            image: "/images/professional-work.png",
        },
        {
            id: "immersive-research",
            title: "Immersive Interaction Research & Prototyping",
            category: "ACADEMIC RESEARCH @ UNI SIEGEN",
            description:
                "A collection of research projects investigating user presence, spatial perception, and interaction metaphors in virtual and augmented reality.",
            tags: ["Unity", "C#", "VR/AR"],
            image: "/images/academic-research.png",
        },
    ];
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12, // 👈 quick one-by-one
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 60 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5, // 👈 fast
                ease: [0.22, 1, 0.36, 1], // 👈 smooth
            },
        },
    };

    return (
        <section className="w-full bg-[#F8FAFC] py-20 px-6">

            <div className="w-full max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex items-center justify-between mb-12">
                    <Reveal>
                        <div>
                            <h2 className="text-3xl font-bold text-[#0f172a]">
                                Selected Work
                            </h2>
                            <div className="w-18 h-[4px] bg-blue-600 mt-2 rounded-full"></div>
                        </div>
                    </Reveal>


                    <Link
                        href="/projects"
                        className="hidden md:inline-block text-[#155DFC] text-base  font-medium hover:text-blue-800"
                    >
                        <span className="flex items-center gap-1">
                            View All Projects
                            <ArrowUpRight size={16} />
                        </span>
                    </Link>
                </div>


                {/* Cards */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }} // 👈 triggers when visible
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={item}>

                            <Link
                                href={`/projects/${project.id}`}
                                className="block h-full"
                            >
                                <div className="h-full flex flex-col cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden group">

                                    <div className="relative w-full h-56 flex-shrink-0 group overflow-hidden cursor-pointer">

                                        {/* Image */}
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition duration-300 group-hover:scale-105"
                                        />

                                        {/* Dark overlay */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-white/10 transition duration-300"></div>

                                        {/* View Details button (hidden → visible on hover) */}
                                        <div className="absolute top-3 right-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                                            <span className="bg-white/90 backdrop-blur-md text-black px-3 py-1 rounded-full text-xs font-medium shadow">
                                                View Details
                                            </span>
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="group p-6 flex flex-col flex-grow">

                                        <p className="text-xs text-[#155DFC] font-semibold mb-3">
                                            {project.category}
                                        </p>


                                        <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#155DFC] transition-colors duration-300 flex items-center">
                                            <span>{project.title}</span>

                                            {/* <span className="ml-2 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                →
                                            </span> */}
                                        </h3>

                                        <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-3 py-1 rounded-full bg-[#F1F5F9] text-black"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </Link>

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section >
    );
}