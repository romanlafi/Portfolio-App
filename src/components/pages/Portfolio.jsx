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
    SiVite, SiTypescript, SiNginx, SiCss3
} from 'react-icons/si';
import {BiLogoPostgresql} from "react-icons/bi";
import ProjectCard from "../ProjectCard.jsx";
import SectionTitle from "../SectionTitle.jsx";
import SectionWrapper from "../SectionWrapper.jsx";

export default function Portfolio() {
    const projects = [
        {
            title: "Task Manager",
            image: "/src/assets/taskmanager.png",
            tech: [BiLogoPostgresql, FaPython, SiFastapi, SiReact, SiVite, SiJavascript, SiCss3, FaDocker, SiNginx],
            github: "https://github.com/romanlafi/TaskManager-App",
            demo: "https://taskmanager.romanlafi.org/",
        },
        {
            title: "MovieGraph",
            image: "/src/assets/moviegraph.png",
            tech: [SiThemoviedatabase, BiLogoPostgresql, FaPython, SiFastapi, FaReact, SiVite, SiTypescript, SiTailwindcss, FaDocker, SiNginx],
            github: "https://github.com/romanlafi/MovieGraph-App",
            demo: "https://moviegraph.romanlafi.org/",
        }
    ];

    return (
        <SectionWrapper id="portfolio" scrollMargin="scroll-mt-15 md:scroll-mt-0">

                <SectionTitle title="PORTFOLIO"/>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} {...project} />
                    ))}
                </div>

        </SectionWrapper>
    );
}