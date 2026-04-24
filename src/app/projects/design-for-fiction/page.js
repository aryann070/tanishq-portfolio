"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaRegFileAlt,
  FaLayerGroup,
  FaCheckCircle,
  FaBullseye,
} from "react-icons/fa";
import {
  BsFileEarmarkText, BsBoxArrowUpRight, BsArrowLeft,
  BsLayers,
  BsEye,
} from "react-icons/bs"
import { BsCheckCircle, BsFileEarmarkArrowUp } from "react-icons/bs";
import { RiH4 } from "react-icons/ri";

const keyoutcomes = [
  "Co-created speculative scenarios exploring diverse futures of digital governance with participant input",
  "Generated diegetic prototypes (sketches, wireframes, digital mockups) reflecting participant visions",
  "Identified recurring themes in participant hopes: accessibility, efficiency, equitable service delivery",
  "Uncovered participant fears: surveillance, loss of privacy, algorithmic discrimination, centralized control",
  "Demonstrated the value of co-design fiction as a research methodology for exploring complex socio-technical futures",
  "Created a research framework that privileges participant voices over designer assumptions",
  "Contributed empirical insights about public attitudes toward digital government technology",
]

const icons = ["/icons/home.png", "/icons/bulb.png", "/icons/film.png"]

export default function DesignPage() {

  const [activeTab, setActiveTab] = useState("people");

  return (
    <div className="bg-[#f5f7fb] text-gray-800 min-h-screen px-6 md:px-16 lg:px-8 py-12">

      {/* ✅ Centered Container */}
      <div className="max-w-7xl mx-auto">

        {/* 🔙 Back Link */}
        {/* Back */}
        <Link
          href="/projects"
          className="flex items-center gap-2 text-base text-gray-500 hover:text-blue-600 transition"
        >
          <BsArrowLeft size={14} />
          Back to All Projects
        </Link>

        {/* 🏷️ Top Meta */}
        <div className="flex items-center gap-3 mt-4">
          <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full">
            Academic Seminar @ Uni Siegen
          </span>
          <span className="text-gray-300 text-lg">|</span>
          <span className="text-gray-500 text-sm font-semibold">2023 - 2024</span>
        </div>

        {/* 🧠 Title */}
        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          Design for Fiction: Speculative Futures
        </h1>

        <p className="text-gray-500 mt-3">
          Critical Design & Diegetic Prototyping
        </p>

        {/* 📦 Layout */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* 📌 Left Card */}
          <div className="bg-white rounded-xl shadow-sm p-5 space-y-6 self-start">

            {/* Role */}
            <div>
              <h3 className="text-xs text-gray-400 uppercase mb-2">
                My Role
              </h3>
              <p className="font-medium">Student</p>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xs text-gray-400 uppercase mb-2">
                Tools & Tech
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Speculative Design",
                  "Design Fiction",
                  "Storytelling",
                  "Video Production",
                  "Critical Theory",
                  "Diegetic Prototyping",
                  "UX Research",
                ].map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* 📄 Right Content */}
          <div className="md:col-span-2">
            <div className="bg-gray-100 h-14 mb-6 flex items-center gap-4 px-4 rounded-full">
              {icons?.map((icon, index) => (
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

            {/* Main Text */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4 leading-relaxed text-gray-500">
              <p>
                Design fiction is a critical design practice that uses speculative scenarios and diegetic prototypes—artifacts that exist within a fictional world—to explore potential futures and provoke reflection on the social, ethical, and political implications of emerging technologies. Rather than solving problems, design fiction asks questions: it makes visible the invisible consequences of technological change and invites us to critically examine the futures we are creating.
              </p>

              <p>
                This approach moves beyond traditional user-centered design to engage with broader societal concerns, using storytelling, world-building, and persuasive artifacts to make speculative futures feel tangible and plausible. Design fiction serves as a tool for critical inquiry, allowing designers to explore "what if" scenarios that challenge assumptions and reveal hidden tensions in our relationship with technology.
              </p>

              {/* Highlight Box */}
              <div className="bg-blue-50 border border-blue-200 border-l-4 border-l-blue-500 rounded-r-lg rounded-l-none p-4 text-sm">
                <strong>Seminar Credit:</strong> This work was completed as part of the Design Fiction seminar led by <span className="text-blue-700">Dr. Judith Dörrenbächer</span> at the University of Siegen. Dr. Dörrenbächer's approach emphasizes the use of design fiction as a research method for critically examining technology's role in society and exploring alternative futures through tangible, believable artifacts.
              </div>

              <p className="font-semibold text-sm text=gray-900">
                Two complementary design fiction efforts were developed for this seminar, each examining different aspects of technology's impact on society. Select a project below to explore the research, methodology, and outcomes:
              </p>
            </div>

            {/*Tabs Section*/}
            <div className="w-full max-w-5xl mx-auto mt-10">

              {/* 🔘 Tabs */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab("people")}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition ${activeTab === "people"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700"
                    }`}
                >
                  The People Who Vanished
                </button>

                <button
                  onClick={() => setActiveTab("govnet")}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition ${activeTab === "govnet"
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700"
                    }`}
                >
                  GOVnet: Digital Governance & Universal Basic Income
                </button>
              </div>

              {/* 📄 Tab Content */}
              {activeTab === "people" && (
                <div className="space-y-4 leading-relaxed">

                  {/* 🖼️ Image */}
                  <div className="md:-ml-3 ">
                    <Link href="https://www.behance.net/gallery/187169011/Infographic-Research-Paper">
                      <img
                        src="/images/design-overview.jpg"
                        alt="People Who Vanished"
                        className="overflow-hidden w-full h-[500px] object-fit cursor-pointer"
                      />
                    </Link>
                  </div>
                  {/* 📝 Content */}
                  <div className="space-y-4 text-gray-700 leading-relaxed">

                    <h2 className="text-lg font-semibold text-gray-900">
                      Designing an Experiential Scenario: The People Who Vanished
                    </h2>

                    <p>
                      What if we could step into the shoes of the Holocene people, a
                      mysterious civilization that vanished in the 15th century? The
                      Experiential Futures Ladder, a conceptual framework for designing
                      and implementing immersive and impactful experiential scenarios,
                      offers a unique opportunity to do just that.
                    </p>

                    <p className="font-semibold">
                      The ladder outlines four stages:
                    </p>

                    <ol className="list-decimal ml-6 space-y-1">
                      <li>
                        <strong>Precedents and Provocations:</strong> Gather inspiration
                        from existing sources and spark imagination.
                      </li>
                      <li>
                        <strong>Scenario Development:</strong> Craft a compelling
                        narrative that describes a specific future scenario.
                      </li>
                      <li>
                        <strong>Immersive Experience:</strong> Design activities, props,
                        and environments that bring the scenario to life.
                      </li>
                      <li>
                        <strong>Reflection and Analysis:</strong> Facilitate meaningful
                        discussions and reflections on the scenario and its implications.
                      </li>
                    </ol>

                    <p>
                      The Experiential Futures Ladder can be used to design experiential
                      scenarios that explore a wide range of possible futures, from
                      utopian visions to dystopian warnings. It is a powerful tool for
                      fostering critical thinking, empathy, and creativity.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {activeTab === "govnet" && (
              <div className="space-y-6">

                {/* 🔵 Top Info Box */}
                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-indigo-200 text-gray-700 rounded-xl p-4 text-sm">
                  A speculative digital government platform exploring the promises and perils of centralized welfare systems.
                </div>

                {/* 📦 Grid Cards */}
                <div className="grid md:grid-cols-2 gap-6">

                  {/* 🎥 Video 1 */}
                  <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
                    <h3 className="font-semibold text-gray-900">
                      Behavior Monitoring & Penalty System
                    </h3>
                    <p className="text-sm text-gray-500">
                      A citizen is penalized with negative points for jaywalking, illustrating how everyday actions are tracked and regulated. Highlights the system's impact on personal freedom, surveillance, and behavioral control.
                    </p>

                    <div className="rounded-xl overflow-hidden">
                      <iframe
                        className="w-full h-[200px]"
                        src="https://youtube.com/embed/8JpNrQuAprw"
                        title="Video 1"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* 🎥 Video 2 */}
                  <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
                    <h3 className="font-semibold text-gray-900">
                      Reward & Punishment in Civic Behavior
                    </h3>
                    <p className="text-sm text-gray-500">
                      While one individual is penalized for littering, another is rewarded for responsible action. Demonstrates the system's incentive structure shaping public behavior through points and social compliance.
                    </p>

                    <div className="rounded-xl overflow-hidden">
                      <iframe
                        className="w-full h-[200px]"
                        src="https://youtube.com/embed/OZsCGyvL9EA"
                        title="Video 2"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* 🧪 Prototype */}
                  <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
                    <h3 className="font-semibold text-gray-900">
                      Diegetic Prototype
                    </h3>
                    <p className="text-sm text-gray-500">
                      Interactive prototype of the GOVnet interface, demonstrating how citizens would interact with the system for daily transactions, welfare management, and civic engagement.
                    </p>
                    <button className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition">
                      Explore Interactive Prototype
                      <BsBoxArrowUpRight size={16} />
                    </button>
                  </div>

                  {/* 📄 Documentation */}
                  <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
                    <h3 className="font-semibold text-gray-900">
                      Project Documentation
                    </h3>
                    <p className="text-sm text-gray-500">
                      Comprehensive documentation of the design fiction process, including world-building rationale, theoretical framework, artifact creation, and critical reflections on methodology.
                    </p>

                    <button className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                      Read Full Report
                      <BsFileEarmarkText size={16} />
                    </button>
                  </div>
                </div>
                <div className="space-y-10">

                  {/* ⚠️ Challenge */}
                  <div className="space-y-3 mt-12">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                      The Challenge
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      How do people envision the future of digital government technology? What hopes and fears do they harbor about increasingly centralized digital governance systems?
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      This research explored these questions through a co-design fiction approach—a participatory methodology that brings together researchers and participants to collectively imagine and design speculative futures. The challenge was to move beyond designer-centric speculation and instead create space for diverse voices to shape narratives about digital governance.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Rather than imposing a pre-conceived scenario, we needed to facilitate a process where participants could express their genuine concerns, aspirations, and imaginative projections about how digital government platforms might evolve. This required designing a research approach that balanced structure with creative freedom, enabling participants to co-create believable future scenarios while critically examining the implications of their visions.
                    </p>
                  </div>

                  {/* 💡 Approach */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                      Approach & Solution
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      We conducted an immersive co-design fiction study with 4 participants, using a structured yet flexible methodology that combined narrative development with diegetic prototyping.
                    </p>
                    <h4 className="text-base font-semibold text-gray-800 mb-2">
                      Research Approach:
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      The study employed semi-structured interviews within a co-design fiction framework. Rather than passively responding to questions, participants actively shaped the research direction by co-creating scenarios, sketching interfaces, and collectively reflecting on the implications of their designs.
                    </p>

                    <h4 className="text-base font-semibold text-gray-800 mb-2">
                      Shared Narrative Development:
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Participants worked collaboratively to develop shared narratives about future digital government platforms. These narratives explored themes of convenience, surveillance, welfare distribution, and citizen-state relationships. The scenarios ranged from optimistic visions of accessible public services to cautionary tales of algorithmic control.
                    </p>

                    <h4 className="text-base font-semibold text-gray-800 mb-2">
                      Diegetic Prototyping:
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      To make abstract concepts tangible, participants created artifacts that could exist within their imagined futures—sketches of interface designs, wireframes of government apps, and digital mockups of citizen-facing platforms. These prototypes served as thinking tools, helping participants explore and critique their own visions.
                    </p>

                    <h4 className="text-base font-semibold text-gray-800 mb-2">
                      Collective Reflection:
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      Throughout the process, participants engaged in reflective discussions about the scenarios they created. These conversations revealed underlying values, concerns about privacy and autonomy, hopes for societal support systems, and fears about surveillance and control mechanisms.
                    </p>

                  </div>

                </div>
                <div className="w-full my-16">

                  <div className="bg-white rounded-2xl shadow-md p-5 md:p-10">

                    {/* 🧠 Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">
                      Methodology
                    </h2>

                    {/* 📦 Grid */}
                    <div className="grid md:grid-cols-2 gap-10">

                      {/* 🔵 Research Methods */}
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100">
                            <BsFileEarmarkText className="text-blue-600" size={18} />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                           Research Methods
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-500 text-sm leading-relaxed">
                          {[
                            "Semi-structured interviews with 4 participants",
                            "Immersive co-design fiction approach",
                            "Shared narrative development and collaborative scenario building",
                            "Qualitative data collection through participant discussions",
                            "Thematic analysis of participant responses and concerns",
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <BsCheckCircle className="text-blue-500 text-lg shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 🟣 Design Process */}
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-100">
                            <BsLayers className="text-purple-600" size={18} />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            Design Process
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-500 text-sm leading-relaxed">
                          {[
                            "Diegetic prototyping (sketches, wireframes, digital mockups)",
                            "Collaborative interface design with participants",
                            "Scenario co-creation emphasizing participant agency",
                            "Iterative refinement based on collective reflection",
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <BsCheckCircle className="text-purple-500 text-lg shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 🟢 Evaluation Methods */}
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-green-100">
                            <BsCheckCircle className="text-green-600" size={18} />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            Evaluation Methods
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-500 text-sm leading-relaxed">
                          {[
                            "Qualitative analysis of interview transcripts",
                            "Thematic synthesis of participant hopes and fears",
                            "Analysis of co-designed scenarios and prototypes",
                            "Critical reflection on the co-design fiction methodology",
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <BsCheckCircle className="text-green-500 text-lg shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 🟠 Focus Areas */}
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-100">
                            <BsEye className="text-orange-600" size={18} />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            Focus Areas
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-500 text-sm leading-relaxed">
                          {[
                            "Co-design fiction as participatory research methodology",
                            "Public perceptions of digital government technology",
                            "Participant hopes for accessible and equitable public services",
                            "Participant fears about surveillance and algorithmic control",
                            "Balancing convenience with privacy in government platforms",
                            "The role of design in facilitating critical discourse about technological futures",
                          ].map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <BsCheckCircle className="text-orange-500 text-lg mt-1 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Key Outcomes & Impact</h2>
                  <ul className="space-y-4">
                    {keyoutcomes?.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <BsCheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                        <p className="text-gray-500 leading-relaxed text-base">{item}</p>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}