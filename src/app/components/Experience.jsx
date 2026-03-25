export default function ExperienceEducation() {
    const timeline = [
        {
            title: "Research Assistant",
            org: "DLR - German Aerospace Center",
            duration: "June 2024 – Present",
            desc: "Designing solutions for human-system interaction and human factors in space technology. Conducting user research for mission control interfaces and pilot support systems.",
            link: true,
        },
        {
            title: "Intern Research Assistant",
            org: "DLR - German Aerospace Center",
            duration: "Mar 2024 – May 2024",
            desc: "Supported research projects in human factors, assisting with experimental setups and data collection for aerospace interaction scenarios.",
        },
        {
            title: "M.Sc. Human-Computer Interaction",
            org: "University of Siegen",
            duration: "Enrolled",
            desc: "Specializing in Human-AI collaboration, user research methods, and interactive systems.",
        },
        {
            title: "PGDip User Experience Design",
            org: "SPIT, University of Mumbai",
            duration: "2022",
            desc: "Postgraduate Diploma focusing on UX principles, design thinking, and user-centered design methodologies.",
        },
    ];

    return (
        <section className="bg-[#f8fafc] py-16 px-3 md:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
                        Experience & Education
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        My background combines rigorous engineering principles with
                        user-centered design, specialized for complex, high-stakes domains
                        like aerospace.
                    </p>

                    <button className="text-blue-600 font-medium hover:underline">
                        Request Detailed Experience Record
                    </button>
                </div>

                {/* RIGHT SIDE TIMELINE */}
                <div className="flex flex-col gap-12">

                    {/* TIMELINE */}
                    <div className="relative">
                        <div className="relative">
                            {timeline.map((item, index) => (
                                <div key={index} className="mb-10 flex gap-4">

                                    {/* LEFT SIDE (dot + short line) */}
                                    <div className="flex flex-col items-center">

                                        {/* DOT */}
                                        <div
                                            className={`w-3 h-3 rounded-full ring-4 ring-white shadow ${index === 0 ? "bg-blue-600" : "bg-gray-400"
                                                }`}
                                        ></div>

                                        {/* SHORT LINE */}

                                        <div className="w-[1px] flex-1 bg-gray-300 mt-1"></div>

                                    </div>

                                    {/* RIGHT CONTENT */}
                                    <div className="flex flex-col md:flex-row md:justify-between w-full gap-2">

                                        <div className="max-w-lg">
                                            <h3 className="text-lg font-semibold text-[#0f172a]">
                                                {item.title}
                                            </h3>

                                            <p className="text-blue-600 text-sm font-medium">
                                                {item.org}
                                            </p>

                                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                                {item.desc}
                                            </p>

                                            {item.link && (
                                                <a
                                                    href="#"
                                                    className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                                                >
                                                    View Related Project →
                                                </a>
                                            )}
                                        </div>

                                        <span className="text-sm text-gray-500 whitespace-nowrap md:text-right">
                                            {item.duration}
                                        </span>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SKILLS SECTION */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#0f172a] mb-6">
                            Technical & Research Skills
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8">

                            {/* Research Methods */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <h4 className="font-medium text-[#0f172a]">
                                        Research Methods
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Usability Testing",
                                        "Contextual Inquiry",
                                        "Heuristic Evaluation",
                                        "Experimental Design",
                                        "Statistical Analysis",
                                        "Survey Design",
                                    ].map((skill, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-lg"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Tech */}
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <h4 className="font-medium text-[#0f172a]">
                                        Tools & Tech
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Figma",
                                        "React / TypeScript",
                                        "Python",
                                        "Unity 3D",
                                        "Tailwind CSS",
                                        "SPSS / R",
                                        "Prototyping",
                                    ].map((skill, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-lg"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}