import Image from "next/image";

const mountains =  "/mountains.webp";

export default function ProjectTile({ project }) {
    return (
        <div className="project-tile">
            <div className="project-image-container">
                <img
                    src={project.image || mountains}
                    alt={project.name}
                    className="project-image"
                />
            </div>
            <h3>{project.name}</h3>
            <span>{project.description}</span>
        </div>
    );
}