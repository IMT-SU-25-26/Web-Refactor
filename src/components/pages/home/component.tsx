"use client";

import "@/styles/home.css";
import { Activity } from "@/types/db/activity";
import { LandingSection } from "./landing";
import { StudentUnionSection } from "./student-union";
import { CompetitionsSection } from "./competitions";
import { CommunityServicesSection } from "./community-services";
import { FooterSection } from "./footer";

interface HomePageProps {
  latestActivities: Activity[];
}

export function HomePage({ latestActivities }: HomePageProps) {
  return (
    <div className="overflow-x-hidden">
      <div className="h-[6vh] bg-[#F1EEE6]"></div>
      <div className="hide-initial is-visible overflow-hidden flex flex-col items-center min-h-screen w-screen max-w-screen bg-[url('background/background-paper.png')] bg-contain bg-center bg-[#F1EEE6]">
        <LandingSection />
        <StudentUnionSection />
        <CompetitionsSection />
        <CommunityServicesSection latestActivities={latestActivities} />
        <FooterSection />
      </div>
    </div>
  );
}
