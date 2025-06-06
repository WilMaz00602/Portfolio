"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import "./resources/style/main-content.scss";

import InfoCard from "./components/info-card";
import NavButtons from "./components/nav-buttons";
import About from "./components/about"
import Resume from "./components/resume"
import Projects from "./components/projects/projects";

const tabs = [
  { key: "about", component: About },
  { key: "resume", component: Resume },
  { key: "projects", component: Projects },
];

export default function Home() {
    const [activeTab, setActiveTab] = useState(tabs[0].key);
    const [prevTab, setPrevTab] = useState(null);
    const [direction, setDirection] = useState("right");

    const activeIndex = tabs.findIndex(tab => tab.key === activeTab);
    const prevIndex = prevTab ? tabs.findIndex(tab => tab.key === prevTab) : activeIndex;

    useEffect(() => {
        if (activeTab !== prevTab && prevTab !== null) {
            setTimeout(() => setPrevTab(null), 400); // match animation duration
        }
    }, [activeTab, prevTab]);

    const handleTabChange = (key) => {
        if (key !== activeTab) {
            setDirection(tabs.findIndex(tab => tab.key === key) > activeIndex ? "left" : "right");
            setPrevTab(activeTab);
            setActiveTab(key);
        }
    };

    const ActiveComponent = tabs[activeIndex].component;
    const PrevComponent = prevTab ? tabs[prevIndex].component : null;

    return (
        <div>
            <main>
                <InfoCard />
                <div id="main-content" className="pop-in right">
                    <div className="tab-container">
                        {PrevComponent && (
                            <div
                                key={prevTab}
                                className={`tab-animating slide-out-${direction}`}
                                style={{ position: "absolute", width: "100%", height: "100%" }}
                                onAnimationEnd={() => setPrevTab(null)}
                            >
                                <PrevComponent id={prevTab} />
                            </div>
                        )}
                        <div key={activeTab} className={`tab-animating slide-in-${direction}`}>
                            <ActiveComponent id={activeTab} />
                        </div>
                    </div>
                    <NavButtons 
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={handleTabChange} />
                </div>
            </main>
        </div>
    );
}
