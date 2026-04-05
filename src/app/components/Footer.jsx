import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { FaBehance, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#030814] text-white py-30 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Let's Collaborate
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          I am actively looking for PhD opportunities in Human-AI Collaboration
          and HCI. If you have a position available or want to discuss my
          research, please reach out.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Email Button */}
          <a
            href="mailto:tahire29@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 transition font-medium"
          >
            <Mail size={18} />
            Send an Email
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/tanishqahire/"
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#1e293b] hover:bg-[#334155] transition font-medium"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-white/10" />

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-400 mb-6">
          {/* <a href="#" className="hover:text-white transition">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Twitter size={20} />
          </a> */}
          <a href="https://www.behance.net/tanishqahire" className="hover:text-white transition">
            <FaBehance size={20} />
          </a>
          <a href="https://www.instagram.com/tanishq.hci/" className="hover:text-white transition">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 Portfolio. Designed & Built with React.
        </p>
      </div>
    </footer>
  );
}