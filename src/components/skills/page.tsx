"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function TechStack() {
  useEffect(() => {
    const techIcons = document.querySelector(".tech-icons") as HTMLElement;
    const totalWidth = techIcons.scrollWidth; // Total panjang dari semua ikon
    const containerWidth = document.querySelector(".tech-container")?.clientWidth || 0; // Lebar container yang terlihat
    const scrollDistance = totalWidth - containerWidth; // Jarak scroll yang diperlukan

    console.log("Total Width:", totalWidth);
    console.log("Container Width:", containerWidth);
    console.log("Scroll Distance:", scrollDistance);

    if (scrollDistance > 0) {
      gsap.to(".tech-icons", {
        x: `-${scrollDistance}px`, // Geser elemen keluar dari layar ke kiri
        duration: 10, // Durasi untuk 1 kali animasi
        ease: "linear", // Animasi tanpa perlambatan
        repeat: -1, // Ulangi animasi tanpa batas
        modifiers: {
          x: (x) => {
            const currentX = parseFloat(x);
            return `${currentX % totalWidth}px`; // Kembali ke kanan setelah mencapai batas
          },
        },
      });
    }
  }, []);

  return (
    <div className="relative overflow-hidden h-20 bg-gray-800 flex items-center tech-container">
      <div className="tech-icons whitespace-nowrap flex items-center space-x-8">
        <img
          src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
          className="w-12 h-12"
          alt="HTML5"
        />
        <img
          src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
          className="w-12 h-12"
          alt="CSS3"
        />
        <img
          src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
          className="w-12 h-12"
          alt="JavaScript"
        />
        <img
          src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
          className="w-12 h-12"
          alt="TypeScript"
        />
        <img
          src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
          className="w-12 h-12"
          alt="Figma"
        />
        <img
          src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
          className="w-12 h-12"
          alt="Tailwind"
        />
        <img
          src="https://img.icons8.com/?size=100&id=63208&format=png&color=000000"
          className="w-12 h-12"
          alt="Ubuntu"
        />
        <img
          src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
          className="w-12 h-12"
          alt="Github"
        />
        <img
          src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
          className="w-12 h-12"
          alt="React"
        />
        <img
          src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
          className="w-12 h-12"
          alt="NextJS"
        />
        <img
          src="https://img.icons8.com/?size=100&id=BUnExfsRs3CW&format=png&color=000000"
          className="w-12 h-12"
          alt="VueJS"
        />
        <img
          src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
          className="w-12 h-12"
          alt="Express.js"
        />
        <img
          src="https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000"
          className="w-12 h-12"
          alt="MySql"
        />
        <img
          src="https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000"
          className="w-12 h-12"
          alt="Supabase"
        />
        <img
          src="https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000"
          className="w-12 h-12"
          alt="Prisma Orm"
        />
        <img
          src="https://img.icons8.com/?size=100&id=44442&format=png&color=000000"
          className="w-12 h-12"
          alt="Golang"
        />
        <img
          src="https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000"
          className="w-12 h-12"
          alt="Postman"
        />
        <img
          src="https://img.icons8.com/?size=100&id=Pxe6MGswB8pX&format=png&color=000000"
          className="w-12 h-12"
          alt="EJS"
        />
        <img
          src="https://img.icons8.com/?size=100&id=dJjTWMogzFzg&format=png&color=000000"
          className="w-12 h-12"
          alt="Vite"
        />
        {/* Tambahan icon jika diperlukan */}
      </div>
    </div>
  );
}
