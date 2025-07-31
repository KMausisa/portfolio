// This will handle displaying my job experiences
import React from "react";

/** * Experience component that displays a list of job experiences.
 * Each experience includes a job title, company name, and description.
 * @returns {JSX.Element} Rendered Experience component.  */
const Experience = () => {
  const experienceList = [
    {
      jobTitle: "Web Frontend Developer Intern",
      company: "FamilySearch Intern",
      duration: "August 2022 - December 2022",
      description:
        "During my internship, I worked with a team that handled the design system of the website. I had the opportunity to collaborate with UX designers and senior engineers. Together, we built and produced neat components that continue to support the site’s user experience. Here are some highlights from my internship: ",
      highlights: [
        "Developed React components within the Org's Design System Library. Ensured quality by writing tests, improving documentation, and coordinating with Architects and UX Engineers.",
        "Authored feature to highlight personas found in historical records (RecordBlock).",
        "Created component that resizes with user input.",
        "Maintained a component used in rendering person data. Added features, enforced consistency between variants, and refactored outdated code to reduce duplication.",
      ],
      conclusion:
        "Overall, my experience helped me understand how an organization works together to produce something great in FamilySearch. ",
    },
  ];

  return (
    <div className="experience min-h-screen bg-gray-50 text-gray-900">
      <h2 className="text-3xl font-bold text-center p-12">My Experience</h2>
      <ul className="max-w-md md:max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow p-8">
        {experienceList.map((exp, index) => (
          <li key={index} className="experience-item mb-6">
            <h3 className="text-xl font-semibold">
              {exp.jobTitle} - {exp.company}
            </h3>
            <p className="mb-4">
              <em>{exp.duration}</em>
            </p>
            <p>{exp.description}</p>
            <ul className="highlights-list list-disc pl-6 mt-2">
              {exp.highlights.map((highlight) => (
                <li className="">{highlight}</li>
              ))}
            </ul>
            <p>{exp.conclusion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
