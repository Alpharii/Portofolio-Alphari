"use client";

import img from "../../public/bintang.jpeg";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
    return (
        <div className="flex flex-col md:flex-row mx-5 mt-16 max-w-screen-xl md:ml-64 xl:ml-64">
            <img src={img.src} alt="bintang" className="rounded-3xl w-64 h-64 md:w-96 md:h-96 mx-auto md:ml-0" /> {/* Adjusted sizes for responsiveness */}
            <div className="flex flex-col ml-0 md:ml-10 mt-5 md:mt-0"> {/* Align items vertically */}
                <TypeAnimation
                    sequence={[
                        'Hi Im Muhammad Bintang Alphari',
                        1000,
                        'Im a Front End Developer',
                        1000,
                        'Im a Back End Developer',
                        1000,
                        'Im eager to learn new things',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    className="font-poppins font-bold text-3xl"
                    repeat={Infinity}
                />
                <h1 className="font-poppins font-light text-xl text-zinc-400 mt-4">
                    An ordinary person who likes learning, passionate about web development. Experienced with Javascript, Typescript, Next.js, Express.js, Vue.js, and some other cool libraries and frameworks.
                </h1>
                <h1 className="font-poppins font-medium text-2xl mt-10">
                    Let's Connect
                </h1>
                <div className="flex space-x-4 mt-2 justify-center md:justify-start"> {/* Centering on smaller screens */}
                    <button>
                        <a href="https://github.com/Alpharii" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/GitHub-black?logo=github&logoColor=white" alt="github" className="w-24 h-auto border border-gray-600 rounded-lg" />
                        </a>
                    </button>
                    <button>
                        <a href="https://www.linkedin.com/in/muhammadbintangalphari/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&logoColor=white" alt="linkedin" className="w-24 h-auto border border-gray-600 rounded-lg" />
                        </a>
                    </button>
                    <button>
                        <a href="https://www.instagram.com/bintangalphari" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/Instagram-E4405F?logo=instagram&logoColor=white" alt="instagram" className="w-24 h-auto border border-gray-600 rounded-lg" />
                        </a>
                    </button>
                </div>
                <button className="mt-5 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-2xl w-full md:w-96">
                    <a href="https://drive.google.com/file/d/1LAy_BgaGqgKMTgPwuA0nogO10peJLK5K/view?usp=sharing" target="_blank" download>
                        Download My CV
                    </a>
                </button>
            </div>
        </div>
    );
}
