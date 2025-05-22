export default function SectionWrapper({ id, children, maxWidth="max-w-6xl", scrollMargin="" }) {
    return (
        <section
            id={id}
            className={`min-h-screen flex items-center px-4 py-12 md:py-20 md:px-16 ${scrollMargin}`}
        >
            <div className={`w-full ${maxWidth} flex flex-col`}>
                {children}
            </div>
        </section>
    );
}