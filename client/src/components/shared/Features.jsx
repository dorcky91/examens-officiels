import {
  BookOpenIcon,
  ClockIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";

export default function Features({ classType = "neuvieme" }) {
  const config = CLASS_CONFIGS[classType];
  const features = getFeatures(classType, config);

  return (
    <section className={`py-20 bg-gradient-to-br ${config.theme.bgGradient}`}>
      <div className="px-6 lg:px-9">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {config.content.title}
          </h2>
          <p className="text-lg text-gray-600">{config.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Background decoration */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${config.theme.decorationGradient} rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-4 rounded-xl mr-4 ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent
                        className={`h-8 w-8 ${feature.iconColor}`}
                      />
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-3 group-hover:${config.theme.hoverColor} transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* <Link
                    to={`/features/${classType}`}
                    className="absolute inset-0"></Link>

                  <div
                    className={`flex items-center text-sm ${config.theme.linkColor} font-medium`}>
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
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CLASS_CONFIGS = {
  neuvieme: {
    theme: {
      bgGradient: "from-indigo-50 via-white to-purple-50",
      decorationGradient: "from-indigo-100 to-purple-100",
      hoverColor: "text-indigo-600",
      linkColor: "text-indigo-600",
    },
    content: {
      title: "Excellez en 9e Année Fondamentale",
      description:
        "Découvrez tous les avantages de notre plateforme spécialement conçue pour les élèves de 9e AF. Nous vous accompagnons vers la réussite !",
      level: "9e AF",
      subjects:
        "français, mathématiques, sciences, histoire-géographie et plus encore",
    },
  },
  ns4: {
    theme: {
      bgGradient: "from-purple-50 via-white to-pink-50",
      decorationGradient: "from-purple-100 to-pink-100",
      hoverColor: "text-purple-600",
      linkColor: "text-purple-600",
    },
    content: {
      title: "Excellez en Niveau Secondaire 4",
      description:
        "Découvrez tous les avantages de notre plateforme spécialement conçue pour les élèves de NS4. Nous vous accompagnons vers la réussite !",
      level: "NS4",
      subjects:
        "mathématiques, sciences, français, anglais, sciences sociales et plus encore",
    },
  },
};

function getFeatures(classType, config) {
  const baseFeatures = [
    {
      icon: BookOpenIcon,
      title: `Examens Officiels ${config.content.level}`,
      description: `Accédez à une collection complète d'examens officiels des années précédentes spécifiquement pour ${
        classType === "neuvieme"
          ? "la 9e Année Fondamentale"
          : "le Niveau Secondaire 4"
      }.`,
    },
    {
      icon: ClockIcon,
      title: "Entraînement Chronométré",
      description:
        "Pratiquez dans les conditions réelles d'examen avec notre système de chronométrage intégré pour une préparation optimale.",
    },
    {
      icon: AcademicCapIcon,
      title: `Programme ${config.content.level} Complet`,
      description: `Toutes les matières du programme officiel de ${config.content.level} : ${config.content.subjects}.`,
    },
    {
      icon: ChartBarIcon,
      title: "Suivi de Performance",
      description:
        "Analysez vos résultats par matière et par chapitre pour identifier vos points forts et axes d'amélioration.",
    },
    {
      icon: CheckCircleIcon,
      title: "Corrections Détaillées",
      description:
        "Bénéficiez d'explications complètes et pédagogiques pour chaque question, avec des conseils méthodologiques.",
    },
    {
      icon: UserGroupIcon,
      title: "Préparation Collaborative",
      description: `Rejoignez une communauté d'élèves de ${config.content.level} et partagez vos expériences et conseils de révision.`,
    },
  ];

  // Colores específicos para cada tipo
  const colorSchemes = {
    neuvieme: [
      { bgColor: "bg-blue-100", iconColor: "text-blue-600" },
      { bgColor: "bg-green-100", iconColor: "text-green-600" },
      { bgColor: "bg-purple-100", iconColor: "text-purple-600" },
      { bgColor: "bg-orange-100", iconColor: "text-orange-600" },
      { bgColor: "bg-teal-100", iconColor: "text-teal-600" },
      { bgColor: "bg-pink-100", iconColor: "text-pink-600" },
    ],
    ns4: [
      { bgColor: "bg-purple-100", iconColor: "text-purple-600" },
      { bgColor: "bg-pink-100", iconColor: "text-pink-600" },
      { bgColor: "bg-indigo-100", iconColor: "text-indigo-600" },
      { bgColor: "bg-orange-100", iconColor: "text-orange-600" },
      { bgColor: "bg-teal-100", iconColor: "text-teal-600" },
      { bgColor: "bg-rose-100", iconColor: "text-rose-600" },
    ],
  };

  return baseFeatures.map((feature, index) => ({
    ...feature,
    ...colorSchemes[classType][index],
  }));
}
