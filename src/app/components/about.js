import styles from "../resources/style/about.scss";

export default function About() {
    return (
        <article>
            <header>
                <h1>ABOUT ME</h1>
            </header>
            <hr className="accent1" />
            <section>
                <p>
                    I am a software engineering student at the University of New Brunswick, with 
                </p>
            </section>
            <section>
                <h2>What I Do</h2>
                <div className="work-row">
                    <div className="work-item">
                        <h3>Frontend Development</h3>
                        <p>Professional experience developing frontend applications designed for web and desktop environments</p>
                    </div>
                    <div className="work-item">
                        <h3>Software Testing</h3>
                        <p>Automated and manual testing experience for web and desktop applications</p>
                    </div>
                </div>
                <div className="work-row">
                    <div className="work-item">
                        <h3>Embedded Systems</h3>
                        <p>Practice in electronics design and embedded systems development and keen on doing more</p>
                    </div>
                    <div className="work-item">
                        <h3>Algorithm Design</h3>
                        <p>Experience in writing data processing and algebraic algorithms to develop custom backend solutions</p>
                    </div>
                </div>
            </section>
            <section>
                <h2>Skills</h2>
            </section>
        </article>
    )
}
