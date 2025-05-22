import {FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import {FaXTwitter} from "react-icons/fa6";
import {Typewriter} from "react-simple-typewriter";
import SocialIcon from "../SocialIcon.jsx";
import {useTranslation} from "react-i18next";
import SectionWrapper from "../SectionWrapper.jsx";

export default function Home() {
    const { t } = useTranslation();
    const typewriterLines = t('home.typewriter', { returnObjects: true });

    return (
        <SectionWrapper id="home">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span style={{ color: 'var(--color-moss)' }}>ROMÁN</span>{' '}
                    <span style={{ color: 'var(--color-beige)' }}>LAFITA</span>
                </h1>

                <p className="mt-2 text-yellow-300 text-sm md:text-base mono">
                    <Typewriter
                        words={typewriterLines}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={40}
                        delaySpeed={2000}
                    />
                </p>

                <p className="mt-4 text-lg font-mono text-powder tracking-wide uppercase">
                    {t('home.greeting')}
                </p>

                <p className="mt-2 text-sm" style={{ color: 'var(--color-beige)' }}>
                    {t('home.email_intro')}{' '}
                    <a
                        href="mailto:rlafitagil@gmail.com"
                        className="underline"
                        style={{ color: 'var(--color-moss)' }}
                    >
                        rlafitagil@gmail.com
                    </a>
                </p>

                <a
                    href="/CV.pdf"
                    download
                    className="inline-block mt-6 px-6 py-2 bg-[var(--color-moss)] text-[var(--color-powder)] font-bold rounded-lg shadow-md hover:bg-[var(--color-eerie)] transition-colors duration-300"
                >
                    {t('home.cv')}
                </a>

                <div className="flex gap-4 mt-8 text-xl md:text-2xl">
                    <SocialIcon href="https://wa.me/34691160995" icon={FaWhatsapp} hoverColor="#25D366" />
                    <SocialIcon href="https://www.linkedin.com/in/rlafitagil" icon={FaLinkedinIn} hoverColor="#0077B5" />
                    <SocialIcon href="https://github.com/romanlafi" icon={FaGithub} hoverColor="#333" />
                    <SocialIcon href="https://x.com/romanlafi" icon={FaXTwitter} hoverColor="#000000" />
                    <SocialIcon href="https://instagram.com/romanlafi" icon={FaInstagram} hoverColor="#e4405f" />
                </div>
            </div>
        </SectionWrapper>
    );
}