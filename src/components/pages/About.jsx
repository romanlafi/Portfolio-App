import SectionTitle from "../SectionTitle.jsx";
import SectionWrapper from "../SectionWrapper.jsx";
import {useTranslation} from "react-i18next";

export default function About() {
    const { t } = useTranslation();

    return (
        <SectionWrapper id="about" maxWidth="max-w-3xl">
                <SectionTitle title={t('about.title')}/>
                <p className="text-powder mb-4">
                    {t('about.p1')}
                </p>
                <p className="text-[var(--color-moss)] font-bold mb-4 uppercase">
                    {t('about.p2')}
                </p>
                <p className="text-sm text-[var(--color-beige)]">
                    {t('about.p3')}{' '}
                    <a href="mailto:rlafitagil@gmail.com" className="underline text-[var(--color-moss)]">rlafitagil@gmail.com</a>
                </p>
        </SectionWrapper>
    );
}