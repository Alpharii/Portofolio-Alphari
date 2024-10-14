import man from "../../public/man.png";
import programming from "../../public/programming.png";

export default function AboutPage() {
    return (
        <div className="mt-52 mb-32 px-4 sm:px-8 lg:px-16">
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold font-poppins">About Me</h1>
                <img src={man.src} alt="logo" className="w-10 h-10 ml-5" />
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-20 mt-20">
                <img src={programming.src} className="w-52 h-52 object-cover mb-10 -mt-7 sm:hidden lg:hidden xl:hidden 2xl:hidden" />
                <div className="block max-w-2xl p-5 px-10 bg-white border border-gray-200 rounded-xl shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 font-poppins font-normal text-xl sm:text-base">
                    <h1>Hey there! I'm Muhammad Bintang Alphari. You can call me Bintang. I'm a 17-year-old spirited person who likes learning. Located in Palembang, I'm a graduate student from SMKN 2 Palembang.</h1>
                    <h1 className="mt-2">I'm proficient in frontend development with JavaScript, TypeScript, Vue.js, and Next.js. I'm also exploring backend development with Node.js and Express.</h1>
                    <h1 className="mt-2">My hobby is coding and learning new things.</h1>
                </div>
                <img src={programming.src} className="w-52 h-52 object-cover mt-4 sm:mt-0 hidden md:block lg:block xl:block 2xl:block" alt="Programming" />
            </div>
        </div>
    );
}
