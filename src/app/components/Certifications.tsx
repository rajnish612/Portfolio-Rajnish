import React from "react";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  // Sample certification data - replace with your actual certifications
  const certifications = [
    {
      id: 1,
      title: "Developing Back-End Apps with Node.js and Express ",
      company: "IBM",

      link: "https://www.coursera.org/account/accomplishments/records/C3XU2EKRFEK3",
      description:
        "Professional-level certification for Developing Back end Applications",
      logo: "/images/ibm.png",
    },
    {
      id: 2,
      title: "Introduction to Software Engineering",
      company: "IBM",

      link: "https://www.coursera.org/account/accomplishments/verify/PJXQGP6QCVIY",
      description: "Professional Software Engineering certificate",
      logo: "/images/ibm.png",
    },
    {
      id: 3,
      title: "Developing Front-End Apps with React",
      company: "IBM",

      link: "https://www.coursera.org/account/accomplishments/verify/Z6TE5G5C7KZJ",
      description: "Advanced React development skills and best practices",
      logo: "/images/ibm.png",
    },
  ];

  return (
    <div id="certifications" className="section-shell max-w-5xl mx-auto p-6 rounded-3xl my-14">
      <h2 className="font-display readable-title text-4xl font-bold mb-8 text-center">
        Certifications
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="glass-card rounded-xl p-6 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-900/70 rounded-lg border border-white/15 flex-shrink-0">
                  <img
                    src={cert.logo}
                    alt={`${cert.company} logo`}
                    className="w-8 h-8 object-contain"
                  />
                  <Award className="w-6 h-6 text-blue-600 hidden" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-lg font-medium text-teal-300 mt-1">
                    {cert.company}
                  </p>
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-200 transition-colors"
                aria-label={`View ${cert.title} certification details`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {cert.description}
            </p>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-300 hover:text-teal-200 font-medium text-sm transition-colors"
            >
              View Certification
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="readable-body text-sm">
          Click on the certification links to view official verification or more
          details from the issuing organizations.
        </p>
      </div>
    </div>
  );
};

export default Certifications;
