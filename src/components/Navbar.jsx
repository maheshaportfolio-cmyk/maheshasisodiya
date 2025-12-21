import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-transparent">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`
          w-full md:w-[95%] max-w-7xl mx-auto
          px-6 py-4 rounded-none md:rounded-full
          shadow-xl flex items-center justify-between
          bg-black text-white transition
          ${scrolled ? "opacity-90 backdrop-blur-md" : "opacity-100"}
        `}
      >

        <div className="text-white font-bold tracking-widest text-xl">
          MAHESHA
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
              offset={-90}
              activeClass="border-b-2 border-white"
              className="
                relative cursor-pointer transition
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-white before:transition-all before:duration-300
                hover:before:w-full
              "
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://www.linkedin.com/in/mahesha-sisodiya-20430023a/"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-4 py-1.5 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <FaLinkedin className="text-lg" /> LinkedIn
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </motion.div>

      {open && (
        <div className="md:hidden w-full px-8 py-6 text-center flex flex-col gap-4 shadow-xl bg-black text-white">

          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              hashSpy={true}
              offset={-90}
              activeClass="border-b-2 border-white"
              className="
                relative cursor-pointer transition
                before:absolute before:-bottom-1 before:left-0 before:h-[2px]
                before:w-0 before:bg-white before:transition-all before:duration-300
                hover:before:w-full
              "
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://www.linkedin.com/in/mahesha-sisodiya-20430023a/"
            target="_blank"
            rel="noreferrer"
            className="border border-white px-4 py-2 rounded-full flex justify-center items-center gap-2 hover:bg-white hover:text-black transition"
          >
            <FaLinkedin /> LinkedIn
          </a>

        </div>
      )}

    </nav>
  );
}