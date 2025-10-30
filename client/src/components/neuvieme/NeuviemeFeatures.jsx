import {
  BookOpenIcon,
  ClockIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function NeuviemeFeatures() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Excellez en 9e Année Fondamentale
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez tous les avantages de notre plateforme spécialement conçue
            pour les élèves de 9e AF. Nous vous accompagnons vers la réussite !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-4 rounded-xl mr-4 ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent
                        className={`h-8 w-8 ${feature.iconColor}`}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <div className="flex items-center text-sm text-indigo-600 font-medium">
                    <span className="mr-2">En savoir plus</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
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
    title: "Examens Officiels 9e AF",
    description:
      "Accédez à une collection complète d'examens officiels des années précédentes spécifiquement pour la 9e Année Fondamentale.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: ClockIcon,
    title: "Entraînement Chronométré",
    description:
      "Pratiquez dans les conditions réelles d'examen avec notre système de chronométrage intégré pour une préparation optimale.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: AcademicCapIcon,
    title: "Programme 9e AF Complet",
    description:
      "Toutes les matières du programme officiel de 9e AF : français, mathématiques, sciences, histoire-géographie et plus encore.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: ChartBarIcon,
    title: "Suivi de Performance",
    description:
      "Analysez vos résultats par matière et par chapitre pour identifier vos points forts et axes d'amélioration.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: CheckCircleIcon,
    title: "Corrections Détaillées",
    description:
      "Bénéficiez d'explications complètes et pédagogiques pour chaque question, avec des conseils méthodologiques.",
    bgColor: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: UserGroupIcon,
    title: "Préparation Collaborative",
    description:
      "Rejoignez une communauté d'élèves de 9e AF et partagez vos expériences et conseils de révision.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];
