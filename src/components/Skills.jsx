import { FaFigma, FaBullhorn, FaCode, FaPenNib } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    title: "UI / UX & Creative Design",
    icon: <FaPenNib className="text-5xl text-black" />,
    tools: ["Figma", "Canva", "Adobe", "Wireframes", "Prototyping"],
  },
  {
    title: "Organic Digital Marketing",
    icon: <FaBullhorn className="text-5xl text-black" />,
    tools: [
      "Zoho Social",
      "Capcut",
      "Content Writing",
      "Reels & Video",
      "Social Creatives",
    ],
  },
  {
    title: "Frontend Development",
    icon: <FaCode className="text-5xl text-black" />,
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript (Basic)"],
  },
];

export default function Skills() {
  return (
    <section className="pb-20 py-16 bg-white text-black" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Skills & <span className="text-black">Tools</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="
                border border-black rounded-2xl p-8 bg-white shadow-sm
                transition duration-300 cursor-default
                hover:-translate-y-2 hover:shadow-md hover:bg-gray-100
              "
            >
              {/* ICON VISIBLE NOW */}
              <div className="mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {skill.title}
              </h3>

              <ul className="space-y-2">
                {skill.tools.map((tool, tIndex) => (
                  <li
                    key={tIndex}
                    className="flex items-center gap-2 text-gray-700 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    {tool}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
