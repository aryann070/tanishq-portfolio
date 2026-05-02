"use client"
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // 👈 one-by-one
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ExperienceEducation() {



  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const timeline = [
    {
      title: "Research Assistant",
      org: "DLR - German Aerospace Center",
      duration: "June 2024 – Present",
      desc: "Designing solutions for human-system interaction and human factors in space technology. Conducting user research for mission control interfaces and pilot support systems.",
      link: "/projects/human-factors-dlr",
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
    <section id="experience" className="bg-[#f8fafc] py-24 px-4 md:px-10 lg:px-20 w-full">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}   // 👈 start from left
            whileInView={{ opacity: 1, x: 0 }} // 👈 move to normal
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.3,                   // fast
              ease: [0.22, 1, 0.36, 1],        // smooth
            }}
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Experience & Education
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              My background combines rigorous engineering principles with user-centered design, spanning diverse domains from aerospace systems to speculative design and everyday interactions.
            </p>

            <a
              href="/pdf/tanishq_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#155DFC] font-medium hover:underline"
            >
              Request Detailed Experience Record (CV/Resume)
            </a>
          </motion.div>

          {/* RIGHT SIDE TIMELINE */}
          <div className="flex flex-col gap-12">

            <motion.div className="relative">
              {timeline.map((itemData, index) => (

                <motion.div
                  key={index}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }} // 👈 triggers per item
                  className="mb-10 flex gap-4"
                >

                  {/* LEFT SIDE */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full ring-4 ring-white shadow ${index === 0 ? "bg-blue-600" : "bg-gray-400"
                        }`}
                    ></div>

                    <div className="w-[1px] flex-1 bg-gray-300 mt-1"></div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="flex flex-col md:flex-row md:justify-between w-full gap-2">

                    <div className="max-w-lg">
                      <h3 className="text-lg font-semibold text-[#0f172a]">
                        {itemData.title}
                      </h3>

                      <p className="text-[#155DFC] text-sm font-medium">
                        {itemData.org}
                      </p>

                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                        {itemData.desc}
                      </p>
                      {itemData.link && (
                        <a
                          href={itemData.link}
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#155DFC] hover:text-blue-800 cursor-pointer"
                        >
                          View Related Project
                          <FiArrowRight size={14} />
                        </a>
                      )}
                    </div>



                    <span
                      className="text-sm text-gray-500 whitespace-nowrap md:text-right"
                      style={{ fontFamily: "Menlo, Menlo, monospace" }}
                    >
                      {itemData.duration}
                    </span>

                  </div>

                </motion.div>

              ))}
            </motion.div>

            {/* SKILLS SECTION */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}   // start slightly below
              whileInView={{ opacity: 1, y: 0 }} // move up + fade in
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
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
            </motion.div>

          </div>

        </div>
      </div>
    </section >
  );
}