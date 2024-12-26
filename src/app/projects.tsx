import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const details = [
    {
        title: "Anywhere API",
        description: "This project is part of the Mobile Programming course. It is called Anywhere, a mobile app that provides parking spaces for everyone.",
        tags: ["Fiber Go", "Docker", "Postgres"],
        link: "https://github.com/attmhd/anywhere-api"
    },
    {
        title: "Blogify",
        description: "This project is part of the Web Programming course. It is called Blogify, a web app that provides create blog with writer assistant fastly.",
        tags: ["Laravel", "MySQL", "Filament",  "FastAPI"],
        link: "https://github.com/attmhd/blogify"
    },
    {
        title: "Lookin",
        description: "This project is part of the Capstone Project in Bangkit Academy. It is called Lookin, an Android app for gender and face shape classification. I developed the ML model for this project.",
        tags: ["Tensorflow", "Jupyter Notebook", "Kaggle"],
        link: "https://github.com/CP-Lookin/Machine-Learning"
    },
    {
        // analisis data
        title: "Air Quality Data Analysis",
        description: "This project is part of the Analysis Data course. A project that analyze air quality on China station.",
        tags: ["Streamlit", "Jupyter Notebook", "Pandas"],
    }
];

const Projects = () => {
    return (
        <div className="pt-10">
            <h1 className="font-semibold text-lg">Here are some of the projects that I have worked on</h1>
            {/* Grid container for two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
                {details.map((project, index) => (
                    <Card key={index} className="w-full h-52">
                        {/* Title Section */}
                        <div className="px-6 pt-6">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-xl leading-none tracking-tight hover:underline">
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
                                    <Badge key={tagIndex} variant="secondary" className="w-max">{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Projects;
