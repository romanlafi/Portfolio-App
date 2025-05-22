import SectionWrapper from "../SectionWrapper.jsx";
import SectionTitle from "../SectionTitle.jsx";
import {useTranslation} from "react-i18next";
import {FaCalendarAlt} from "react-icons/fa";

export default function Education() {
    const { t } = useTranslation();

    return (
        <SectionWrapper id="education" scrollMargin="scroll-mt-15 md:scroll-mt-0">
            <SectionTitle title={t("education.title")} />

            <div className="space-y-10">
                {/* DAM */}
                <div>
                    <h3 className="text-lg font-bold text-[var(--color-beige)]">
                        {t("education.dam.title")}
                    </h3>
                    <p className="text-[var(--color-powder)] italic">
                        {t("education.dam.school")} — Zaragoza
                    </p>
                    <p className="text-sm text-[var(--color-powder)] flex items-center gap-2">
                        <FaCalendarAlt className="text-[var(--color-beige)]" /> 09/2021 – 06/2023
                    </p>
                    <a
                        href="https://www.e-itaca.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-[var(--color-moss)]"
                    >
                        www.e-itaca.es
                    </a>
                </div>

                {/* Curso Java y Angular */}
                <div>
                    <h3 className="text-lg font-bold text-[var(--color-beige)]">
                        {t("education.javaangular.title")}
                    </h3>
                    <p className="text-[var(--color-powder)] italic">
                        {t("education.javaangular.school")}
                    </p>
                    <p className="text-sm text-[var(--color-powder)] flex items-center gap-2">
                        <FaCalendarAlt className="text-[var(--color-beige)]" /> 12/2024
                    </p>
                    <a
                        href="https://formadoresit.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-[var(--color-moss)]"
                    >
                        formadoresit.es
                    </a>
                </div>

                {/* SAP ABAP FCT */}
                <div>
                    <h3 className="text-lg font-bold text-[var(--color-beige)]">
                        {t("education.sap.title")}
                    </h3>
                    <p className="text-[var(--color-powder)] italic">
                        Accenture España — Zaragoza
                    </p>
                    <p className="text-sm text-[var(--color-powder)] flex items-center gap-2">
                        <FaCalendarAlt className="text-[var(--color-beige)]" /> 03/2023 – 06/2023
                    </p>
                    <a
                        href="https://www.accenture.com/es-es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-[var(--color-moss)]"
                    >
                        www.accenture.com
                    </a>
                </div>

                {/* Violín */}
                <div>
                    <h3 className="text-lg font-bold text-[var(--color-beige)]">
                        {t("education.violin.title")}
                    </h3>
                    <p className="text-[var(--color-powder)] italic">
                        {t("education.violin.school")} — Zaragoza
                    </p>
                    <p className="text-sm text-[var(--color-powder)] flex items-center gap-2">
                        <FaCalendarAlt className="text-[var(--color-beige)]" /> 09/2017 – 05/2021
                    </p>
                    <a
                        href="https://csma.es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-[var(--color-moss)]"
                    >
                        www.csma.es
                    </a>
                </div>

                {/* Cambridge C1 */}
                <div>
                    <h3 className="text-lg font-bold text-[var(--color-beige)]">
                        {t("education.c1.title")}
                    </h3>
                    <p className="text-[var(--color-powder)] italic">
                        Cambridge Assessment English
                    </p>
                    <p className="text-sm text-[var(--color-powder)] flex items-center gap-2">
                        <FaCalendarAlt className="text-[var(--color-beige)]" /> 2025
                    </p>
                    <a
                        href="https://www.cambridgeenglish.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-[var(--color-moss)]"
                    >
                        www.cambridgeenglish.org
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
}