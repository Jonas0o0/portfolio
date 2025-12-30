'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

export default function Home() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    return (
        <main>
            <Header />
            <About />
            <Skills />
            <Experience />
            <Education />
        </main>
    );
}
