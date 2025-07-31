import React from "react";

/** * Projects component that displays a list of projects.
 * Each project includes a title, description, and
 * a link to the project.
 * @returns {JSX.Element} Rendered Projects component.  */
const Projects = () => {
  const projectList = [
    {
      title: "Project Gym Tracker",
      description:
        "After building my discipline to exercise and go to the gym, I sat down one day and refined my workout routine to build stronger muscle and health. This caused me to keep track of the amount of weight and reps I was performing for each exercise. This made me wonder if there was an app that can help me organize my efforts. Then I said to myself, “Wait, I’m an engineer!” \n After a few months, I built a full stack web app for those who want to track their gym progress in a simple efficient manner. This web application is built on Angular and Supabase. It also uses Chart.js to display data over time. It includes features like: ",
      features: [
        "Workout scheduling and history logging",
        "A 'Workout Mode' that guides users through routines",
        "Visual progress charts for each exercise",
      ],
      link: "https://gym-tracker.com",
    },
  ];

  return (
    <div className="projects min-h-screen bg-gray-50 text-gray-900">
      <h2 className="text-3xl font-bold text-center p-12">My Projects</h2>
      <ul className="max-w-md md:max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow p-8">
        {projectList.map((project, index) => (
          <li key={index} className="project-item">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>
              {project.description.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
            <ul className="features-list list-disc pl-6 mt-2">
              {project.features &&
                project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
            </ul>
            <br />
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
