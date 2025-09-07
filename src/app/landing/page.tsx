import {
    AboutUsSection,
    CompanyIntro, 
    EcoSystemSection, 
    FeaturesSection, 
    MembersSection,
    MissionSection, 
    PartnersSection, 
    ProcessSection, 
    SolutionsSection 
    } from "@/components/sections";


export default function LandingPage() {
  return (
   
      <div>
        <CompanyIntro />
        <PartnersSection />
        <SolutionsSection />
        <ProcessSection />
        <FeaturesSection />
        <EcoSystemSection />
        <MissionSection />
        <MembersSection />
        <AboutUsSection />
      </div>
   
  );
}