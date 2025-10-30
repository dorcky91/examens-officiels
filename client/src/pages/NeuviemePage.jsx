import { useClasseByName } from "@/hooks/classes/queries";
import Hero from "@/components/shared/Hero";
import Courses from "@/components/shared/Courses";
import Features from "@/components/shared/Features";
import Stats from "@/components/shared/Stats";
import WhyChoose from "@/components/shared/WhyChoose";
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
    <>
      <Hero
        classe={classe}
        id="hero-neuvieme"
        subheading="Préparez-vous pour votre réussite en 9e Année Fondamentale avec nos ressources complètes"
      />

      <main>
        <Features classType="neuvieme" />
        <Courses matieres={classe?.matieres || []} url="neuvieme" />
        <Stats classType="neuvieme" />
        <WhyChoose classType="neuvieme" />
      </main>
    </>
  );
}
