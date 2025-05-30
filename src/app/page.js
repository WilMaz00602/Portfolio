"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import "./resources/style/main-content.scss";

import InfoCard from "./components/info-card";
import About from "./components/about"
import Resume from "./components/resume"

export default function Home() {
    return (
        <div>
            <main>
              <InfoCard/>
              <div id="main-content" className="pop-in">
                <About />
                <Resume />
              </div>
            </main>
        </div>
    );
}
