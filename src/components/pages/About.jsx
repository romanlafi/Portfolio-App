import SectionTitle from "../SectionTitle.jsx";
import SectionWrapper from "../SectionWrapper.jsx";

export default function About() {
    return (
        <SectionWrapper id="about" maxWidth="max-w-3xl">
                <SectionTitle title="SOBRE MÍ"/>
                <p className="text-powder mb-4">
                    Empecé mi trayectoria profesional como Gestor Cultural hace más de 14 años. La llegada de la pandemia me llevó a volcarme al mundo web.
                </p>
                <p className="text-[var(--color-moss)] font-bold mb-4">
                    ACTUALMENTE ESTUDIO Y BUSCO AMPLIAR MI CAMPO LABORAL EN EL MUNDO DEL DESARROLLO WEB.
                </p>
                <p className="text-sm text-[var(--color-beige)]">
                    ¿Quieres contactarme? Escríbeme a{' '}
                    <a href="mailto:rlafitagil@gmail.com" className="underline text-[var(--color-moss)]">rlafitagil@gmail.com</a>
                </p>
        </SectionWrapper>
    );
}