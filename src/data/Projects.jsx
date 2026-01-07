import { motion } from "framer-motion";
import tectona from "../assets/tectona.png";
import cognisun from "../assets/cognisun.png";
import stayin from "../assets/stayin.png";
import ldhfarmer from "../assets/ldhfarmer.png";
import mhs from "../assets/mhs.png";
import rcaa2 from "../assets/rcaa2.png";

const projects = [
  {
    image: tectona,
    title: "Tectona Grandis",
    subtitle: "WordPress + UI/UX Website",
    desc: "Designed and developed a clean, user-centric WordPress site focused on intuitive navigation and improved user flow.",
    tags: "UI/UX Design • WordPress • Branding",
    link: "https://www.tectonagrandis.com",
  },
  {
    image: stayin,
    title: "StayinFront",
    subtitle: "WordPress + UI/UX Website",
    desc: "Redesigned CRM workflows for better usability and efficiency.",
    tags: "UX • WordPress",
    link: "https://www.stayinfront.com/",
  },
  {
    image: cognisun,
    title: "Cognisun CRM",
    subtitle: "Product Design | UX Strategy",
    desc: "Redesigned CRM workflows focusing on intuitive interactions.",
    tags: "UX • CRM • Product Strategy",
    link: "https://www.cognisun.com",
  },
  {
    image: rcaa2,
    title: "Rotary Club Ahmedabad Airport",
    subtitle: "Community App UI/UX",
    desc: "Mobile-first UI/UX for community engagement.",
    tags: "Mobile App • UX",
  },
  {
    image: mhs,
    title: "Maheshwari Mewad Samaj App",
    subtitle: "Community App UI/UX",
    desc: "Clean navigation & user-focused mobile UI.",
    tags: "Mobile App • UX",
  },
  {
    image: ldhfarmer,
    title: "LDH Farmer Zone",
    subtitle: "Agro Community App UI/UX",
    desc: "Designed intuitive UI for farmers & community.",
    tags: "Mobile App • UX",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-white text-black py-[100px]"
    >
      {/* SECTION TITLE */}
      <h2 className="text-5xl font-bold text-center mb-[100px]">
        Featured Work
      </h2>

      {/* STICKY STACK */}
      <div className="relative max-w-[1500px] mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky top-28 mb-[180px]"
            style={{ zIndex: index + 1 }}
          >
            <motion.div
              initial={{ opacity: 0.6, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="
                bg-white border border-black/60
                rounded-3xl overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                grid grid-cols-1 md:grid-cols-[65%_35%]
              "
            >
              {/* IMAGE */}
              <div className="h-[260px] sm:h-[400px] md:h-[520px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-xl text-gray-700 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.desc}
                </p>

                <p className="text-sm font-semibold tracking-wide text-gray-800 mb-6">
                  {project.tags}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      self-start px-8 py-3 rounded-full
                      border border-black font-semibold
                      hover:bg-black hover:text-white
                      transition
                    "
                  >
                    Visit Site
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
