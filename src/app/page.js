"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import "./resources/style/main-content.scss";

import InfoCard from "./components/info-card";
import NavButtons from "./components/nav-buttons";
import About from "./components/about"
import Resume from "./components/resume"

export default function Home() {
    const [activeSection, setActiveSection] = useState("about");

    return (
        <div>
            <main>
                <InfoCard />
                <div id="main-content" className="pop-in">
                    {activeSection === "about" ? (
                        <div className="tab-container">
                            <div className="slide-in-left">
                                <About id="about" />
                            </div>
                            <div className="slide-out-right">
                                <Resume id="resume"/>
                            </div>
                        </div>
                    ) : (
                        <div className="tab-container">
                            <div className="slide-out-left">
                                <About id="about" />
                            </div>
                            <div className="slide-in-right">
                                <Resume id="resume"/>
                            </div>
                        </div>
                    )}
                    <NavButtons activeSection={activeSection} setActiveSection={setActiveSection} />
                </div>
            </main>
        </div>
    );
}
