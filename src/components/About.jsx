import { motion } from "framer-motion";
import profile from "../assets/hero.png";
import { FaArrowDown } from "react-icons/fa";
import girl from "../assets/girl.avif"

export default function AboutExperience() {
  const experiences = [
    {
      role: "UI/UX Designer",
      company: "Cognisun Inc.",
      duration: "01/2025 – Present",
      location: "Ahmedabad, India",
    },
    {
      role: "WordPress Developer",
      company: "Nishan Solution",
      duration: "05/2023 – 12/2024",
      location: "Ahmedabad, India",
    },
    {
      role: "WordPress Intern",
      company: "Stayinfront India Pvt. Ltd.",
      duration: "2023",
      location: "India",
    },
  ];

  const tags = ["UI/UX", "WordPress", "Digital Marketing", "Figma", "Canva", "Branding"];

  return (
    <section id="about" className="w-full py-24 bg-white text-black">
      
      {/* 🔥 Wider container */}
      <div className="max-w-8xl mx-auto px-6 sm:px-12 md:px-24 lg:px-32 grid lg:grid-cols-3 gap-24 items-center">

        {/* EXPERIENCE LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8">
            Experience <span className="text-gray-700">Journey</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-6 items-center">

                <div className="text-5xl font-bold text-black leading-none">
                  {i + 1}
                </div>

                <div className="flex-1 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-lg">{exp.role}</h3>
                  <p className="text-gray-700">{exp.company}</p>

                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-64 h-64 rounded-full border-4 border-black overflow-hidden shadow-xl">
            <img src={girl} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {tags.map((tag, i) => (
              <span key={i} className="px-4 py-1 border border-black rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ABOUT RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            It's me, Mahesha — nice to see you here!
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I design clean, modern & user-centered digital experiences with a strong focus on usability and brand identity.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            My skillset blends UI/UX principles, WordPress development and organic digital marketing.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            My strength lies in problem-solving, intuitive design and building trusted, meaningful experiences.
          </p>

          <a
            href="/Mahesha-Resume.pdf"
            download="Mahesha-Resume.pdf"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 border border-black rounded-full 
                       font-semibold hover:bg-black hover:text-white transition"
          >
            Download Resume <FaArrowDown />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
