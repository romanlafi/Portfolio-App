import SectionWrapper from "../SectionWrapper.jsx";
import SectionTitle from "../SectionTitle.jsx";
import {FaEnvelope, FaLinkedin, FaReact, FaWhatsapp} from "react-icons/fa";
import {SiJavascript, SiTailwindcss, SiVite} from "react-icons/si";
import TechBadge from "../TechBadge.jsx";
import {useTranslation} from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <SectionWrapper id="contact">
            <SectionTitle title={t('contact.title')}/>

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
                    {t('contact.stack_notice')}
                </p>
                <div className="flex flex-wrap gap-2 text-sm font-semibold">
                    <TechBadge icon={FaReact} label="React" color="#4CB7D8" />
                    <TechBadge icon={SiVite} label="Vite" color="#646CFF" />
                    <TechBadge icon={SiJavascript} label="JavaScript" color="#E4C700" />
                    <TechBadge icon={SiTailwindcss} label="Tailwind CSS" color="#06B6D4" />
                </div>
                <p className="text-xs text-[var(--color-powder)] mt-4 max-w-md">
                    {t('contact.rpi_notice')}
                </p>
            </div>
        </SectionWrapper>
    );
}