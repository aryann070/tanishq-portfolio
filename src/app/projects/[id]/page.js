import { projects } from "@/app/data/projects";
import { BsFileText, BsBoxArrowUpRight, BsCheckCircle } from "react-icons/bs";
import Link from "next/link";

export default async function ProjectDetail({ params }) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10 text-red-500">Project not found 🚫</div>;
  }

  return (
    <section className="bg-[#f5f7fb] min-h-screen px-6 md:px-16 lg:px-24 py-12">

      {/* Back */}
      <Link href="/projects" className="text-sm text-gray-500 hover:underline">
        ← Back to All Projects
      </Link>

      {/* Header */}
      <div className="mt-6 max-w-5xl">
        <p className="text-sm text-blue-600 font-medium">
          {project.category} | {project.year}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#0f172a] mt-3 leading-[1.15]">
          {project.title}
        </h1>
        <p className="text-gray-500 mt-4 text-lg">{project.subtitle}</p>
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 items-start">

        {/* LEFT PANEL */}
        <div className="bg-white rounded-2xl border p-6 shadow-sm">
          <p className="text-xs text-gray-400 uppercase mb-1">My Role</p>
          <p className="text-gray-800 font-medium mb-4">{project.role}</p>

          {project.team && (
            <>
              <p className="text-xs text-gray-400 uppercase mb-1">Supervision / Team</p>
              <p className="text-gray-700 mb-4">{project.team}</p>
            </>
          )}

          <p className="text-xs text-gray-400 uppercase mb-2">Tools & Tech</p>
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
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Prototype
            </a>
          )}
        </div>

  


        {/* RIGHT SIDE */}
        <div className="md:col-span-2">
          <div className="bg-gray-100 rounded-xl h-12 mb-6 flex items-center px-4 gap-3">
            <div className="w-6 h-6 bg-white rounded-full border" />
            <div className="w-6 h-6 bg-white rounded-full border" />
            <div className="w-6 h-6 bg-white rounded-full border" />
          </div>

           {/* Sub Projects Cards */}
        {project.subProjects?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.subProjects.map((sub, i) => (
              <div key={i} className="bg-white rounded-2xl border p-5 shadow-sm flex flex-col justify-between">

                {/* Title & Description */}
                <div>
                  <h3 className="font-semibold text-[#0f172a] text-sm leading-snug mb-3">
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
                    <a
                      href={sub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 hover:bg-gray-200 transition px-3 py-2 rounded-lg w-fit"
                    >
                      {sub.label}
                      <BsFileText size={13} />
                    </a>
                  )}

                  {/* Video Box */}
                  {sub.type === "video" && (
                    <div className="w-full aspect-video bg-[#0f172a] rounded-lg overflow-hidden">
                      <iframe
                        src={sub.url}
                        className="w-full h-full"
                        allowFullScreen
                        title={sub.title}
                      />
                    </div>
                  )}

                  {/* Prototype / External Link Button */}
                  {sub.type === "prototype" && (
                    <a
                      href={sub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-white bg-blue-600 hover:bg-blue-700 transition px-3 py-2 rounded-lg w-fit"
                    >
                      {sub.label}
                      <BsBoxArrowUpRight size={13} />
                    </a>
                  )}

                </div>
              </div>
            ))}
          </div>
        )}

          <h2 className="text-xl font-semibold text-[#0f172a] mb-4">Key Outcomes</h2>
          <ul className="space-y-4">
            {project.outcomes?.map((item, i) => (
              <li key={i} className="flex gap-3">
                <BsCheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}