import {
  BookOpenIcon,
  ClockIcon,
  ChartBarIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

export default function Features() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="px-6 lg:px-9">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pourquoi choisir notre plateforme ?
          </h2>
          <p className="text-lg text-gray-600">
            Nous offrons les outils les plus avancés pour votre réussite
            académique. Découvrez ce qui nous rend uniques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: BookOpenIcon,
    title: "Examens Authentiques",
    description:
      "Accédez aux vrais examens officiels des années précédentes pour une préparation réaliste.",
  },
  {
    icon: ClockIcon,
    title: "Simulation en Temps Réel",
    description:
      "Pratiquez avec des conditions d'examen réelles, timer inclus pour une expérience authentique.",
  },
  {
    icon: ChartBarIcon,
    title: "Suivi des Progrès",
    description:
      "Analysez vos performances et identifiez vos points forts et axes d'amélioration.",
  },
  {
    icon: AcademicCapIcon,
    title: "Guides d'Étude",
    description:
      "Ressources pédagogiques complètes créées par des experts pour chaque matière.",
  },
  {
    icon: CheckCircleIcon,
    title: "Corrections Détaillées",
    description:
      "Obtenez des explications complètes pour chaque réponse, correcte ou incorrecte.",
  },
  {
    icon: LightBulbIcon,
    title: "Conseils d'Experts",
    description:
      "Bénéficiez de stratégies et astuces d'enseignants expérimentés pour maximiser vos résultats.",
  },
];
