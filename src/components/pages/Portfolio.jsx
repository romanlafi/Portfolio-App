import {
    FaReact,
    FaPython,
    FaDocker
} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiJavascript,
    SiFastapi,
    SiReact,
    SiThemoviedatabase,
    SiVite,
    SiTypescript,
    SiNginx,
    SiCss3
} from 'react-icons/si';
import {BiLogoPostgresql} from "react-icons/bi";
import ProjectCard from "../ProjectCard.jsx";
import SectionTitle from "../SectionTitle.jsx";
import SectionWrapper from "../SectionWrapper.jsx";

export default function Portfolio() {
    const projects = [
        {
            id: "task-manager",
            title: "Task Manager",
            image: "/taskmanager.webp",
            tech: [
                { id: "postgresql", Icon: BiLogoPostgresql },
                { id: "python", Icon: FaPython },
                { id: "fastapi", Icon: SiFastapi },
                { id: "react", Icon: SiReact },
                { id: "vite", Icon: SiVite },
                { id: "javascript", Icon: SiJavascript },
                { id: "css", Icon: SiCss3 },
                { id: "docker", Icon: FaDocker },
                { id: "nginx", Icon: SiNginx },
            ],
            github: "https://github.com/romanlafi/TaskManager-App",
            demo: "https://taskmanager.romanlafi.org/",
        },
        {
            id: "movie-graph",
            title: "MovieGraph",
            image: "/moviegraph.webp",
            tech: [
                { id: "the-movie-database", Icon: SiThemoviedatabase },
                { id: "postgresql", Icon: BiLogoPostgresql },
                { id: "python", Icon: FaPython },
                { id: "fastapi", Icon: SiFastapi },
                { id: "react", Icon: FaReact },
                { id: "vite", Icon: SiVite },
                { id: "typescript", Icon: SiTypescript },
                { id: "tailwind-css", Icon: SiTailwindcss },
                { id: "docker", Icon: FaDocker },
                { id: "nginx", Icon: SiNginx },
            ],
            github: "https://github.com/romanlafi/MovieGraph-App",
            demo: "https://moviegraph.romanlafi.org/",
        }
    ];

    return (
        <SectionWrapper id="portfolio" scrollMargin="scroll-mt-15 md:scroll-mt-0">

                <SectionTitle title="PORTFOLIO"/>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>

        </SectionWrapper>
    );
}
