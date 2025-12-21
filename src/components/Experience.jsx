export default function Experience() {
  const experiences = [
    {
      num: "01",
      role: "UI/UX Designer",
      company: "Cognisun Inc.",
      duration: "01/2025 – Present • Ahmedabad, India",
      details: "Driving UI/UX & WordPress development, organic digital growth and user-centric solutions.",
    },
    {
      num: "02",
      role: "WordPress Developer",
      company: "Nishan Solution",
      duration: "05/2023 – 12/2024 • Ahmedabad, India",
      details: "Worked on WordPress design & development, building responsive and optimized websites.",
    },
    {
      num: "03",
      role: "WordPress Intern",
      company: "Stayinfront India Pvt. Ltd.",
      duration: "2023",
      details: "Completed internship focused on WordPress design and development.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-12">
          Professional <span className="text-gray-700">Experience</span>
        </h2>

        {/* Timeline Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border border-gray-200 shadow-lg rounded-xl p-8 text-center bg-white hover:shadow-2xl transition"
            >
              {/* Number */}
              <div className="text-5xl font-bold text-black mb-4">
                {exp.num}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black">{exp.role}</h3>
              <p className="text-gray-600 font-medium">{exp.company}</p>

              {/* Duration */}
              <p className="text-sm text-gray-500 mt-2">{exp.duration}</p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {exp.details}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
