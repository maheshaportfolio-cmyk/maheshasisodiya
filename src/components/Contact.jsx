import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });

  const [notification, setNotification] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.company.trim() ||
      !formData.message.trim()
    ) {
      setNotification("⚠ All fields are required!");
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    const params = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      company: formData.company,
      message: formData.message,
    };

    emailjs
      .send(
        "service_zq0yzl4",
        "template_h15kvxr",
        params,
        "onOcLdUjDNTEGLoye"
      )
      .then(() => {
        setNotification(" Thank you for submission! I will reach you soon.");
        setTimeout(() => setNotification(""), 3000);

        setFormData({
          name: "",
          email: "",
          mobile: "",
          company: "",
          message: "",
        });
      })
      .catch(() => {
        setNotification(" Something went wrong!");
        setTimeout(() => setNotification(""), 3000);
      });
  };

  return (
    <section className="min-h-screen bg-white text-black px-8 md:px-28 py-32 flex flex-col" id="contact">
      <div className="flex flex-col md:flex-row gap-20 md:gap-28 items-start justify-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-7"
        >
          <p className="tracking-[0.35em] uppercase text-sm md:text-base text-gray-500 font-semibold">
            • Start a Project •
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s talk <br /> about your next project!
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Fill out the form and I’ll reach out soon. <br />
            Or email me directly at:{" "}
            <span className="underline font-medium">maheshasisodiya@gmail.com</span>
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >

          {/* POPUP INSIDE FORM */}
          {notification && (
            <div className="mb-6 bg-black text-white text-sm md:text-base px-6 py-3 rounded-full text-center">
              {notification}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-12">

            {/* NAME */}
            <div className="space-y-2">
              <label className="text-gray-700 text-sm md:text-base font-medium">
                What's your name?
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-base md:text-lg"
              />
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-gray-700 text-sm md:text-base font-medium">
                What's your email?
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-base md:text-lg"
              />
            </div>

            {/* MOBILE */}
            <div className="space-y-2">
              <label className="text-gray-700 text-sm md:text-base font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-base md:text-lg"
              />
            </div>

            {/* COMPANY */}
            <div className="space-y-2">
              <label className="text-gray-700 text-sm md:text-base font-medium">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-base md:text-lg"
              />
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="text-gray-700 text-sm md:text-base font-medium">
                Message
              </label>
              <textarea
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-gray-400 focus:border-black outline-none py-3 text-base md:text-lg"
              ></textarea>
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              className="mt-6 bg-black text-white font-semibold rounded-full py-3 px-12 text-lg md:text-xl hover:bg-gray-800 transition"
            >
              Send Message
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
