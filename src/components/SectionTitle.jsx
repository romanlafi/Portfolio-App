export default function SectionTitle({ title }) {
    return (
        <h2 className="text-3xl md:text-4xl font-bold mb-7 text-[var(--color-beige)] text-left w-full uppercase">
            {title}
        </h2>
    );
}