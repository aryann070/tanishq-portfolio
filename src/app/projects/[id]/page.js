import { projects } from "@/app/data/projects";

import {
  BsFileEarmarkText, BsBoxArrowUpRight, BsCheckCircle, BsArrowLeft,
  BsLayers,
  BsEye,
  BsBook,
  BsPeople,
  BsDatabase,
  BsMic,
  BsChatDots,
  BsCpu,

} from "react-icons/bs";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";

export default async function ProjectDetail({ params }) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10 text-red-500">Project not found 🚫</div>;
  }

  return (
    <section className="bg-[#f5f7fb] min-h-screen px-6 md:px-16 lg:px-8 py-12">

      <div className="max-w-7xl mx-auto">
        {/* Back */}
        <Link
          href="/projects"
          className="flex items-center gap-2 text-base text-gray-500 hover:text-blue-600 transition"
        >
          <BsArrowLeft size={14} />
          Back to All Projects
        </Link>

        {/* Header */}
        <div className="mt-6 max-w-5xl">
          <div className="flex items-center gap-2 text-sm">
            <span className="bg-blue-100 text-blue-600 font-semibold px-3 py-0.5 rounded-full">
              {project.category}
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500 font-semibold">{project.year}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0f172a] mt-3 leading-[1.15]">
            {project.title}
          </h1>
          <p className="text-gray-500 mt-4 text-lg">{project.subtitle}</p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 items-start">

          {/* LEFT PANEL */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-xs text-gray-400 font-semibold uppercase mb-1">My Role</p>
            <p className="text-gray-800 font-medium mb-4">{project.role}</p>

            {project.team && (
              <>
                <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Supervision / Team</p>
                <p className="text-gray-700 mb-4">{project.team}</p>
              </>
            )}

            <p className="text-xs text-gray-400 font-semibold uppercase mb-2">Tools & Tech</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tools?.map((tool, i) => (
                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
                  {tool}
                </span>
              ))}
            </div>

            {project.prototype && (
              <a
                href={project.prototype}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Prototype
                <BsBoxArrowUpRight size={16} />
              </a>
            )}
          </div>



          {/* RIGHT SIDE */}
          <div className="md:col-span-2">
            <div className="bg-gray-100 h-14 mb-6 flex items-center gap-4 px-4 rounded-full">
              {project.icons?.map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center"
                >
                  <img
                    src={icon}
                    alt="tech icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Sub Projects Cards */}
            {project.subProjects?.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {project.subProjects.map((sub, i) => (
                  <div key={i} className="bg-white rounded-2xl  p-5 shadow-sm flex flex-col justify-between">

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-semibold text-[#0f172a] text-lg leading-snug mb-3">
                        {sub.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {sub.description}
                      </p>
                    </div>

                    {/* Bottom — conditional */}
                    <div className="mt-4">

                      {/* Report Button */}
                      {sub.type === "report" && (
                        <div className="w-full">
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full font-medium text-sm text-black bg-gray-100 hover:bg-gray-200 transition px-5 py-3 rounded-lg"
                          >
                            {sub.label}
                            <BsFileEarmarkText size={16} />
                          </a>
                        </div>
                      )}

                      {/* Video Box */}
                      {sub.type === "video" && (
                        <div className="w-full aspect-video bg-[#0f172a] rounded-lg overflow-hidden">
                          <div className="w-full h-full border-0">
                            <iframe
                              src={sub.url}
                              className="w-full h-full border-0"
                              scrolling="no"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={sub.title}
                            />
                          </div>
                        </div>
                      )}

                      {/* Prototype / External Link Button */}
                      {sub.type === "prototype" && (
                        <div className="w-full">
                          <a
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center font-semibold justify-center gap-2 w-full text-xs text-white bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-lg"
                          >
                            {sub.label}
                            <BsBoxArrowUpRight size={16} />
                          </a>
                        </div>
                      )}

                    </div>
                  </div>
                ))}
              </div>
            )}


            <div className="max-w-5xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>

              <p className="text-gray-500 leading-relaxed text-base  mb-12">
                {project.challenges}
              </p>
            </div>

            <div className="mb-12 space-y-5">
              {Array.isArray(project.approach) ? (
                project.approach.map((para, i) => (
                  <p key={i} className="text-gray-500 leading-relaxed text-base">
                    {para}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 leading-relaxed text-base">
                  {project.approach}
                </p>
              )}
            </div>

            {/*Research Methodology*/}
            {project.id === "human-factors-dlr" && project.methodology && (
              <section className="bg-white max-w-5xl px-8 py-8 rounded-2xl mt-10 mb-12 shadow-md">

                {/* Title */}
                <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-12">
                  Methodology
                </h2>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">

                  {/* Research Methods */}
                  {project.methodology.researchMethods?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100">
                          <BsFileEarmarkText className="text-blue-600" size={18} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Research Methods
                        </h3>
                      </div>

                      <ul className="space-y-4">
                        {project.methodology.researchMethods.map((item, i) => (
                          <li key={i} className="grid grid-cols-[20px_1fr] gap-3 text-gray-500 text-sm">
                            <BsCheckCircle className="text-blue-500 mt-[2px]" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Design Process */}
                  {project.methodology.designProcess?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-100">
                          <BsLayers className="text-purple-600" size={18} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Design Process
                        </h3>
                      </div>

                      <ul className="space-y-4">
                        {project.methodology.designProcess.map((item, i) => (
                          <li key={i} className="grid grid-cols-[20px_1fr] gap-3 text-gray-500 text-sm">
                            <BsCheckCircle className="text-purple-500 mt-[2px]" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Evaluation Methods */}
                  {project.methodology.evaluationMethods?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-100">
                          <BsCheckCircle className="text-green-600" size={18} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Evaluation Methods
                        </h3>
                      </div>

                      <ul className="space-y-4">
                        {project.methodology.evaluationMethods.map((item, i) => (
                          <li key={i} className="grid grid-cols-[20px_1fr] gap-3 text-gray-500 text-sm">
                            <BsCheckCircle className="text-green-500 mt-[2px]" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Focus Areas */}
                  {project.methodology.focusAreas?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-100">
                          <BsEye className="text-orange-500" size={18} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Focus Areas
                        </h3>
                      </div>

                      <ul className="space-y-4">
                        {project.methodology.focusAreas.map((item, i) => (
                          <li key={i} className="grid grid-cols-[20px_1fr] gap-3 text-gray-500 text-sm">
                            <BsCheckCircle className="text-orange-500 mt-[2px]" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </section>
            )}


            {/* Research Context */}
            {project.id === "ai-interaction" && project.researchContext && (
              <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-gray-200 mb-6">

                {/* Title */}
                <h2 className="text-2xl text-gray-900 font-semibold mb-6">
                  Research Context
                </h2>

                {/* Top Cards */}
                <div className="grid md:grid-cols-3 gap-6">

                  {/* Theoretical Grounding */}
                  <div className="bg-white rounded-xl shadow-sm p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full  bg-blue-100 text-blue-600">
                      <BsBook size={28} />
                    </div>
                    <h3 className="text-sm text-gray-900 font-semibold mb-2 ">Theoretical Grounding</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.researchContext.theoreticalGrounding}
                    </p>
                  </div>

                  {/* Study Method */}
                  <div className="bg-white rounded-xl shadow-sm p-4 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full  bg-purple-100 text-purple-600">
                      <BsPeople size={28} />
                    </div>
                    <h3 className="text-sm text-gray-900 font-semibold mb-2">Study Method</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.researchContext.studyMethod}
                    </p>
                  </div>

                  {/* Domain */}
                  <div className="bg-white rounded-xl shadow-sm p-4 text-center border">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                      <BsDatabase size={28} />
                    </div>
                    <h3 className="text-sm text-gray-900 font-semibold mb-2">Domain</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {project.researchContext.domain}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {project.id === "ai-interaction" && project.interactionConcept && (
              <section className=" mb-6">

                {/* Title */}
                <h2 className="text-2xl text-gray-900 font-semibold mb-4">
                  {project.interactionConcept.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 max-w-3xl mb-6 leading-relaxed">
                  {project.interactionConcept.description}
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-6">

                  {project.interactionConcept.modalities?.map((item, index) => {
                    const isFirst = index === 0;

                    return (
                      <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">

                        {/* Header - solid colored band */}
                        <div
                          className={`flex items-center gap-3 px-5 py-3 ${isFirst ? "bg-blue-600" : "bg-purple-600"
                            }`}
                        >
                          <div className="text-white">
                            {isFirst ? <BsMic size={18} /> : <BsChatDots size={18} />}
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>

                        {/* Body */}
                        <div className="p-5">

                          {/* Description */}
                          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Points */}
                          <ul className="space-y-3">
                            {item.points?.map((point, i) => (
                              <li
                                key={i}
                                className="grid grid-cols-[16px_1fr] gap-2 text-xs text-gray-600"
                              >
                                <BsCheckCircle
                                  className={`mt-[2px] ${isFirst ? "text-blue-500" : "text-purple-500"
                                    }`}
                                  size={16}
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {project.id === "ai-interaction" && project.designPrinciples && (
              <section className="mb-10">

                {/* Outer Container */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">

                  {/* Title */}
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                    {project.designPrinciples.title}
                  </h2>

                  {/* Grid */}
                  <div className="grid md:grid-cols-2 gap-6">

                    {project.designPrinciples.items?.map((item, index) => {

                      let icon = null;
                      let style = "";

                      if (item.title === "Transparency") {
                        icon = <BsEye size={18} />;
                        style = "bg-blue-100 text-blue-600";
                      } else if (item.title === "Progressive Disclosure") {
                        icon = <BsLayers size={18} />;
                        style = "bg-purple-100 text-purple-600";
                      } else if (item.title === "Human-in-the-Loop") {
                        icon = <BsPeople size={18} />;
                        style = "bg-green-100 text-green-600";
                      } else if (item.title === "Epistemic Responsibility") {
                        icon = <BsCpu size={18} />;
                        style = "bg-orange-100 text-orange-600";
                      }

                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-5 rounded-xl bg-gray-50"
                        >

                          {/* Icon */}
                          <div className={`p-3 rounded-lg flex items-center justify-center ${style}`}>
                            {icon}
                          </div>

                          {/* Content */}
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                              {item.description}
                            </p>
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
              </section>
            )}

            {project.id === "ai-interaction" && project.thesisCTA && (

              <div className="mb-12 space-y-5">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Approach & Methodology
                </h2>
                {Array.isArray(project.approaches) ? (
                  project.approaches.map((para, i) => (
                    <p key={i} className="text-gray-500 leading-relaxed text-base">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500 leading-relaxed text-base">
                    {project.approaches}
                  </p>
                )}
              </div>
            )}

            {project.id === "ai-interaction" && project.thesisCTA && (
              <section className="mb-10">

                <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-2xl px-8 py-6">

                  {/* Left Content */}
                  <div className="max-w-2xl">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      {project.thesisCTA.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.thesisCTA.description}
                    </p>
                  </div>

                  {/* Button */}
                  <a
                    href={project.thesisCTA.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-xl transition whitespace-nowrap min-w-[180px]"
                  >
                    <BsFileEarmarkText size={20} />
                    <span>{project.thesisCTA.buttonText}</span>
                  </a>

                </div>

              </section>
            )}


            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes & Impact</h2>
            <ul className="space-y-4">
              {project.outcomes?.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <BsCheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                  <p className="text-gray-500 leading-relaxed text-base">{item}</p>
                </li>
              ))}
            </ul>


          </div>
        </div>
      </div>

    </section>
  );
}