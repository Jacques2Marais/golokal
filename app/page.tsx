import { BusinessCategorySearch } from "@/components/business-category-search";
import { HeroSubtitle, HeroTitle } from "@/components/typography";
import { Search } from "lucide-react";

function HomeHero () {
  return (
    <>
      <section className="flex flex-col items-center justify-center lg:py-72 md:py-56 py-32 gap-12 bg-secondary">
        <video playsInline autoPlay muted loop poster="/main-video-poster.jpeg" className="absolute w-full h-full brightness-75 blur-[2px]">
          {/* <source src="polina.webm" type="video/webm" /> */}
          <source src="/main-video-comp.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-5 items-center relative">
          <HeroTitle>Lorem ipsum dolor sit amet</HeroTitle>
          <HeroSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur, nunc in porta eleifend.</HeroSubtitle>
        </div>

        <BusinessCategorySearch className="relative text-white" includeIcon />
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
      <HomeHero />
    </>
  );
}
