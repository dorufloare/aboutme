import Header from "./partials/Header";
import TitleSection from "./partials/TitleSection";
import Head from "next/head";
import AboutMeSection from "./partials/AboutMeSection";
import AchievementsSection from "./partials/AchievementsSection";
import SkillsSection from "./partials/SkillsSection";
import ContactSection from "./partials/ContactSection";

export default function Home() {
  return (
    <div>
       <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Header />
      <TitleSection />
      <AboutMeSection /> 
      <AchievementsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
} 