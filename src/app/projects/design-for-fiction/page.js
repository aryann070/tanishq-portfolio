"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaRegFileAlt,
  FaLayerGroup,
  FaCheckCircle,
  FaBullseye,
} from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

const keyoutcomes = [
  "Built a cohesive fictional world with believable systems, narratives, and societal structures",
  "Designed multi-modal diegetic prototypes including UI interfaces, videos, and narrative artifacts",
  "Created promotional media that blends storytelling with critical design commentary",
  "Exposed the duality of usability and control through intentionally designed surveillance-driven interfaces",
  "Initiated critical discourse on UBI, surveillance capitalism, and autonomy vs. convenience",
  "Illustrated how persuasive design can normalize and reinforce authoritarian systems",
  "Framed the project as a speculative cautionary tale on the risks of well-intentioned technological systems",
]
export default function DesignPage() {

  const [activeTab, setActiveTab] = useState("people");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-8">

      {/* ✅ Centered Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* 🔙 Back Link */}
        <Link href="/" className="text-sm text-gray-500 hover:underline">
          ← Back to All Projects
        </Link>

        {/* 🏷️ Top Meta */}
        <div className="mt-4 text-sm text-blue-600 font-medium">
          Academic Seminar @ Uni Siegen | 2023
        </div>

        {/* 🧠 Title */}
        <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
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
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* 📄 Right Content */}
          <div className="md:col-span-2 space-y-6">

            {/* Icons */}
            <div className="flex gap-3 bg-white rounded-xl shadow-sm p-4 w-fit">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">🏛️</div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">💡</div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">📊</div>
            </div>

            {/* Main Text */}
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-4 leading-relaxed text-gray-600">
              <p>
                Design fiction is a critical design practice that uses speculative scenarios and diegetic prototypes—artifacts that exist within a fictional world—to explore potential futures and provoke reflection on the social, ethical, and political implications of emerging technologies.
              </p>

              <p>
                Rather than solving problems, design fiction asks questions: it makes visible the invisible consequences of technological change and invites us to critically examine the futures we are creating.
              </p>

              <p>
                This approach moves beyond traditional user-centered design to engage with broader societal concerns, using storytelling, world-building, and persuasive artifacts to make speculative futures feel tangible and plausible.
              </p>

              {/* Highlight Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                <strong>Seminar Credit:</strong> This work was completed as part of the Design Fiction seminar. The approach emphasizes using design fiction as a research method to critically examine technology’s role in society.
              </div>

              <p>
                Two complementary design fiction efforts were developed for this seminar, each examining different aspects of technology's impact on society.
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
                <div className="space-y-6">

                  {/* 🖼️ Image */}
                  <div>
                    <img
                      src="/images/design.png"
                      alt="People Who Vanished"
                      className="overflow-hidden w-full h-[450px] object-fit"
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

                    <p className="font-medium">
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
                    <p className="text-sm text-gray-600">
                      A persuasive promotional video presenting GOVnet as a utopian solution for digital governance and universal welfare—showcasing the system’s promises while subtly hinting at underlying control mechanisms.
                    </p>

                    <div className="rounded-xl overflow-hidden">
                      <iframe
                        className="w-full h-[200px]"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
                    <p className="text-sm text-gray-600">
                      A second perspective on life within the GOVnet ecosystem, exploring citizen experiences with the UBI system and point-based credit system through narrative storytelling.
                    </p>

                    <div className="rounded-xl overflow-hidden">
                      <iframe
                        className="w-full h-[200px]"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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
                    <p className="text-sm text-gray-600">
                      Interactive prototype of the GOVnet interface, demonstrating how citizens would interact with the system for daily transactions, welfare management, and civic engagement.
                    </p>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium">
                      Explore Interactive Prototype ↗
                    </button>
                  </div>

                  {/* 📄 Documentation */}
                  <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
                    <h3 className="font-semibold text-gray-900">
                      Project Documentation
                    </h3>
                    <p className="text-sm text-gray-600">
                      Comprehensive documentation of the design fiction process, including world-building rationale, theoretical framework, artifact creation, and critical reflections on methodology.
                    </p>

                    <button className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg text-sm font-medium">
                      Read Full Report 📄
                    </button>
                  </div>
                </div>
                <div className="space-y-10">

                  {/* ⚠️ Challenge */}
                  <div className="space-y-3 mt-12">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                      Challenge
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
                      Approach
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

                  <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">

                    {/* 🧠 Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                      Methodology
                    </h2>

                    {/* 📦 Grid */}
                    <div className="grid md:grid-cols-2 gap-10">

                      {/* 🔵 Research Methods */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <FaRegFileAlt className="text-blue-500 text-lg" />
                          <h3 className="font-semibold text-gray-900 text-lg">
                            Research Methods
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
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
                        <div className="flex items-center gap-3 mb-4">
                          <FaLayerGroup className="text-purple-500 text-lg" />
                          <h3 className="font-semibold text-gray-900 text-lg">
                            Design Process
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
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
                        <div className="flex items-center gap-3 mb-4">
                          <FaCheckCircle className="text-green-500 text-lg" />
                          <h3 className="font-semibold text-gray-900 text-lg">
                            Evaluation Methods
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
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
                        <div className="flex items-center gap-3 mb-4">
                          <FaBullseye className="text-orange-500 text-lg" />
                          <h3 className="font-semibold text-gray-900 text-lg">
                            Focus Areas
                          </h3>
                        </div>

                        <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Key Outcomes & Impact</h2>
                  <ul className="space-y-4">
                    {keyoutcomes?.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <BsCheckCircle className="text-green-500 mt-1 shrink-0" size={18} />
                        <p className="text-gray-700 leading-relaxed text-lg">{item}</p>
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