import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 border-t border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 px-6 text-center">

        {/* Name */}
        <span className="text-2xl font-bold tracking-wide">
        Mahesha Sisodiya 
        </span>

        {/* Separator */}
        <span className="text-gray-500">|</span>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:maheshasisodiya@gmail.com"
            className="text-black hover:text-gray-600 transition"
          >
            <FiMail size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/mahesha-sisodiya-20430023a/"
            target="_blank"
            className="text-black hover:text-gray-600 transition"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Separator */}
        <span className="text-gray-500">|</span>

        {/* Creator */}
        <span className="text-sm text-gray-700">
          Created by <span className="font-semibold">Mahesha sisodiya</span>
        </span>

      </div>
    </footer>
  );
}
