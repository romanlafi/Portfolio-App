import {useTranslation} from "react-i18next";
import esFlag from '/src/assets/flags/es.svg';
import gbFlag from '/src/assets/flags/uk.svg';

export default function LanguageToggle() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLang === 'es' ? 'en' : 'es';
        void i18n.changeLanguage(newLang);
    };

    const flag = currentLang === 'es' ? gbFlag : esFlag;
    const alt = currentLang === 'es' ? 'English' : 'Español';

    return (
        <button
            onClick={toggleLanguage}
            title={alt}
            className="p-0 border-none bg-transparent focus:outline-none"
        >
            <img
                src={flag}
                alt={alt}
                className="w-6 h-6 hover:scale-110 transition rounded-sm"
            />
        </button>
    );
}