import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";

export default function HireMeModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.company.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      toast.error("⚠ All fields are required!", {
        theme: "dark",
        position: "top-center",
        style: {
          background: "#000",
          color: "#fff",
          border: "1px solid #fff",
        },
      });
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      mobile: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_zq0yzl4",      // YOUR SERVICE ID
        "template_djfrp6b",     // YOUR TEMPLATE ID
        templateParams,
        "onOcLdUjDNTEGLoye"     // YOUR PUBLIC KEY
      )
      .then(() => {
        toast.success("Thank you! I will contact you soon.", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          draggable: true,
          pauseOnHover: false,
          theme: "dark",
          style: {
            background: "#fff",
            color: "#000",
            border: "1px solid #000",
            zIndex: 999999,
          },
          progressClassName: "toast-progress-bar",
        });

        setTimeout(() => {
          onClose();
          window.scrollTo({ top: 0, behavior: "smooth" });
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
        }, 1200);
      })
      .catch(() => {
        toast.error(" Something went wrong!", {
          theme: "dark",
          position: "top-center",
        });
      });
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white text-black w-[90%] max-w-lg p-8 rounded-2xl shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl hover:text-gray-600"
        >
          <FaTimes />
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">
          Let’s Work Together 
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full border border-black rounded-lg px-4 py-3"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email Address *"
            className="w-full border border-black rounded-lg px-4 py-3"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <input
            type="text"
            placeholder="Company Name *"
            className="w-full border border-black rounded-lg px-4 py-3"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number *"
            className="w-full border border-black rounded-lg px-4 py-3"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <textarea
            placeholder="Tell me about your project *"
            rows="4"
            className="w-full border border-black rounded-lg px-4 py-3"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>,
    document.body
  );
}
