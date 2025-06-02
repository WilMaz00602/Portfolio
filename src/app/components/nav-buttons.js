import "../resources/style/nav-buttons.scss";

export default function NavButtons({ activeSection, setActiveSection }) {
    return (
        <div id="nav-buttons">
            <button 
                id="about-nav"
                onClick={() => setActiveSection("about")}
                className={activeSection === "about" ? "active" : ""}
                >About</button>
            <button 
                id="resume-nav"
                onClick={() => setActiveSection("resume")}
                className={activeSection === "resume" ? "active" : ""}
                >Resume</button>
            <button 
                id="projects-nav"
                onClick={() => setActiveSection("projects")}
                className={activeSection === "projects" ? "active" : ""}
                >Projects</button>
            <button 
                id="blog-nav"
                onClick={() => setActiveSection("blog")}
                className={activeSection === "blog" ? "active" : ""}
                >Blog</button>
        </div>
    )
}