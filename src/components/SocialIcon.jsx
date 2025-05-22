import {useState} from "react";

export default function SocialIcon({ href, icon: Icon, hoverColor }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: hovered ? hoverColor : 'var(--color-eerie)',
                color: 'var(--color-powder)',
            }}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ease-in-out"
        >
            <Icon />
        </a>
    );
}