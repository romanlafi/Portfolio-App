import SectionWrapper from "../SectionWrapper.jsx";
import SectionTitle from "../SectionTitle.jsx";
import {
    FaCloudflare,
    FaCss3Alt, FaDatabase,
    FaDocker,
    FaGitAlt,
    FaHtml5,
    FaNodeJs,
    FaPython,
    FaReact
} from "react-icons/fa";
import {
    SiAndroidstudio,
    SiAngular, SiAudacity,
    SiBootstrap, SiGimp,
    SiHibernate,
    SiIntellijidea,
    SiJavascript, SiMongodb, SiNeo4J,
    SiNginx, SiPostgresql, SiPostman,
    SiPycharm,
    SiSap,
    SiSpring,
    SiTailwindcss,
    SiTypescript,
    SiUnity, SiVite, SiWebstorm
} from "react-icons/si";
import {BiLogoVisualStudio} from "react-icons/bi";
import {GrMysql} from "react-icons/gr";
import {DiSqllite, DiVisualstudio} from "react-icons/di";
import TechBadge from "../TechBadge.jsx";
import {RiJavaLine} from "react-icons/ri";
import {useTranslation} from "react-i18next";

export default function Skills() {
    const { t } = useTranslation();

    return (
        <SectionWrapper id="skills" scrollMargin="scroll-mt-15 md:scroll-mt-0">
            <SectionTitle title={t('skills.title')} />

            <div className="mb-10">
                <h3 className="text-lg font-bold text-[var(--color-beige)] mb-4 uppercase">{t('skills.languages')} </h3>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl">
                    <TechBadge icon={RiJavaLine} label="Java" color="#f89820" />
                    <TechBadge icon={FaPython} label="Python" color="#3776AB" />
                    <TechBadge icon={SiJavascript} label="JavaScript" color="#E4C700" />
                    <TechBadge icon={SiTypescript} label="TypeScript" color="#3178C6" />
                    <TechBadge icon={FaDatabase} label="SQL" color="#e38c00" />
                    <TechBadge icon={SiSap} label="ABAP" color="#002554" />
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-lg font-bold text-[var(--color-beige)] mb-4 uppercase">{t('skills.web_dev')} </h3>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl">
                    <TechBadge icon={FaHtml5} label="HTML" color="#E34F26" />
                    <TechBadge icon={FaCss3Alt} label="CSS" color="#1572B6" />
                    <TechBadge icon={SiTailwindcss} label="Tailwind CSS" color="#06B6D4" />
                    <TechBadge icon={SiBootstrap} label="Bootstrap" color="#7952B3" />
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-lg font-bold text-[var(--color-beige)] mb-4 uppercase">{t('skills.frameworks')} </h3>

                <h4 className="text-sm font-semibold text-[var(--color-powder)] mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl mb-4">
                    <TechBadge icon={SiAngular} label="Angular" color="#DD0031" />
                    <TechBadge icon={FaReact} label="React" color="#4CB7D8" />
                    <TechBadge icon={SiVite} label="Vite" color="#646CFF" />
                </div>

                <h4 className="text-sm font-semibold text-[var(--color-powder)] mb-2">Backend</h4>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl mb-4">
                    <TechBadge icon={SiSpring} label="Spring" color="#6DB33F" />
                    <TechBadge icon={SiHibernate} label="Hibernate" color="#59666C" />
                    <TechBadge icon={FaNodeJs} label="Node.js" color="#339933" />
                </div>

                {/* Engines */}
                <h4 className="text-sm font-semibold text-[var(--color-powder)] mb-2">Engines</h4>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl">
                    <TechBadge icon={SiUnity} label="Unity" color="#222C37" />
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-lg font-bold text-[var(--color-beige)] mb-4 uppercase">{t('skills.devops')} </h3>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl">
                    <TechBadge icon={FaDocker} label="Docker" color="#2496ED" />
                    <TechBadge icon={FaGitAlt} label="Git" color="#F05032" />
                    <TechBadge icon={SiNginx} label="Nginx" color="#009639" />
                    <TechBadge icon={FaCloudflare} label="Cloudflare" color="#F38020" />
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-lg font-bold text-[var(--color-beige)] mb-4 uppercase">{t('skills.ddbb')} </h3>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl">
                    <TechBadge icon={SiPostgresql} label="PostgreSQL" color="#336791" />
                    <TechBadge icon={GrMysql} label="MySQL" color="#00758F" />
                    <TechBadge icon={DiSqllite} label="SQLite" color="#003B57" />
                    <TechBadge icon={SiMongodb} label="MongoDB" color="#47A248" />
                    <TechBadge icon={SiNeo4J} label="Neo4j" color="#008CC1" />
                </div>
            </div>

            <div className="mb-10">
                <h3 className="text-lg font-bold text-[var(--color-beige)] mb-4">{t('skills.ides')} </h3>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl">
                    <TechBadge icon={SiIntellijidea} label="IntelliJ IDEA" color="#FD4F8C" />
                    <TechBadge icon={SiPycharm} label="PyCharm" color="#21d789" />
                    <TechBadge icon={SiWebstorm} label="WebStorm" color="#1DBED7" />
                    <TechBadge icon={SiAndroidstudio} label="Android Studio" color="#4faf53" />
                    <TechBadge icon={DiVisualstudio} label="Visual Studio" color="#5C2D91" />
                    <TechBadge icon={BiLogoVisualStudio} label="Visual Studio Code" color="#007ACC" />
                    <TechBadge icon={SiPostman} label="Postman" color="#FF6C37" />
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-[var(--color-beige)] mb-4 uppercase">{t('skills.multimedia')} </h3>
                <div className="flex flex-wrap gap-4 text-3xl sm:text-4xl">
                    <TechBadge icon={SiAudacity} label="Audacity" color="#0000CC" />
                    <TechBadge  icon={SiGimp} label="GIMP" color="#5C5543" />
                </div>
                <p className="text-xs text-[var(--color-powder)] mt-3">
                    {t('skills.multimedia_comment')}
                </p>
            </div>
        </SectionWrapper>
    );
}