export default function Hero() {
    return (
       <section className="relative w-full min-h-screen flex items-start pt-10 bg-gradient-to-r from-[#0b1a3a] via-[#07122b] to-[#030814] text-white px-6">

            <div className="w-full">

                {/* Badge */}
                <div className="mb-6">
                    <span className="inline-block px-5 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 text-sm text-blue-200">
                        Active Candidate for PhD Positions in HCI & Human-AI Collaboration
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                    Designing the Future of <br />
                    <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                        Human-System
                    </span>
                    <br />
                    Interaction
                </h1>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-gray-300 text-xl leading-relaxed">
                    I bridge the gap between complex aerospace technologies and human
                    intuition. Currently researching Human Factors at{" "}
                    <span className="font-semibold text-white">
                        DLR (German Aerospace Center)
                    </span>.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                    <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
                        View Work →
                    </button>

                    <button className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition">
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Subtle divider line (optional) */}
            <div className="absolute right-1/3 top-1/4 h-40 w-px bg-white/10 hidden lg:block" />
        </section>
    );
}