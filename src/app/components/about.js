import styles from "../resources/style/about.scss";

import FrontendDevelopmentIcon from "../resources/images/frontend_development";
import SoftwareTestingIcon from "../resources/images/software_testing";
import EmbeddedSystemsIcon from "../resources/images/embedded_systems";
import AlgorithmDesignIcon from "../resources/images/algorithms";

export default function About() {
    return (
        <article>
            <header>
                <h1>ABOUT ME</h1>
            </header>
            <hr className="accent1" />
            <section>
                <p>
                    I am a software engineering student at the University of New Brunswick, with a passion for leveraging technology to automate and optimize tasks through functional interfaces. 
                    I enjoy solving complex problems and learning new technologies as it makes me more versatile and refines my core development principles. 
                    I am always eager to take on new challenges and grow as a developer in my path to create impactful products that enable everyday people to get more done.
                </p>
            </section>
            <section>
                <h2>What I Do</h2>
                <div className="work-row">
                    <div className="work-item">
                        <FrontendDevelopmentIcon className="work-image" />
                        <div>
                            <h3>Frontend Development</h3>
                            <p>Professional experience developing frontend applications designed for web and desktop environments.</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <SoftwareTestingIcon className="work-image" />
                        <div>
                            <h3>Software Testing</h3>
                            <p>Automated and manual testing experience for web and desktop applications. I have a talent for breaking things!</p>
                        </div>
                    </div>
                </div>
                <div className="work-row">
                    <div className="work-item">
                        <EmbeddedSystemsIcon className="work-image" />
                        <div>
                            <h3>Embedded Systems</h3>
                            <p>Practice in electronics design and embedded systems development and keen on doing more.</p>
                        </div>
                    </div>
                    <div className="work-item">
                        <AlgorithmDesignIcon className="work-image" />
                        <div>
                            <h3>Algorithm Design</h3>
                            <p>Experience in writing data processing and algebraic algorithms to develop custom backend solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Skills</h2>
            </section>
        </article>
    )
}
