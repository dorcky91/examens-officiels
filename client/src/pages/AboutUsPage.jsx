import Hero from "@/components/about-us/Hero";
import Mission from "@/components/about-us/Mission";
import Team from "@/components/about-us/Team";
import Sponsors from "@/components/home/Sponsors";

export default function AboutUsPage() {
  return (
    <>
      <Hero />
      <main>
        <Mission />
        <Team />
        <Sponsors />
      </main>
    </>
  );
}
