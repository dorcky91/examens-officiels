import { Link } from "react-router";
import {
  PencilSquareIcon,
  ChartBarIcon,
  BookOpenIcon,
  AcademicCapIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function QuickActions() {
  return (
    <section className="py-20">
      <div className="px-6 lg:px-9">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Accès rapide aux fonctionnalités
          </h2>
          <p className="text-lg text-gray-600">
            Choisissez l'action que vous souhaitez effectuer pour commencer
            immédiatement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Link
                key={index}
                to={action.link}
                className={`group ${action.color} ${action.textColor} rounded-xl p-6 
                          transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <IconComponent className="h-8 w-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold !text-white">
                      {action.title}
                    </h3>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </div>

                  <div className="flex items-center space-x-2 mt-auto">
                    <span className="text-sm font-medium">Commencer</span>
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional stats or info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Plus de <span className="font-semibold text-blue-600">10,000</span>{" "}
            examens complétés cette semaine
          </p>
        </div>
      </div>
    </section>
  );
}

const actions = [
  {
    title: "Passer un examen",
    description: "Commencez immédiatement un test d'évaluation",
    icon: PencilSquareIcon,
    link: "/essai",
    color: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-white",
  },
  {
    title: "Voir mes résultats",
    description: "Analysez vos performances et progrès",
    icon: ChartBarIcon,
    link: "/statistiques",
    color: "bg-green-600 hover:bg-green-700",
    textColor: "text-white",
  },
  {
    title: "Explorer les matières",
    description: "Parcourez toutes les matières disponibles",
    icon: BookOpenIcon,
    link: "/matieres",
    color: "bg-purple-600 hover:bg-purple-700",
    textColor: "text-white",
  },
  {
    title: "Guides d'étude",
    description: "Accédez aux ressources pédagogiques",
    icon: AcademicCapIcon,
    link: "/guides",
    color: "bg-orange-600 hover:bg-orange-700",
    textColor: "text-white",
  },
];
