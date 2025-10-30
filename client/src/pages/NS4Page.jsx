import { useClasseByName } from "@/hooks/classes/queries";
import Hero from "@/components/shared/Hero";
import Courses from "@/components/shared/Courses";
import Features from "@/components/shared/Features";
import Stats from "@/components/shared/Stats";
import WhyChoose from "@/components/shared/WhyChoose";
import Loading from "@/ui/Loading";
import Error from "@/ui/Error";

export default function NS4Page() {
  //#region Hooks
  const { classe, isPending, isError } = useClasseByName("ns4");
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
        id="hero-ns4"
        subheading="Préparez-vous pour votre réussite en NS4 avec nos ressources complètes et nos méthodes d'excellence"
      />

      <main>
        <Features classType="ns4" />
        <Courses matieres={classe?.matieres || []} url="ns4" />
        <Stats classType="ns4" />
        <WhyChoose classType="ns4" />
      </main>
    </>
  );
}
