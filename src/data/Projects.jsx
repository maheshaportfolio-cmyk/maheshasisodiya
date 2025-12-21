import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import tectona from "../assets/tectona.png";
import cognisun from "../assets/cognisun.png";
import stayin from "../assets/stayin.png";
import ldhfarmer from "../assets/ldhfarmer.png";
import mhs from "../assets/mhs.png";

const projects = [
  {
    image: tectona,
    title: "Tectona Grandis",
    subtitle: "WordPress + UI/UX Website",
    desc: "Designed and developed a clean, user-centric WordPress site focused on intuitive navigation and improved user flow.",
    tags: "UI/UX Design • WordPress • Branding",
    button: "Visit Site",
    link: "https://www.tectonagrandis.com",
  },
  {
    image: stayin,
    title: "StayinFront",
    subtitle: "WordPress + UI/UX Website ",
    desc: "Redesigned CRM workflows for better usability and increased efficiency, focusing on intuitive interactions.",
    tags: "UX • WordPress ",
    button: "Visit Site",
    link: "https://www.stayinfront.com/",
  },
  {
    image: cognisun,
    title: "Cognisun CRM",
    subtitle: "Product Design | UX Strategy",
    desc: "Redesigned CRM workflows for better usability and increased efficiency, focusing on intuitive interactions.",
    tags: "UX • CRM • Product Strategy",
    button: "Visit Site",
    link: "https://www.cognisun.com",
  },
  {
    image: mhs,
    title: "Maheshwari Mewad Samaj App",
    subtitle: "Community App UI/UX",
    desc: "Created mobile-first UI/UX screens to enhance engagement and improve navigation for community features.",
    tags: "Mobile App • Wireframes • UX",
    // button: "View Screens",
    // link: "#",
  },
  {
    image: ldhfarmer,
    title: "LDH FARMER ZONE",
    subtitle: "Community App UI/UX",
    desc: "Created mobile-first UI/UX screens to enhance engagement and improve navigation for community features.",
    tags: "Mobile App • Wireframes • UX",
    // button: "View Screens",  
    // link: "#",
  },
];

export default function Projects() {
  return (
    <section className="w-full py-32 bg-white text-black" id="projects">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-24 tracking-tight"
        >
          Featured Work
        </motion.h2>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                border border-black/60 rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.08)]
                grid grid-cols-1 
                md:grid-cols-[62%_38%]
                lg:grid-cols-[68%_32%]
                overflow-hidden
                w-full mx-auto
              "
            >
              <div className="w-full h-[260px] sm:h-[380px] md:h-[500px] lg:h-[580px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-6 sm:px-10 py-10 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {project.title}
                </h3>

                <p className="text-lg sm:text-xl text-gray-700 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                  {project.desc}
                </p>

                <p className="text-gray-800 font-medium text-sm tracking-wide mb-6">
                  {project.tags}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block self-start mt-4 px-8 py-3 rounded-full
                      border border-black font-semibold text-base
                      transition-all duration-200
                      hover:bg-black hover:text-white
                    "
                  >
                    {project.button}
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}