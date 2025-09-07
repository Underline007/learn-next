import {
  CompanyIntro,
  PartnersSection,
  ProcessSection,
  SolutionsSection,
  FeaturesSection,
  EcoSystemSection,
  MembersSection,
  MissionSection,
  AboutUsSection
} from "@/components/sections";
import { SiteLayout } from '@/components/layout/SiteLayout';


export default function Home() {
  return (
    <div>
     <SiteLayout>
      <CompanyIntro />
      <PartnersSection />
      <SolutionsSection />
      <ProcessSection />
      <FeaturesSection />
      <EcoSystemSection/>
      <MissionSection/>
      <MembersSection/>
      <AboutUsSection/>
     </SiteLayout>
    </div>
  );
}
