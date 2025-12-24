import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import { useState } from "react";
import HireMeModal from "./HireMeModal";
import girli from "../assets/girli.webp"
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
     <section
     id="hero"
  className="
    w-full
    px-6 sm:px-12 md:px-24 lg:px-32
pt-24 sm:pt-36 md:pt-48
    pb-24 sm:pb-36 md:pb-48

    grid grid-cols-1 md:grid-cols-2
    items-center

    gap-24 sm:gap-20 md:gap-20
    relative overflow-hidden
    bg-cover bg-center bg-no-repeat
    text-black
  "
  style={{ backgroundImage: `url(${hero})` }}
>


        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="relative z-10 space-y-6 text-center md:text-left"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative inline-flex items-center px-5 py-1.5 rounded-full text-sm border border-black bg-white"
          >
            Hello! 👋
            <span className="absolute -top-2 -right-2 text-purple-500">✦</span>
          </motion.span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            I'm <span className="font-semibold">Mahesha</span>, <br />
            <span>Product Designer</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I’m a UI/UX and WordPress developer with 2.5 years of experience
            building clean, user-centric digital experiences.
          </p>

          <div className="flex justify-center md:justify-start gap-3 mt-4 flex-wrap">
            <a
              href="/Mahesha-Resume.pdf"
              download
              className="px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-white border border-black hover:bg-black hover:text-white flex items-center gap-2"
            >
              Resume <FaArrowDown />
            </a>

            <button
              onClick={() => setOpenModal(true)}
              className="px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-white border border-black hover:bg-black hover:text-white"
            >
              Hire Me
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
            relative flex justify-center items-center 
            mt-10 md:mt-0 
            z-10

            scale-[0.60] xs:scale-[0.70] sm:scale-[0.80] md:scale-100
          "
        >
          <motion.div
            className="absolute rounded-full blur-[35px] opacity-50 w-[200px] h-[200px] bg-gradient-to-br from-gray-200 to-gray-400 -z-10"
          />

         <div className="relative backdrop-blur-xl   flex items-center justify-center w-[220px] h-[220px] sm:w-[200px] sm:h-[260px] md:w-[300px] md:h-[330px] bg-white rounded-2xl overflow-hidden">
  <img src={img4} className="w-full h-full object-cover" alt="UI UX Designer" />
</div>

<div
  className="
    absolute bg-white border rounded-xl shadow-md text-center px-3 py-1

    /* --- MOBILE: push far outside circle --- */
    top-[-60px] right-[-10px]

    /* --- TABLET & DESKTOP: pull closer but still outside --- */
    sm:top-[-50px] sm:right-[-20px]
    md:top-[-40px] md:right-[-30px]
  "
>
  ⭐⭐⭐⭐⭐
  <h3 className="font-bold text-sm sm:text-base">2.5 Years</h3>
  <p className="text-xs text-gray-500">Experience</p>
</div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 45 }}
            className="absolute rounded-full border-2 border-black/25 opacity-120 w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] md:w-[450px] md:h-[450px] -z-10"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 60 }}
            className="absolute rounded-full border border-black/15 opacity-100 w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] md:w-[520px] md:h-[520px] -z-10"
          />
        </motion.div>
      </section>

      <HireMeModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
