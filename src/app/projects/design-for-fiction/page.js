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

const keyoutcomes = [
  "Developed a comprehensive fictional world with internal consistency and believable details",
  "Created diegetic prototypes spanning multiple media (interfaces, videos, documents)",
  "Produced promotional videos that function both as narrative elements and critical commentary",
  "Designed interfaces that simultaneously demonstrate usability principles and surveillance mechanisms",
  "Sparked critical discussions about UBI, surveillance capitalism, and the trade-offs between welfare and autonomy",
  "Demonstrated how persuasive design techniques can normalize authoritarian control",
  "The project serves as a cautionary tale about well-intentioned systems that enable unprecedented surveillance",
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
          <span className="text-gray-500 text-sm font-semibold">2023</span>
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
                    <img
                      src="/images/design.png"
                      alt="People Who Vanished"
                      className="overflow-hidden w-full h-[500px] object-fit"
                    />
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
                <div className="bg-blue-50 border border-blue-200 text-gray-700 rounded-xl p-4 text-sm">
                  A speculative digital government platform exploring the promises and perils of centralized welfare systems.
                </div>

                {/* 📦 Grid Cards */}
                <div className="grid md:grid-cols-2 gap-6">

                  {/* 🎥 Video 1 */}
                  <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
                    <h3 className="font-semibold text-gray-900">
                      GOVnet Promotional Video 1
                    </h3>
                    <p className="text-sm text-gray-500">
                      A persuasive promotional video presenting GOVnet as a utopian solution for digital governance and universal welfare—showcasing the system’s promises while subtly hinting at underlying control mechanisms.
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
                      GOVnet Promotional Video 2
                    </h3>
                    <p className="text-sm text-gray-500">
                      A second perspective on life within the GOVnet ecosystem, exploring citizen experiences with the UBI system and point-based credit system through narrative storytelling and immersion.
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
                      The primary challenge was to critically examine how a centralized
                      digital governance system could influence individual autonomy while
                      presenting itself as efficient and beneficial. Designing a system
                      that appears trustworthy and seamless, yet subtly embeds control
                      mechanisms, required balancing realism with speculative intent.
                    </p>
                  </div>

                  {/* 💡 Approach */}
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                      Approach & Solution
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      The project adopted a design fiction methodology, using storytelling,
                      visual artifacts, and diegetic prototypes to construct a believable
                      future scenario. By creating promotional videos and interactive
                      elements, the system was presented as a desirable solution while
                      encouraging critical reflection on its deeper societal implications.
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
                            Design Process
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-500 text-sm leading-relaxed">
                          {[
                            "Analysis of existing digital government platforms and e-governance systems",
                            "Research into Universal Basic Income proposals and pilot programs globally",
                            "Investigation of credit score systems (China's Social Credit System, Western credit bureaus)",
                            "Study of surveillance capitalism and data-driven governance models",
                            "Analysis of persuasive design patterns in government and fintech applications",
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
                            "Diegetic prototyping creating artifacts that exist within the fictional world",
                            "World-building establishing political, economic, and social context",
                            "Interface design applying UX best practices while revealing underlying control",
                            "Video production creating promotional content with subtle critical undertones",
                            "Visual design using government aesthetics to enhance believability",
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
                            "Seminar discussions analyzing the effectiveness of different artifacts",
                            "Critical reflection on how design choices communicate both promise and threat",
                            "Audience reaction analysis to understand what provocations were most effective",
                            "Self-assessment of how successfully we balanced believability with critique",
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
                            "Universal Basic Income and welfare system design",
                            "Surveillance mechanisms hidden within helpful features",
                            "The tension between convenience and privacy",
                            "Algorithmic governance and automated control",
                            "Persuasive design as a tool of social control",
                            "Design's role in normalizing surveillance",
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