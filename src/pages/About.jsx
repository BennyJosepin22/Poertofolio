import { useState } from "react";
import { Briefcase, GraduationCap, Download } from "lucide-react";

const About = () => {
  const [visibleCareerIndexes, setVisibleCareerIndexes] = useState([]);
  const [visibleEduIndexes, setVisibleEduIndexes] = useState([]);

  const toggleCareerResponsibilities = (index) => {
    setVisibleCareerIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleEduResponsibilities = (index) => {
    setVisibleEduIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const education = [
    {
      institution: "Universitas Satya Terra Bhinneka",
      degree: "S1, informatika · GPA 3.80/4.00",
      period: "2023 - 2024",
      location: "sunggal, sumatra utara",
      logo: "/assets/logo.png",
    },
  ];

  const careerExperiences = [];

  return (
    <div className="max-w-6xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">About</h1>
        <p className="text-gray-400">A short story of me</p>
        <div className="border-t border-gray-800 my-4"></div>
      </div>

      {/* Education Section - Moved Above Career */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <GraduationCap size={20} />
            Education
          </h2>
        </div>

        <p className="text-gray-400 mb-6">Riwayat pendidikan saya.</p>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 border border-gray-800"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-12 h-12 rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{edu.institution}</h3>
                  <p className="text-gray-400">{edu.degree}</p>
                  <div className="flex flex-wrap gap-x-4 text-gray-400 text-sm mt-2">
                    <div>{edu.period}</div>
                    <div>{edu.location}</div>
                  </div>

                  {/* Education Responsibilities Section */}
                  {edu.responsibilities && edu.responsibilities.length > 0 && (
                    <>
                      <button
                        className="mt-2 text-sm text-blue-400"
                        onClick={() => toggleEduResponsibilities(index)}
                      >
                        {visibleEduIndexes.includes(index)
                          ? "Hide activities"
                          : "Show activities"}
                      </button>
                      {visibleEduIndexes.includes(index) && (
                        <div className="mt-3">
                          <p className="text-gray-300 text-sm font-medium mb-1">
                            Activities & Responsibilities:
                          </p>
                          <ul className="list-disc list-inside text-gray-400 text-sm">
                            {edu.responsibilities.map((res, idx) => (
                              <li key={idx}>{res}</li>
                            ))}
                          </ul>

                          {edu.projects && edu.projects.length > 0 && (
                            <>
                              <p className="text-gray-300 text-sm font-medium mt-2 mb-1">
                                Projects:
                              </p>
                              <ul className="list-disc list-inside text-gray-400 text-sm">
                                {edu.projects.map((project, idx) => (
                                  <li key={idx}>{project}</li>
                                ))}
                              </ul>
                            </>
                          )}

                          {edu.achievements && edu.achievements.length > 0 && (
                            <>
                              <p className="text-gray-300 text-sm font-medium mt-2 mb-1">
                                Achievements:
                              </p>
                              <ul className="list-disc list-inside text-gray-400 text-sm">
                                {edu.achievements.map((achievement, idx) => (
                                  <li key={idx}>{achievement}</li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Section - Now Below Education */}
    </div>
  );
};

export default About;
