import Courses from "@/components/neuvieme/Courses";
import Hero from "@/components/neuvieme/Hero";
import { useClasseByName } from "@/hooks/classes/queries";

export default function NS4Page() {
  //#region Hooks
  const { classe, isPending, isError } = useClasseByName("ns4");
  //#endregion

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <>
      <Hero classe={classe} />
      <main>
        <Courses matieres={classe.matieres} url="ns4" />
      </main>
    </>
  );
}
