"use client";

import "@/app/globals.css";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white font-poppins font-bold text-3xl">Alphari | Dev</a>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:text-black hover:bg-white px-3 py-2 rounded">Home</a>
                    <a href="#" className="text-white hover:text-black hover:bg-white px-3 py-2 rounded">Project</a>
                    <a href="#" className="text-white hover:text-black hover:bg-white px-3 py-2 rounded">Contact</a>
                    <a href= "/CV_Muhammad_Bintang_Alphari.pdf" download className="text-white hover:text-black hover:bg-white px-3 py-2 rounded">My CV</a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <a href="#" className="block mt-2 text-white hover:text-black hover:bg-white px-3 py-2 rounded">Home</a>
                    <a href="#" className="block text-white hover:text-black hover:bg-white px-3 py-2 rounded">Project</a>
                    <a href="#" className="block text-white hover:text-black hover:bg-white px-3 py-2 rounded">Contact</a>
                    <a href="/CV_Muhammad_Bintang_Alphari.pdf" download className="block text-white hover:text-black hover:bg-white px-3 py-2 rounded">My CV</a>
                </div>
            )}
        </nav>
    );
}