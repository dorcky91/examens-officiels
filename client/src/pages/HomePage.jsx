import Hero from "@/components/home/Hero";
import Neuvieme from "@/components/home/Neuvieme";
import NS4 from "@/components/home/NS4";
import WhyUs from "@/components/home/WhyUs";
import Sponsors from "@/components/home/Sponsors";
import Stats from "@/components/home/Stats";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <Stats />
        <Neuvieme />
        <NS4 />
        <Sponsors />
        <WhyUs />
      </main>
    </>
  );
};
