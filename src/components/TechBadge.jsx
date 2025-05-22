const techUrls = {
    Java: "https://www.java.com/",
    Python: "https://www.python.org/",
    JavaScript: "https://www.javascript.com/",
    TypeScript: "https://www.typescriptlang.org/",
    SQL: "https://www.w3schools.com/sql/",
    ABAP: "https://www.sap.com/index.html",
    HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "Tailwind CSS": "https://tailwindcss.com/",
    Bootstrap: "https://getbootstrap.com/",
    Angular: "https://angular.io/",
    React: "https://react.dev/",
    Vite: "https://vitejs.dev/",
    Spring: "https://spring.io/",
    Hibernate: "https://hibernate.org/",
    "Node.js": "https://nodejs.org/",
    Unity: "https://unity.com/",
    Docker: "https://www.docker.com/",
    Git: "https://git-scm.com/",
    Nginx: "https://www.nginx.org/",
    Cloudflare: "https://www.cloudflare.com/",
    PostgreSQL: "https://www.postgresql.org/",
    MySQL: "https://www.mysql.com/",
    SQLite: "https://sqlite.org/",
    MongoDB: "https://www.mongodb.com/",
    Neo4j: "https://neo4j.com/",
    "IntelliJ IDEA": "https://www.jetbrains.com/idea/",
    PyCharm: "https://www.jetbrains.com/pycharm/",
    WebStorm: "https://www.jetbrains.com/webstorm/",
    "Android Studio": "https://developer.android.com/studio",
    "Visual Studio": "https://visualstudio.microsoft.com/",
    "Visual Studio Code": "https://code.visualstudio.com/",
    Postman: "https://www.postman.com/",
    Audacity: "https://www.audacityteam.org/",
    GIMP: "https://www.gimp.org/"
};

export default function TechBadge({ icon: Icon, label, color }) {
    const href = techUrls[label] || "#";

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="flex items-center gap-2 text-sm font-semibold px-2 py-1 rounded transition transform hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: color, color: "#fff" }}
        >
            <Icon className="text-base" />
            {label}
        </a>
    );
}
