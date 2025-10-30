import { useClasseByName } from "@/hooks/classes/queries";
import Hero from "@/components/neuvieme/Hero";
import Courses from "@/components/neuvieme/Courses";
import NeuviemeFeatures from "@/components/neuvieme/NeuviemeFeatures";
import NeuviemeStats from "@/components/neuvieme/NeuviemeStats";
import NeuviemeWhyChoose from "@/components/neuvieme/NeuviemeWhyChoose";
import Loading from "@/ui/Loading";
import Error from "@/ui/Error";

export default function NeuviemePage() {
  //#region Hooks
  const { classe, isPending, isError } = useClasseByName("9e");
  //#endregion

  if (isPending) return <Loading />;

  if (isError)
    return (
      <Error
        title="Erreur de chargement"
        message="Impossible de charger les données de la classe."
      />
    );

  return (
    <div className="min-h-screen">
      <Hero
        classe={classe}
        id="hero-neuvieme"
        subheading="Préparez-vous pour votre réussite en 9e Année Fondamentale avec nos ressources complètes"
      />

      <NeuviemeFeatures />
      <Courses matieres={classe?.matieres || []} url="neuvieme" />
      <NeuviemeStats />
      <NeuviemeWhyChoose />
    </div>
  );
}
