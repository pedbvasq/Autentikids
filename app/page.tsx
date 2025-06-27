import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import WhatsAppButton from "@/components/layout/sections/whatsapp";
import { Toaster } from "sonner"; 
import Head from "next/head";
export const metadata = {
  title: "AutentiKids",
  description: "Free Shadcn landing page for developers",
  icons: {
    icon: "/favicon.ico",  // Ruta desde la carpeta public
  },

};

export default function Home() {
  return (
    <>
        <Head>
        <title>AutentiKids</title>
        <link rel="icon" href="/logo_autentikids.png" />
      </Head>
      <HeroSection />
      <FeaturesSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </>
  );
}
