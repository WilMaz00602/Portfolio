import styles from "../../resources/style/projects.scss";
import ProjectTile from "./project-tile";

const projects = [
    {
        name: "Example Project1",
        description: "This is an example project description.1",
        link: "https://example.com"
    },
    {
        name: "Example Project2",
        description: "This is an example project description.2",
        link: "https://example.com"
    },
    {
        name: "Example Project3",
        description: "This is an example project description.3",
        link: "https://example.com"
    },
    {
        name: "Example Project4",
        description: "This is an example project description.4",
        link: "https://example.com"
    },
    {
        name: "Example Project5",
        description: "This is an example project description.5",
        link: "https://example.com"
    },
    {
        name: "Example Project6",
        description: "This is an example project description.6",
        link: "https://example.com"
    },
    {
        name: "Example Project7",
        description: "This is an example project description.7",
        link: "https://example.com"
    }
];

export default function Projects() {
    return (
        <article>
            <header>
                <h1>PROJECTS</h1>
            </header>
            <hr className="accent1" />
            <section>
                <p className="center-text">
                    My best work is under NDA, but here are some of my personal projects!
                </p>
            </section>
            <section>
                <div className="projects-container">
                    {projects.map((project, idx) => (
                        <ProjectTile key={idx} project={project} />
                    ))}
                </div>
            </section>
        </article>
    );
}
