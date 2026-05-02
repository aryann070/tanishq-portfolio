// "use client"
// import { projects } from "@/app/data/projects";
// import { Volume2, MessageSquare, BookOpen, Users, Database, Brain, Eye, Layers, Bot, FileText, Rocket, FlaskConical, Shield } from "lucide-react";
// import {
//   BsBoxArrowUpRight, BsCheckCircle, BsArrowLeft,
// } from "react-icons/bs";
// import Link from "next/link";
// import Reveal from "@/app/components/Reveal";
// import { motion } from "framer-motion";

// export default async function ProjectDetail({ params }) {
//   const { id } = await params;

//   const project = projects.find((p) => p.id === id);

//   if (!project) {
//     return <div className="p-10 text-red-500">Project not found 🚫</div>;
//   }

//   return (
//     <section className="bg-[#f5f7fb] min-h-screen px-6 md:px-16 lg:px-8 py-12">

//       <motion.div
//         className="max-w-7xl mx-auto"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.8,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//       >
//         {/* Back */}
//         <Link
//           href="/projects"
//           className="flex items-center gap-2 text-base text-gray-500 hover:text-[#155DFC] transition"
//         >
//           <BsArrowLeft size={14} />
//           Back to All Projects
//         </Link>

//         {/* Header */}
//         <div className="mt-6 max-w-5xl">
//           <div className="flex items-center gap-2 text-sm">
//             <span className="bg-blue-100 text-[#155DFC] font-semibold px-3 py-0.5 rounded-full">
//               {project.category}
//             </span>
//             <span className="text-gray-400">|</span>
//             <span className="text-gray-500 font-semibold">{project.year}</span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold text-[#0f172a] mt-3 leading-[1.15]">
//             {project.title}
//           </h1>
//           <p className="text-gray-500 mt-4 text-lg">{project.subtitle}</p>
//         </div>

//         {/* Main Layout */}
//         <div className="grid md:grid-cols-3 gap-8 mt-12 items-start">

//           {/* LEFT PANEL */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm">
//             <p className="text-xs text-gray-400 font-semibold uppercase mb-1">My Role</p>
//             <p className="text-gray-800 font-medium mb-4">{project.role}</p>

//             {project.team && (
//               <>
//                 <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Team</p>
//                 <p className="text-gray-700 mb-4">{project.team}</p>
//               </>
//             )}

//             {project.supervisor && (
//               <>
//                 <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Supervisor</p>
//                 <p className="text-gray-700 mb-4">{project.supervisor}</p>
//               </>
//             )}

//             <p className="text-xs text-gray-400 font-semibold uppercase mb-2">Tools & Tech</p>
//             <div className="flex flex-wrap gap-2 mb-5">
//               {project.tools?.map((tool, i) => (
//                 <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600">
//                   {tool}
//                 </span>
//               ))}
//             </div>

//             {project.prototype && (
//               <a
//                 href={project.prototype}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 View Prototype
//                 <BsBoxArrowUpRight size={16} />
//               </a>
//             )}


//             {project.pdf && (
//               <>
//                 <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Internship Certificate</p>
//                 <a
//                   href={project.pdf}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   View Praktikum Zeugnis
//                   <FileText size={18} />
//                 </a>
//               </>
//             )}

//             {project.letter && (
//               <>
//                 <p className="text-xs text-gray-400 font-semibold uppercase mb-1">documents</p>
//                 <a
//                   href={project.letter}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
//                 >
//                   View Recommendation Letter
//                   <FileText size={18} />
//                 </a>
//               </>
//             )}
//           </div>



//           {/* RIGHT SIDE */}
//           <div className="md:col-span-2">
//             <div className="bg-gray-100 h-14 mb-6 flex items-center gap-4 px-4 rounded-full">
//               {project.icons?.map((icon, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center justify-center"
//                 >
//                   <img
//                     src={icon}
//                     alt="tech icon"
//                     className="w-10 h-10 object-contain"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Sub Projects Cards */}
//             {project.subProjects?.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//                 {project.subProjects.map((sub, i) => (
//                   <div key={i} className="bg-white rounded-2xl  p-5 shadow-sm flex flex-col justify-between">

//                     {/* Title & Description */}
//                     <div>
//                       <h3 className="font-semibold text-[#0f172a] text-lg leading-snug mb-3">
//                         {sub.title}
//                       </h3>
//                       <p className="text-gray-500 text-xs leading-relaxed">
//                         {sub.description}
//                       </p>
//                     </div>

//                     {/* Bottom — conditional */}
//                     <div className="mt-4">

//                       {/* Report Button */}
//                       {sub.type === "report" && (
//                         <div className="w-full">
//                           <a
//                             href={sub.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center justify-center gap-2 w-full font-medium text-sm text-black bg-gray-100 hover:bg-gray-200 transition px-5 py-3 rounded-lg"
//                           >
//                             {sub.label}
//                             <FileText size={16} />
//                           </a>
//                         </div>
//                       )}

//                       {/* Video Box */}
//                       {sub.type === "video" && (
//                         <div className="w-full aspect-video bg-[#0f172a] rounded-lg overflow-hidden">
//                           <div className="w-full h-full border-0">
//                             <iframe
//                               src={sub.url}
//                               className="w-full h-full border-0"
//                               scrolling="no"
//                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                               allowFullScreen
//                               title={sub.title}
//                             />
//                           </div>
//                         </div>
//                       )}

//                       {/* Prototype / External Link Button */}
//                       {sub.type === "prototype" && (
//                         <div className="w-full">
//                           <a
//                             href={sub.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="flex items-center font-semibold justify-center gap-2 w-full text-xs text-white bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-lg"
//                           >
//                             {sub.label}
//                             <BsBoxArrowUpRight size={16} />
//                           </a>
//                         </div>
//                       )}

//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <Reveal>
//             {project?.id !== "ai-interaction" && project?.id !== "human-factors-dlr" && project?.id !== "protrack-athlete-performance" && (
//               <div className="max-w-5xl">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                   The Challenge
//                 </h2>

//                 <p className="text-gray-500 leading-relaxed text-base mb-12">
//                   {project.challenges}
//                 </p>
//               </div>
//             )}
//             </Reveal>


//             <Reveal>
//               {project?.id !== "protrack-athlete-performance" && project?.id !== "immersive-research" && project?.id !== "ai-interaction" && project?.id !== "human-factors-dlr" && (
//                 <div className="mb-12 space-y-5">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                     Approach & Solution
//                   </h2>
//                   {Array.isArray(project.approach) ? (
//                     project.approach.map((para, i) => (
//                       <p key={i} className="text-gray-500 leading-relaxed text-base">
//                         {para}
//                       </p>
//                     ))
//                   ) : (
//                     <p className="text-gray-500 leading-relaxed text-base">
//                       {project.approach}
//                     </p>
//                   )}
//                 </div>
//               )}
//             </Reveal>

//             <Reveal>
//               {project.id === "immersive-research" && (
//                 <section className="mb-12">
//                   {/* Section Title */}
//                   <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                     Approach & Solution
//                   </h2>

//                   {/* Description */}
//                   <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
//                     {project.approachsolution.description}
//                   </p>

//                   {/* Projects */}
//                   <div className="space-y-6">
//                     {project.approachsolution.projects.map((item, index) => (
//                       <div key={index}>
//                         <h3 className="text-base font-semibold text-gray-800 mb-2">
//                           {index + 1}. {item.title}
//                         </h3>

//                         <p className="text-gray-500 leading-relaxed text-sm">
//                           {item.details}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </section>
//               )}
//             </Reveal>



//             {project?.id == "human-factors-dlr" && project?.confidentialityNotice && (
//               <section className="max-w-5xl mb-10">

//                 <div className="border border-yellow-300 bg-yellow-50 rounded-2xl px-6 py-5 flex items-start gap-4">

//                   {/* Icon */}
//                   <div className="text-yellow-600 mt-1">
//                     <Shield size={22} />
//                   </div>

//                   {/* Text */}
//                   <div>
//                     <h3 className="text-sm font-semibold text-yellow-800 mb-1">
//                       {project.confidentialityNotice.title}
//                     </h3>

//                     <p className="text-sm text-yellow-700 leading-relaxed">
//                       {project.confidentialityNotice.description}
//                     </p>
//                   </div>

//                 </div>

//               </section>
//             )}




//             {project?.id == "human-factors-dlr" && project?.experienceCard1 && (
//               <section className="bg-white rounded-2xl shadow-md border overflow-hidden mb-10 max-w-5xl">

//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-5 flex items-start gap-3">

//                   {/* Icon */}
//                   <Rocket size={22} className="mt-1 text-white" />

//                   {/* Text */}
//                   <div>
//                     <h2 className="text-xl font-semibold">
//                       {project.experienceCard1.title}
//                     </h2>
//                     <p className="text-sm text-gray-100">
//                       {project.experienceCard1.subtitle}
//                     </p>
//                   </div>

//                 </div>

//                 {/* Content */}
//                 <div className="p-6">

//                   {/* Overview */}
//                   <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
//                   <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                     {project.experienceCard1.overview}
//                   </p>

//                   {/* What I Did */}
//                   <h3 className="font-semibold text-gray-900 mb-3">What I Did</h3>
//                   <ul className="space-y-3 mb-6">
//                     {project.experienceCard1.whatIDid?.map((item, i) => (
//                       <li key={i} className="flex gap-3 text-sm text-gray-600">
//                         <BsCheckCircle className="text-blue-500 mt-[2px]" size={16} />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Impact */}
//                   <h3 className="font-semibold text-gray-900 mb-3">Impact</h3>
//                   <ul className="space-y-3">
//                     {project.experienceCard1.impact?.map((item, i) => (
//                       <li key={i} className="flex gap-3 text-sm text-gray-600">
//                         <BsCheckCircle className="text-green-500 mt-[2px]" size={16} />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                 </div>
//               </section>
//             )}

//             {project?.id == "human-factors-dlr" && project?.experienceCard2 && (
//               <section className="bg-white rounded-2xl shadow-md border overflow-hidden mb-10 max-w-5xl">

//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-5 flex items-start gap-3">

//                   <FlaskConical size={22} className="mt-1 text-white/90" />

//                   <div>
//                     <h2 className="text-xl font-semibold">
//                       {project.experienceCard2.title}
//                     </h2>
//                     <p className="text-sm text-gray-100">
//                       {project.experienceCard2.subtitle}
//                     </p>
//                   </div>

//                 </div>

//                 {/* Content */}
//                 <div className="p-6">

//                   {/* Overview */}
//                   <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
//                   <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                     {project.experienceCard2.overview}
//                   </p>

//                   {/* What I Did */}
//                   <h3 className="font-semibold text-gray-900 mb-3">What I Did</h3>
//                   <ul className="space-y-3 mb-6">
//                     {project.experienceCard2.whatIDid?.map((item, i) => (
//                       <li key={i} className="flex gap-3 text-sm text-gray-600">
//                         <BsCheckCircle className="text-purple-500 mt-[2px]" size={16} />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Impact */}
//                   <h3 className="font-semibold text-gray-900 mb-3">Impact</h3>
//                   <ul className="space-y-3">
//                     {project.experienceCard2.impact?.map((item, i) => (
//                       <li key={i} className="flex gap-3 text-sm text-gray-600">
//                         <BsCheckCircle className="text-green-500 mt-[2px]" size={16} />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                 </div>
//               </section>
//             )}



//             {project?.id == "human-factors-dlr" && project?.experienceCard3 && (
//               <section className="bg-white rounded-2xl shadow-md border overflow-hidden mb-10 max-w-5xl">

//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-5 flex items-start gap-3">

//                   <Rocket size={22} className="mt-1 text-white/90" />

//                   <div>
//                     <h2 className="text-xl font-semibold">
//                       {project.experienceCard3.title}
//                     </h2>
//                     <p className="text-sm text-gray-100">
//                       {project.experienceCard3.subtitle}
//                     </p>
//                   </div>

//                 </div>

//                 {/* Content */}
//                 <div className="p-6">

//                   {/* Overview */}
//                   <h3 className="font-semibold text-gray-900 mb-2">Overview</h3>
//                   <p className="text-gray-600 text-sm mb-6 leading-relaxed">
//                     {project.experienceCard3.overview}
//                   </p>

//                   {/* What I Did */}
//                   <h3 className="font-semibold text-gray-900 mb-3">What I Did</h3>
//                   <ul className="space-y-3 mb-6">
//                     {project.experienceCard3.whatIDid?.map((item, i) => (
//                       <li key={i} className="flex gap-3 text-sm text-gray-600">
//                         <BsCheckCircle className="text-gray-500 mt-[2px]" size={16} />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Impact */}
//                   <h3 className="font-semibold text-gray-900 mb-3">Impact</h3>
//                   <ul className="space-y-3">
//                     {project.experienceCard3.impact?.map((item, i) => (
//                       <li key={i} className="flex gap-3 text-sm text-gray-600">
//                         <BsCheckCircle className="text-green-500 mt-[2px]" size={16} />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>

//                 </div>
//               </section>
//             )}

//             {project?.id == "human-factors-dlr" && project?.intro?.text && (
//               <div className="w-full rounded-2xl border border-[#d6e3f3] bg-[#eef4fb] px-6 py-6 mb-8">
//                 <p className="text-gray-500 text-sm leading-[1.7] italic">
//                   {project.intro.text}
//                 </p>
//               </div>

//             )}


            
//             {project?.id == "ai-interaction" && (
//               <div className="max-w-5xl">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                   Abstract
//                 </h2>

//                 <div className="space-y-4 mb-12">
//                   {project.abstract?.map((para, index) => (
//                     <p
//                       key={index}
//                       className="text-gray-500 leading-relaxed text-base"
//                     >
//                       {para}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             )}



//             {/* Research Context */}
//             {project.id === "ai-interaction" && project.researchContext && (
//               <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-gray-200 mb-6">

//                 {/* Title */}
//                 <h2 className="text-2xl text-gray-900 font-semibold mb-6">
//                   Research Context
//                 </h2>

//                 {/* Top Cards */}
//                 <div className="grid md:grid-cols-3 gap-6">

//                   {/* Theoretical Grounding */}
//                   <div className="bg-white rounded-xl shadow-sm p-4 text-center">
//                     <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full  bg-blue-100 text-[#155DFC]">
//                       <BookOpen size={25} />
//                     </div>
//                     <h3 className="text-sm text-gray-900 font-semibold mb-2 ">Theoretical Grounding</h3>
//                     <p className="text-xs text-gray-600 leading-relaxed">
//                       {project.researchContext.theoreticalGrounding}
//                     </p>
//                   </div>

//                   {/* Study Method */}
//                   <div className="bg-white rounded-xl shadow-sm p-4 text-center">
//                     <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full  bg-purple-100 text-purple-600">
//                       <Users size={25} />
//                     </div>
//                     <h3 className="text-sm text-gray-900 font-semibold mb-2">Study Method</h3>
//                     <p className="text-xs text-gray-600 leading-relaxed">
//                       {project.researchContext.studyMethod}
//                     </p>
//                   </div>

//                   {/* Domain */}
//                   <div className="bg-white rounded-xl shadow-sm p-4 text-center border">
//                     <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600">
//                       <Database size={25} />
//                     </div>
//                     <h3 className="text-sm text-gray-900 font-semibold mb-2">Domain</h3>
//                     <p className="text-xs text-gray-600 leading-relaxed">
//                       {project.researchContext.domain}
//                     </p>
//                   </div>
//                 </div>
//               </section>
//             )}

//             {project.id === "ai-interaction" && project.interactionConcept && (
//               <section className=" mb-6">
//                 <Reveal>
//                 {/* Title */}
//                 <h2 className="text-2xl text-gray-900 font-semibold mb-4">
//                   {project.interactionConcept.title}
//                 </h2>

//                 {/* Description */}
//                 <p className="text-sm text-gray-600 max-w-3xl mb-6 leading-relaxed">
//                   {project.interactionConcept.description}
//                 </p>
//                 </Reveal>

//                 {/* Cards */}
//                 <div className="grid md:grid-cols-2 gap-6">

//                   {project.interactionConcept.modalities?.map((item, index) => {
//                     const isFirst = index === 0;

//                     return (
//                       <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">

//                         {/* Header - solid colored band */}
//                         <div
//                           className={`flex items-center gap-3 px-5 py-3 ${isFirst ? "bg-blue-600" : "bg-purple-600"
//                             }`}
//                         >
//                           <div className="text-white">
//                             {isFirst ? <Volume2 size={18} /> : <MessageSquare size={18} />}
//                           </div>
//                           <h3 className="text-lg font-semibold text-white">
//                             {item.title}
//                           </h3>
//                         </div>

//                         {/* Body */}
//                         <div className="p-5">

//                           {/* Description */}
//                           <p className="text-sm text-gray-500 mb-4 leading-relaxed">
//                             {item.description}
//                           </p>

//                           {/* Points */}
//                           <ul className="space-y-3">
//                             {item.points?.map((point, i) => (
//                               <li
//                                 key={i}
//                                 className="grid grid-cols-[16px_1fr] gap-2 text-xs text-gray-600"
//                               >
//                                 <BsCheckCircle
//                                   className={`mt-[2px] ${isFirst ? "text-blue-500" : "text-purple-500"
//                                     }`}
//                                   size={16}
//                                 />
//                                 <span>{point}</span>
//                               </li>
//                             ))}
//                           </ul>

//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </section>
//             )}

//             {project.id === "ai-interaction" && project.designPrinciples && (
//               <section className="mb-10">

//                 {/* Outer Container */}
//                 <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">

//                   {/* Title */}
//                   <h2 className="text-2xl font-semibold text-gray-900 mb-8">
//                     {project.designPrinciples.title}
//                   </h2>

//                   {/* Grid */}
//                   <div className="grid md:grid-cols-2 gap-6">

//                     {project.designPrinciples.items?.map((item, index) => {

//                       let icon = null;
//                       let style = "";

//                       if (item.title === "Transparency") {
//                         icon = <Eye size={18} />;
//                         style = "bg-blue-100 text-[#155DFC]";
//                       } else if (item.title === "Progressive Disclosure") {
//                         icon = <Layers size={18} />;
//                         style = "bg-purple-100 text-purple-600";
//                       } else if (item.title === "Human-in-the-Loop") {
//                         icon = <Users size={18} />;
//                         style = "bg-green-100 text-green-600";
//                       } else if (item.title === "Epistemic Responsibility") {
//                         icon = <Brain size={18} />;
//                         style = "bg-orange-100 text-orange-600";
//                       }

//                       return (
//                         <div
//                           key={index}
//                           className="flex items-start gap-4 p-5 rounded-xl bg-gray-50"
//                         >

//                           {/* Icon */}
//                           <div className={`p-3 rounded-lg flex items-center justify-center ${style}`}>
//                             {icon}
//                           </div>

//                           {/* Content */}
//                           <div>
//                             <h3 className="text-sm font-semibold text-gray-900 mb-1">
//                               {item.title}
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
//                               {item.description}
//                             </p>
//                           </div>

//                         </div>
//                       );
//                     })}

//                   </div>
//                 </div>
//               </section>
//             )}




//             {project.id === "ai-interaction" && project.evaluation && (
//               <section className="bg-white max-w-5xl px-8 py-8 rounded-2xl mt-10 mb-12 shadow-md border">

//                 {/* Header */}
//                 <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-6 py-5 rounded-t-2xl -mx-8 -mt-8 mb-6 flex items-center gap-3">
//                   <Bot size={22} />
//                   <div>
//                     <h2 className="text-xl font-semibold">
//                       {project.evaluation.title}
//                     </h2>
//                     <p className="text-sm text-gray-200">
//                       {project.evaluation.subtitle}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm leading-relaxed mb-8">
//                   {project.evaluation.description}
//                 </p>

//                 {/* Measures */}
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Evaluation Measures
//                 </h3>

//                 <div className="grid md:grid-cols-3 gap-4 mb-8">
//                   {project.evaluation.measures?.map((item, i) => (
//                     <div
//                       key={i}
//                       className="bg-gray-100 rounded-xl py-4 text-center"
//                     >
//                       <h4 className="text-[#155DFC] font-semibold">
//                         {item.label}
//                       </h4>
//                       <p className="text-xs text-gray-500">
//                         {item.description}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Findings */}
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                   Key Findings
//                 </h3>

//                 <ul className="space-y-4">
//                   {project.evaluation.findings?.map((item, i) => (
//                     <li
//                       key={i}
//                       className="flex items-start gap-3 text-sm text-gray-600"
//                     >
//                       <BsCheckCircle className="text-green-500 mt-[2px] flex-shrink-0" size={16} />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>

//               </section>
//             )}

//             {project.id === "ai-interaction" && project.thesisCTA && (
//               <Reveal>
//               <div className="mb-12 space-y-5">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">
//                   Approach & Methodology
//                 </h2>
//                 {Array.isArray(project.approaches) ? (
//                   project.approaches.map((para, i) => (
//                     <p key={i} className="text-gray-500 leading-relaxed text-base">
//                       {para}
//                     </p>
//                   ))
//                 ) : (
//                   <p className="text-gray-500 leading-relaxed text-base">
//                     {project.approaches}
//                   </p>
//                 )}
//               </div>
//               </Reveal>
//             )}

         
//             {project.id === "ai-interaction" && project.thesisCTA && (
//               <section className="mb-10">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-blue-50 border border-blue-200 rounded-2xl px-5 py-5 md:px-8 md:py-6 gap-4">

//                   {/* Left Content */}
//                   <div className="max-w-full md:max-w-2xl">
//                     <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
//                       {project.thesisCTA.title}
//                     </h2>
//                     <p className="text-sm text-gray-600 leading-relaxed">
//                       {project.thesisCTA.description}
//                     </p>
//                   </div>

//                   {/* Button */}
//                   <a
//                     href={project.thesisCTA.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-6 py-4 rounded-xl transition w-full md:w-50"
//                   >
//                     <FileText size={20} />
//                     <span>{project.thesisCTA.buttonText}</span>
//                   </a>

//                 </div>
//               </section>
//             )}

//             {project.id === "protrack-athlete-performance" && project.interactivePrototype && (
//               <section className="bg-[#f5f7fb]">

//                 {/* Title */}
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                   {project.designOverview.title}
//                 </h2>

//                 {/* Image */}
//                 <div className="h-[400px] md:h-[500px] rounded-2xl overflow-y-auto mb-10">
//                   <img
//                     src={project.designOverview.image}
//                     alt={project.designOverview.alt}
//                     className="w-full object-contain"
//                   />
//                 </div>

//               </section>
//             )}

//             {project.id === "protrack-athlete-performance" && project.interactivePrototype && (
//               <section className="bg-[#f5f7fb]">

//                 {/* Title */}
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//                   {project.interactivePrototype.title}
//                 </h2>

//                 {/* Interactive Prototype */}
//                 <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-10">
//                   <iframe
//                     src={project.interactivePrototype.link}
//                     className="w-full h-full border-0"
//                     allowFullScreen
//                   ></iframe>
//                 </div>

//               </section>
//             )}
//             <Reveal>
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes & Impact</h2>
//               <ul className="space-y-4">
//                 {project.outcomes?.map((item, i) => (
//                   <li key={i} className="flex gap-3">
//                     <BsCheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
//                     <p className="text-gray-500 leading-relaxed text-base">{item}</p>
//                   </li>
//                 ))}
//               </ul>
//             </Reveal>


//           </div>
//         </div>
//       </motion.div>

//     </section>
//   );
// }


import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import ProjectDetailsClient from "../../components/ProjectDetailsClient";

export default async function ProjectDetail({ params }) {
  const { id } = await params; // ✅ FIX HERE

  const project = projects.find((p) => p.id === id);

  if (!project) return notFound();

  return <ProjectDetailsClient project={project} />;
}


