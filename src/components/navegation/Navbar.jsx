import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileOverlayMenu from "./MobileOverlayMenu.jsx";
import LanguageToggle from "/src/components/LanguageToggle.jsx";
import {useTranslation} from "react-i18next";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const { t } = useTranslation();

    const menuItems = [
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.portfolio'), href: '#portfolio' },
        { label: t('nav.education'), href: '#education' },
        { label: t('nav.skills'), href: '#skills' },
        { label: t('nav.contact'), href: '#contact' },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll('section[id], main#home');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsOpen(false);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* DESKTOP SIDEBAR */}
                <aside
                    className="hidden md:flex fixed top-0 left-0 w-64 h-screen flex-col items-center justify-center px-4 z-50"
                    style={{ backgroundColor: 'var(--color-eerie)', color: 'var(--color-powder)' }}
                >
                    <img
                        src="/logo.png"
                        alt="Avatar"
                        className="w-45 h-45 mb-6 object-contain"
                    />

                    <a
                        href="#home"
                        className={`text-2xl font-bold tracking-widest uppercase transition mb-8 ${
                            activeSection === 'home'
                                ? 'text-[var(--color-beige)]'
                                : 'text-[var(--color-moss)]'
                        }`}
                    >
                        ROMÁN
                    </a>

                    <nav className="space-y-4 text-center text-sm font-mono tracking-wide uppercase w-full">
                        {menuItems.map((item, i) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <a
                                    key={i}
                                    href={item.href}
                                    className={`block transition-all duration-200 hover:text-[var(--color-beige)] ${
                                        isActive ? 'text-[var(--color-beige)] font-bold' : 'text-[var(--color-moss)]'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </nav>
                    <div className="absolute bottom-3">
                        <LanguageToggle />
                    </div>
                </aside>

                {/* MOBILE HEADER - FIJO */}
                <header
                    className="md:hidden fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 z-50"
                    style={{ backgroundColor: 'var(--color-eerie)', color: 'var(--color-powder)' }}
                >
                    <a href="#home">
                        <img
                            src="/icon_small.png"
                            alt="Logo"
                            className="w-14 h-14 object-contain"
                        />
                    </a>

                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                        <GiHamburgerMenu />
                    </button>
                </header>

                <MobileOverlayMenu
                    key={activeSection}
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    activeSection={activeSection}
                    menuItems={menuItems}
                />
        </>
    );
}