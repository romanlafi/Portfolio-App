import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import {useEffect, useRef, useState} from "react";

export default function ProjectCard({ title, image, screenshots, mobileScreenshots, tech, github, demo }) {
    const { t } = useTranslation();
    const images = screenshots?.length ? screenshots : [image];
    const [activeImage, setActiveImage] = useState(0);
    const [hovered, setHovered] = useState(false);
    const touchStart = useRef(null);

    useEffect(() => {
        if (!hovered || images.length < 2) return undefined;

        const interval = window.setInterval(() => {
            setActiveImage((current) => (current + 1) % images.length);
        }, 1800);

        return () => window.clearInterval(interval);
    }, [hovered, images.length]);

    const resetSlideshow = () => {
        setHovered(false);
        setActiveImage(0);
    };

    const handleTouchEnd = (event) => {
        const start = touchStart.current;
        touchStart.current = null;
        const touch = event.changedTouches[0];
        if (!start || !touch) return;

        const horizontalDistance = touch.clientX - start.x;
        const verticalDistance = touch.clientY - start.y;
        if (Math.abs(horizontalDistance) < 40 || Math.abs(horizontalDistance) <= Math.abs(verticalDistance)) return;

        const direction = horizontalDistance < 0 ? 1 : -1;
        setActiveImage((current) => (current + direction + images.length) % images.length);
    };

    return (
        <div
            className="group w-full bg-[var(--color-eerie)] rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300"
            onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setHovered(true);
            }}
            onPointerLeave={(event) => {
                if (event.pointerType === "mouse") resetSlideshow();
            }}
        >
            <div
                className={`relative w-full ${images.length > 1 ? "mb-10 md:mb-0" : ""} ${mobileScreenshots?.length ? "h-[min(410px,50svh)] bg-black/20 md:aspect-auto md:h-80 md:max-h-none" : "h-48 sm:h-80"}`}
                onTouchStart={(event) => {
                    if (event.touches.length !== 1) {
                        touchStart.current = null;
                        return;
                    }
                    const touch = event.touches[0];
                    touchStart.current = { x: touch.clientX, y: touch.clientY };
                }}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={() => { touchStart.current = null; }}
            >
                {images.map((src, index) => (
                    <picture
                        key={src}
                        aria-hidden={index !== activeImage}
                        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${index === activeImage ? "opacity-100" : "opacity-0"}`}
                    >
                        {mobileScreenshots?.[index] && (
                            <source media="(min-width: 768px)" srcSet={src} />
                        )}
                        {mobileScreenshots?.[index] && (
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-cover bg-center opacity-40 blur-xl scale-110 md:hidden"
                                style={{ backgroundImage: `url("${mobileScreenshots[index]}")` }}
                            />
                        )}
                        {mobileScreenshots?.[index] && (
                            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50 md:hidden" />
                        )}
                        <img
                            src={mobileScreenshots?.[index] || src}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            alt={t('portfolio.screenshot_alt', { project: title, number: index + 1 })}
                            className={`relative h-full w-full ${mobileScreenshots?.length ? "object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] md:object-cover md:drop-shadow-none" : "object-cover"}`}
                        />
                    </picture>
                ))}
                {images.length > 1 && (
                    <div className="absolute inset-x-0 top-full flex h-10 items-center justify-center opacity-100 transition-opacity duration-300 md:top-auto md:bottom-3 md:h-auto md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                        <div className="flex md:gap-1.5">
                            {images.map((src, index) => (
                                <button
                                    key={src}
                                    type="button"
                                    aria-label={t('portfolio.show_screenshot', { project: title, number: index + 1 })}
                                    aria-pressed={index === activeImage}
                                    onClick={() => setActiveImage(index)}
                                    className="relative flex h-10 w-8 cursor-pointer items-center justify-center rounded-md bg-transparent p-0 hover:bg-white/5 after:absolute after:-inset-1 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--color-beige)] md:h-1.5 md:w-auto md:rounded-none md:after:-inset-y-3 md:after:-inset-x-1 md:hover:bg-transparent"
                                >
                                    <span className={`h-1.5 rounded-full transition-all duration-300 ${index === activeImage ? "w-4 bg-[var(--color-beige)] md:w-5 md:bg-white" : "w-1.5 bg-[var(--color-moss)]/50 md:bg-white/50"}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="project-title text-lg sm:text-xl font-bold mb-3">{title}</h3>

                <div className="flex flex-wrap gap-3 text-xl sm:text-2xl mb-4 text-[var(--color-moss)]">
                    {tech.map((technology) => {
                        const Icon = technology.Icon;
                        return <Icon key={technology.id} />;
                    })}
                </div>

                <div className="flex flex-col sm:flex-row sm:gap-6 gap-2 text-[var(--color-powder)]">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[var(--color-beige)] transition"
                    >
                        <FaGithub /> <span className="text-sm sm:text-base">{t('portfolio.github_link')}</span>
                    </a>
                    <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[var(--color-beige)] transition"
                    >
                        <FaExternalLinkAlt /> <span className="text-sm sm:text-base">{t('portfolio.webpage_link')}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
