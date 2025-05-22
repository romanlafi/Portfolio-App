import {useEffect} from "react";
import {FaTimes} from "react-icons/fa";
import LanguageToggle from "../LanguageToggle.jsx";
import {useTranslation} from "react-i18next";

export default function MobileOverlayMenu({ open, onClose, activeSection, menuItems }) {
    const { t } = useTranslation();

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full z-50 transition-transform duration-300 ease-in-out ${
                open ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{ backgroundColor: 'var(--color-eerie)' }}
        >
            <div className="flex justify-between items-center py-6 px-6 border-b border-white/10">
                <h2 className="text-xl font-bold tracking-widest uppercase text-[var(--color-beige)]">{t('nav.menu')}</h2>
                <button
                    onClick={onClose}
                    className="bg-[var(--color-powder)] rounded-full p-2 hover:bg-[var(--color-beige)] transition-colors duration-200"
                >
                    <FaTimes className="text-[var(--color-eerie)] text-xl" />
                </button>
            </div>

            <nav className="flex flex-col gap-6 pt-12 pb-10 px-6 text-[var(--color-powder)] text-lg font-medium">
                <a
                    href="#home"
                    onClick={onClose}
                    className={`hover:text-[var(--color-beige)] hover:scale-105 transition-all duration-200 uppercase ${
                        activeSection === "home" ? "text-[var(--color-beige)] font-bold" : ""
                    }`}
                >
                    ROMÁN
                </a>
                {menuItems.map((item, i) => (
                    <a
                        key={i}
                        href={item.href}
                        onClick={onClose}
                        className={`hover:text-[var(--color-beige)] hover:scale-105 transition-all duration-200 uppercase ${
                            activeSection === item.href.substring(1) ? "text-[var(--color-beige)] font-bold" : ""
                        }`}
                    >
                        {item.label}
                    </a>
                ))}
                <div className="absolute bottom-6 left-35 w-full flex justify-center">
                    <LanguageToggle />
                </div>
            </nav>
        </div>
    );
}