import {
  CompanyIntro,
  ChatbotCTA,
  Ecosystem,
  Mission,
  Team,
  DiscoveryCTA,
  PartnersSection,
  ProcessSection,
  SolutionsSection,
  FeaturesSection,
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
      <ChatbotCTA />
      <Ecosystem />
      <Mission />
      <Team />
      <DiscoveryCTA /> 
     </SiteLayout>
    </div>
  );
}
