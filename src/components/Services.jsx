import { FaFigma, FaWordpress, FaBullhorn, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaFigma />,
    color: "text-purple-600",
    bg: "bg-purple-200",
    title: "UI/UX Design",
    desc: "Modern web & mobile interface design.",
  },
  {
    icon: <FaWordpress />,
    color: "text-blue-600",
    bg: "bg-blue-200",
    title: "WordPress Development",
    desc: "Responsive WordPress sites & landing pages.",
  },
  {
    icon: <FaBullhorn />,
    color: "text-green-600",
    bg: "bg-green-200",
    title: "Digital Marketing",
    desc: "Brand awareness & organic growth.",
  },
  {
    icon: <FaPalette />,
    color: "text-pink-500",
    bg: "bg-pink-200",
    title: "Branding & Identity",
    desc: "Logos, identity & visual content.",
  },
];

export default function Services() {
  return (
    <section className="w-full py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 w-full">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-black whitespace-nowrap text-center"
          >
            Services I Provide
          </motion.h2>

          <div className="flex flex-col sm:flex-row gap-6 flex-wrap justify-center lg:flex-nowrap">

            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                className="
                  relative bg-white border border-gray-200 rounded-3xl 
                  shadow-lg p-6 overflow-hidden
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                  transition duration-300
                  w-full sm:w-[260px] lg:w-[240px]
                "
              >

                <div className={`text-4xl mb-4 ${s.color}`}>
                  {s.icon}
                </div>

                <h3 className="font-semibold text-lg text-black mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm">{s.desc}</p>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
