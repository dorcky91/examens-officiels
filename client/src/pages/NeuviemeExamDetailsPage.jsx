import Examen from "@/components/neuvieme/details/Examen";
import QuickLinks from "@/components/neuvieme/details/QuickLinks";
import Hero from "@/components/neuvieme/Hero";

export default function NeuviemeExamDetailsPage() {
  return (
    <>
      <Hero />
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 space-y-10 lg:space-y-0">
            <Examen />
            <QuickLinks />
          </div>
        </section>
      </main>
    </>
  );
}
