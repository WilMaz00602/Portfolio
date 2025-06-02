import styles from "../resources/style/resume.scss";

export default function Resume() {
    return (
        <article className="resume-article">
            <header>
                <h1>RESUME</h1>
            </header>
            <hr className="accent1" />
            <section>
                <h2>Professional Summary</h2>
                <p>
                    Versatile Software Engineering student talented at contributing to team developed projects. Collaborative designer of useful solutions and modular software systems. Knowledgeable in programming and extremely passionate about technology. Energetic personality that is motivated by learning.
                </p>
            </section>
            <section>
                <h2>Work History</h2>
                <div>
                    <h3>Mach85 Inc. - Software Developer</h3>
                    <p>Frederiction, NB (Hybrid)</p>
                    <span></span>
                </div>
                <div>
                    <h3>Mach85 Inc. - Software Developer</h3>
                    <p>Frederiction, NB (Hybrid)</p>
                    <span>01/2024 - 08/2024</span>
                    <ul>
                        <li>Contributed to the full-stack development of a 3D desktop application.</li>
                        <li> Applied an engineering approach to solve one-off problems both internally and for clients.</li>
                        <li>Leveraged software testing experience to assist in application and algorithm unit and integration testing.</li>
                    </ul>
                </div>
                <div>
                    <h3>PLATO Tech - Software Tester</h3>
                    <p>Frederiction, NB (Remote)</p>
                    <span>01/2023 - 04/2023</span>
                    <ul>
                        <li>Utilized hybrid testing methods for B2B contract quality assurance.</li>
                        <li>Led a team to create an operational MS PowerApps app for tracking testing employees skills across various categories and industries.</li>
                        <li>Utilized web development knowledge to outperform peers in exploratory testing for a potential client, identifying a significantly higher number of defects.</li>
                    </ul>
                </div>
                <div>
                    <h3>PLATO Tech - Software Tester</h3>
                    <p>Frederiction, NB (Remote)</p>
                    <span>05/2022 - 08/2022</span>
                    <ul>
                        <li>Created accurate and successful test scripts to manage automated testing of certain products and features.</li>
                        <li>Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.</li>
                        <li>Took initial concepts and developed project plans.</li>
                        <li>Delivered a performance-driven and user-centric website that assists test developers from project planning to execution.</li>
                    </ul>
                </div>
                <div>
                    <h3>Loblaws (RASS) - Produce Clerk</h3>
                    <p>Frederiction, NB (Remote)</p>
                    <span>12/2017 - Present</span>
                    <ul>
                        <li>Pleasantly greeted customers and provided prompt and courteous service.</li>
                        <li>Received and unloaded new items upon delivery and checked products for damage, quality, and order accuracy.</li>
                        <li>Helped customers complete purchases by moving heavy items, collecting payments, and bagging purchases.</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2>Education</h2>
                <div>
                    <h3>University of New Brunswick</h3>
                    <p>Frederiction, NB</p>
                    <span>Expected Graduation: 05/2026</span>
                    <ul>
                        <li>Bachelor of Science in Software Engineering</li>
                        <li><strong>Dean's List</strong> [2021-Present] with a <strong>4.0/4.3 GPA</strong></li>
                        <li>Relevant Coursework: Software Engineering, Web Development, Database Management, Algorithms and Data Structures</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2>Skills</h2>
                <div>
                    <ul>
                        <li>Programming Languages: JavaScript, Python, Java, C++</li>
                        <li>Web Development: HTML, CSS, React, Node.js</li>
                        <li>Database Management: SQL, MongoDB</li>
                        <li>Tools and Technologies: Git, Docker, Jenkins</li>
                        <li>Soft Skills: Team Collaboration, Problem Solving, Communication</li>
                    </ul>
                </div>
                
            </section>
            <button className="promenent-button">Download CV</button>
        </article>
        
    )
}