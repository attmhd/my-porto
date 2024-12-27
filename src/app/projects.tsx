'use client'; // Ensure this file is client-side

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Define a type for the project details
interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string; // Link is optional
}

const details: Project[] = [
  {
    title: "Anywhere API",
    description:
      "This project is part of the Mobile Programming course and serves as the API for a mobile app that provides parking spaces for everyone.",
    tags: ["Fiber Go", "Docker", "Postgres"],
    link: "https://github.com/attmhd/anywhere-api",
  },
  {
    title: "Blogify",
    description:
      "This project is part of the Web Programming course. It is called Blogify, a web app that provides create blog with writer assistant fastly.",
    tags: ["Laravel", "MySQL", "Filament", "FastAPI"],
    link: "https://github.com/attmhd/blogify",
  },
  {
    title: "Lookin",
    description:
      "This project is part of the Capstone Project in Bangkit Academy. It is called Lookin, an Android app for Hairstyle Reccomendation based on Face Shape.",
    tags: ["Tensorflow", "Jupyter Notebook", "Kaggle"],
    link: "https://github.com/CP-Lookin/Machine-Learning",
  },
  {
    title: "Air Quality Data Analysis",
    description:
      "This project is part of the Analysis Data course. A project that analyze air quality on China station.",
    tags: ["Streamlit", "Jupyter Notebook", "Pandas"],
  },
  {
    title: "Publikasi",
    description:
      "This project is part of the Web Programming course. It is called Publikasi, a web app that provides article publish.",
    tags: ["Codeigniter", "MySQL"],
    link: "https://github.com/attmhd/publikasi_ci4",
  },
  {
    title: "Monitoring LDR",
    description:
      "This project is part of the Embedded system course ( Send data from NodeMCU esp 8266 to MySQL database ).",
    tags: ["FastAPI", "MySQL", "Arduino", "Streamlit"],
    link: "https://github.com/attmhd/monitoring-ldr",
  },
  {
    title: "Simple Card Maker",
    description:
      "This project is part of a study group on basic Laravel development and serves as a simple web application that allows users to create simple name card.",
    tags: ["Laravel", "MySQL", "Vite JS", "Tailwind CSS"],
    link: "https://github.com/attnmhd/simple-card-maker",
  },
];

const Projects: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false); // State to toggle visibility of more projects

  const visibleProjects = showMore ? details : details.slice(0, 4); // Show only the first 4 projects initially

  return (
    <div className="pt-20">
      <h1 className="font-semibold text-lg">
        Here are some of the projects that I have worked on
      </h1>
      {/* Grid container for two columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
        {visibleProjects.map((project, index) => (
          <Card key={index} className="w-full h-52">
            {/* Title Section */}
            <div className="px-6 pt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-xl leading-none tracking-tight hover:underline"
              >
                {project.title}
              </a>
            </div>

            {/* Description Section */}
            <div className="px-6 py-3 text-sm text-muted-foreground text-justify">
              {project.description}
            </div>

            {/* Badge Section */}
            <div className="p-6">
              <div className="flex flex-wrap space-x-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="w-max">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View More / View Less Link */}
      <div className="text-center mt-5 flex justify-end">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            setShowMore(!showMore); // Toggle between "View More" and "View Less"
          }}
          className="text-blue-500 hover:underline"
        >
          {showMore ? "Less" : "View more projects"}
        </a>
      </div>
    </div>
  );
};

export default Projects;
