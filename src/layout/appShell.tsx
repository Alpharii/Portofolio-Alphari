import Navbar from "./navbar";
import "@/app/globals.css";

export default function AppShell() {
    return (
        <div>
            <Navbar />
            <hr className="h-px bg-gray-100 border-0 dark:bg-gray-700"></hr>
        </div>
    );
}