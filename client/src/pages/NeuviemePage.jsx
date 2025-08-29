import Courses from "@/components/neuvieme/Courses";
import Hero from "@/components/neuvieme/Hero";

export default function NeuviemePage() {
  return (
    <>
      <Hero />
      <main>
        <Courses grade="neuvieme" />
      </main>
    </>
  );
}
