"use client"
import Image from "next/image";

interface ButtonProps {
    input: string;
}

interface SpanProps {
    input: string
}

interface ProjectCardProps {
    liveLink: string;
    title: string;
    description: string;
    buttons: string[];
}

interface TransitionProps {
    id: string;
    input: string;
}

interface ContactProps {
    link: string;
    src: string;
    alt:string;
}

export const Contact:React.FC<ContactProps> = ({link,src,alt}) => {
    return (
        <div>
            <a href={link} target="_blank">
                        <Image src={src} width={25} height={25} alt={alt} className="" />
                    </a>
        </div>
    )
}

export const Span:React.FC<SpanProps> = ({input}) => {
    return (
        <span className="text-slate-300">{input}</span>
    )
}

export const Button: React.FC<ButtonProps> = ({ input }) => {
    return (
        <div>
            <button className="bg-emerald-900 text-cyan-400 rounded-full px-2 py-1.5 text-sm" >{input}</button>
        </div>
    )
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ liveLink, title, description, buttons }) => {
    return (
        <div>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <div className="group hover:bg-slate-800 p-4 mt-12 cursor-pointer rounded-lg flex flex-col justify-center items-center md:flex-row md:items-start">
                    <div>
                        <div className="text-white group-hover:text-emerald-600">{title}</div>
                        <div className="text-slate-400">
                            {description}
                            <div className="flex flex-wrap space-x-2 mt-2">
                                {buttons.map((btn, index) => (
                                    <div key={index} className="mt-2"><Button input={btn} /></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export const Transition: React.FC<TransitionProps> = ({ id, input }) => {
    return (
        <div className="mt-4 flex cursor-pointer flex-row items-center group ">
            <hr className="w-8 mr-4 transition-all duration-300 group-hover:w-16" />
            <a href={id} className="group-hover:text-white transition-all duration-300">{input}</a>
        </div>
    );
};
