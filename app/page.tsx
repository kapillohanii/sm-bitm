import { ActionToggle } from "@/components/action-toggle/ActionToggle";
import { HeaderMenu } from "@/components/header/HeaderMenu";
import { FooterSocial } from "@/components/footer/FooterSocial";
import { HeroImageRight } from "@/components/hero-header/HeroImageRight";
import { EventSection } from "@/sections/EventSection";
import { GallerySection } from "@/sections/GallerySection";
import { TeamSection } from "@/sections/TeamSection";



export default function Home() {
  return (
    <>
      
      <HeaderMenu />
      <HeroImageRight />
      <EventSection title="Events" />
      <GallerySection title="Gallery" />
      <TeamSection title="Meet Our Team"/>
      <FooterSocial />
      <ActionToggle />
    </>
  );
}
