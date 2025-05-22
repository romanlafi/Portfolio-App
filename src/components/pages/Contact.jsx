import SectionWrapper from "../SectionWrapper.jsx";
import SectionTitle from "../SectionTitle.jsx";
import {FaEnvelope, FaLinkedin, FaReact, FaWhatsapp} from "react-icons/fa";
import {SiBootstrap, SiJavascript, SiTailwindcss, SiVite} from "react-icons/si";
import TechBadge from "../TechBadge.jsx";

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <SectionTitle title="CONTÁCTAME"/>

            <div className="space-y-4 text-[var(--color-powder)] text-sm md:text-base font-mono">
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-yellow-400 text-xl"/>
                    <a
                        href="mailto:rlafitagil@gmail.com"
                        className="hover:underline text-[var(--color-moss)]"
                    >
                        rlafitagil@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-green-500 text-xl"/>
                    <a
                        href="https://wa.me/34691160995"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-[var(--color-moss)]"
                    >
                        +34 691 160 995
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <FaLinkedin className="text-blue-400 text-xl"/>
                    <a
                        href="https://www.linkedin.com/in/rlafitagil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-[var(--color-moss)]"
                    >
                        in/rlafitagil
                    </a>
                </div>
            </div>

            {/* Footer Tech Stack */}
            <div className="mt-12">
                <p className="text-sm font-bold uppercase mb-4">
                    Este sitio está desarrollado con:
                </p>
                <div className="flex flex-wrap gap-2 text-sm font-semibold">
                    <TechBadge icon={FaReact} label="React" color="#61DAFB" />
                    <TechBadge icon={SiVite} label="Vite" color="#646CFF" />
                    <TechBadge icon={SiJavascript} label="JavaScript" color="#F7DF1E" />
                    <TechBadge icon={SiTailwindcss} label="Tailwind CSS" color="#06B6D4" />
                </div>
            </div>
        </SectionWrapper>
    );
}