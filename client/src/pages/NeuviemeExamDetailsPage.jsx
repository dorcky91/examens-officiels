import Examen from "@/components/neuvieme/details/Examen";
import QuickLinks from "@/components/neuvieme/details/QuickLinks";
import Hero from "@/components/neuvieme/Hero";
import { useParams } from "react-router-dom";

export default function NeuviemeExamDetailsPage() {
  const { courseName } = useParams();

  //#region Hooks
  //#endregion

  return (
    <>
      {/* <Hero /> */}
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 space-y-10 lg:space-y-0">
            <Examen courseName={courseName} />
            <QuickLinks name="9e" url="neuvieme" />
          </div>
        </section>
      </main>
    </>
  );
}
