import React from "react";
import { ProjectCard } from "./Units";
import { Span } from "./Units";
import Image from "next/image";

export const Col2 = () => {
    const buttons1 = ["ReactJs", "Context-API", "NodeJS", "Express", "OpenAi Api" ];
    const buttons2 = [" React","Nodejs","Express","MongoDB","Tailwindcss"];
    const buttons3 = ["HTML", "CSS"];
    
    interface Icon {
        src: string;
        alt: string;
    }
    const icons: Icon[] = [
        { src: "javascript.svg", alt: "JavaScript" },
        { src: "react.svg", alt: "React" },
        { src: "nodejs.svg", alt: "Node.js" },
        { src: "mongodb-icon.svg", alt: "MongoDB" },
        { src: "/github.svg", alt: "GitHub" },
        
        { src:"/scss.png", alt: "SCSS" },
        { src: "git-icon.svg", alt: "Git" },
        { src: "tailwindcss-icon.svg", alt: "Tailwind CSS" },        
        { src: "html-5.svg", alt: "HTML5" },
        { src: "css-3.svg", alt: "CSS3" },
    ];
    return (
        <div className="font-mono mx-4 md:mr-36 ">
            <div id="about" className="mt-24 text-slate-400">
                I&apos;m a passionate and dedicated developer. My expertise lies in the <Span input="MERN stack"/>. With a strong foundation in these technologies, I have successfully built three full-stack projects, showcasing my ability to develop robust and scalable web applications.
                <br /><br />
                I thrive on solving complex problems and continuously improving my skills. My journey in web development has equipped me with the knowledge and experience to create efficient and user-friendly solutions. I am always eager to learn new technologies and take on challenging projects.
                <br /><br />
                Whether it&apos;s developing dynamic front-end interfaces or designing efficient back-end architectures, I bring a meticulous and innovative approach to my work. I am committed to delivering high-quality code and collaborating effectively with teams to achieve project goals.
            </div>

            <div id="skills" className="mt-24 p-4 rounded-lg hover:bg-slate-800">
                <div className="grid grid-cols-5 items-center gap-4 cursor-pointer">
                    {icons.map((icon, index) => (
                        <Image key={index} className="w-12 h-20" src={icon.src} alt={icon.alt} width={48} height={80} />
                    ))}
                </div>
            </div>

            <div className="mt-24 cursor-pointer text-white hover:text-emerald-600">
                <a href="https://drive.google.com/file/d/1FRSx_RcERP1Y8wWwjs2iQqgqC2Gc2bGR/view" target="_blank"> View Full Resume </a>
            </div>

            <div id="projects" className="mt-24">

                <ProjectCard
                    liveLink="https://chattgptaii.vercel.app/"
                    title="ChatGPT-AI-Tool"
                    description="The project aims to create an interactive chatbot powered by OpenAI's ChatGPT,
                    utilizing the free API to provide users with a conversational AI experience. This
                    chatbot can be integrated into various platforms like websites, applications, or
                    messaging services to assist users with information, answer questions, and
                    provide conversational support."
                    buttons={buttons1}
                />
                
                <ProjectCard
                    liveLink="https://timeezone.vercel.app/"
                    title="Time Zone"
                    description="Time Zone is a leading e-commerce platform specializing in the sale of watches.
                    Our journey began with a passion for horology and a vision to make luxury
                    timepieces accessible to a global audience"
                    buttons={buttons2}
                />
                
                <ProjectCard
                    liveLink="https://crowncarbon.vercel.app/"
                    title="Crown Carbon Brush"
                    description="Build a cool user interface for a local client to their business.
                    Designed to CodeConverted Figma Design to React Component."
                    buttons={buttons3}
                />
            </div>

            <div className="my-24 text-slate-400 text-sm">
                Coded in <a href="https://code.visualstudio.com/"><Span input="Visual Studio Code"/></a> by yours truly. Built with <a href="https://nextjs.org/"><Span input="Next.js"/></a> and <a href="https://tailwindcss.com/"><Span input="Tailwind CSS"/></a>, deployed with <a href="https://vercel.com/"><span className="text-slate-300">Vercel.</span></a>
            </div>
        </div>
    );
};



