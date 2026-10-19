import {FaPython} from 'react-icons/fa';
import {
    SiTailwindcss,
    SiFastapi,
    SiReact,
    SiThemoviedatabase,
    SiVite,
    SiTypescript,
    SiCloudflareworkers,
    SiPostgresql,
    SiHono,
    SiReactrouter,
    SiLucide
} from 'react-icons/si';
import ProjectCard from "../ProjectCard.jsx";
import SectionTitle from "../SectionTitle.jsx";
import SectionWrapper from "../SectionWrapper.jsx";

export default function Portfolio() {
    const projects = [
        {
            id: "task-manager",
            title: "TaskManager",
            screenshots: [
                "/taskmanager-login.webp",
                "/taskmanager-list.webp",
                "/taskmanager-board.webp",
                "/taskmanager-calendar.webp",
            ],
            mobileScreenshots: [
                "/taskmanager-login-mobile.webp",
                "/taskmanager-list-mobile.webp",
                "/taskmanager-board-mobile.webp",
                "/taskmanager-calendar-mobile.webp",
            ],
            tech: [
                { id: "typescript", Icon: SiTypescript },
                { id: "react", Icon: SiReact },
                { id: "react-router", Icon: SiReactrouter },
                { id: "vite", Icon: SiVite },
                { id: "tailwind-css", Icon: SiTailwindcss },
                { id: "lucide", Icon: SiLucide },
                { id: "hono", Icon: SiHono },
                { id: "cloudflare-workers", Icon: SiCloudflareworkers },
            ],
            github: "https://github.com/romanlafi/TaskManager-App",
            demo: "https://taskmanager.romanlafi.org/",
        },
        {
            id: "movie-graph",
            title: "MovieGraph",
            screenshots: [
                "/moviegraph-home.webp",
                "/moviegraph-genres.webp",
                "/moviegraph-movie.webp",
                "/moviegraph-person.webp",
            ],
            mobileScreenshots: [
                "/moviegraph-home-mobile.webp",
                "/moviegraph-genres-mobile.webp",
                "/moviegraph-movie-mobile.webp",
                "/moviegraph-person-mobile.webp",
            ],
            tech: [
                { id: "the-movie-database", Icon: SiThemoviedatabase },
                { id: "typescript", Icon: SiTypescript },
                { id: "react", Icon: SiReact },
                { id: "vite", Icon: SiVite },
                { id: "tailwind-css", Icon: SiTailwindcss },
                { id: "python", Icon: FaPython },
                { id: "fastapi", Icon: SiFastapi },
                { id: "postgresql", Icon: SiPostgresql },
                { id: "cloudflare-workers", Icon: SiCloudflareworkers },
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
