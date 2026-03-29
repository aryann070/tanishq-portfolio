import Image from "next/image";
import Link from "next/link";

export default function SelectedWork() {
    const projects = [
        {
            title:
                "Designing AI-Assisted Interaction Concepts for Collaborative Scientific Work",
            category: "MASTER'S THESIS",
            description:
                "Integrated an AI-powered voice assistant into an Electronic Laboratory Notebook (ELN) to enable hands-free documentation for scientists.",
            tags: ["Figma", "FigJam", "Information Architecture"],
            image: "/images/master-thesis.png",
        },
        {
            title:
                "Human Factors for Software Engineering & Human-System Interaction at DLR",
            category: "PROFESSIONAL WORK @ DLR",
            description:
                "Conducting human-centered research on collaborative and data-driven interactive systems within the Institute of Software Technology.",
            tags: ["HCI", "Aerospace", "Heuristics"],
            image: "/images/professional-work.png",
        },
        {
            title: "Immersive Interaction Research & Prototyping",
            category: "ACADEMIC RESEARCH @ UNI SIEGEN",
            description:
                "A collection of research projects investigating user presence, spatial perception, and interaction metaphors in virtual and augmented reality.",
            tags: ["Unity", "C#", "VR/AR"],
            image: "/images/academic-research.png",
        },
    ];

    return (
        <section className="w-full bg-[#f5f7fb] py-20 px-6">
            <div className="w-full mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl font-semibold text-[#0f172a]">
                            Selected Work
                        </h2>
                        <div className="w-12 h-[3px] bg-blue-600 mt-2 rounded-full"></div>
                    </div>

                    <Link
                        href="/projects"
                        className="hidden md:inline-block text-blue-600 text-lg  font-medium hover:underline"
                    >
                        View All Projects ↗
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100"
                        >

                            {/* Image */}
                            <div className="relative w-full h-56">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <p className="text-xs text-blue-600 font-medium mb-3">
                                    {project.category}
                                </p>

                                <h3 className="text-lg font-semibold text-[#0f172a] mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}