import "@/app/globals.css";
import HomePage from "@/components/home/page";
import AboutPage from "@/components/about/page";
import SkillsPage from "@/components/skills/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <SkillsPage />
    </div>
  );
}
