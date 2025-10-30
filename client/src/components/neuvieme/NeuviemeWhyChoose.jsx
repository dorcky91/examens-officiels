import { studentImages } from "@/utils/studentImages";

export default function NeuviemeWhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir Notre Programme 9e AF ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les avantages uniques qui font de notre plateforme le
            choix idéal pour réussir votre 9e Année Fondamentale.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Card 1 */}
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col rounded-2xl p-8 text-white/90 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:rotate-1"
            style={{ backgroundColor: "#f94f10" }}>
            <div className="mb-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold !text-white mb-3">
                Apprentissage Accéléré
              </h3>
            </div>
            <p className="text-sm leading-relaxed mt-auto">
              Méthodes d'enseignement innovantes spécialement adaptées au
              programme de 9e AF pour un apprentissage plus rapide et plus
              efficace.
            </p>
          </div>

          {/* Image 1 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-6 hover:scale-105 transition-all duration-300 hover:-rotate-1 hover:shadow-2xl">
            <img
              src={studentImages.collaboration.group2}
              alt="Élèves de 9e AF travaillant ensemble"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Card 2 */}
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col rounded-2xl p-8 text-white/90 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:-rotate-1"
            style={{ backgroundColor: "#3974ff" }}>
            <div className="mb-6">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold !text-white mb-3">
                Planning Personnalisé
              </h3>
            </div>
            <p className="text-sm leading-relaxed mt-auto">
              Organisez vos révisions selon votre emploi du temps avec nos
              outils de planification adaptés au rythme de la 9e AF.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col rounded-2xl p-8 text-white/90 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:rotate-1"
            style={{ backgroundColor: "#10b981" }}>
            <div className="mb-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold !text-white mb-3">
                Environnement Sécurisé
              </h3>
            </div>
            <p className="text-sm leading-relaxed mt-auto">
              Plateforme 100% sécurisée pour la gestion de vos examens et
              résultats, avec protection complète de vos données personnelles.
            </p>
          </div>

          {/* Image 2 */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-6 hover:scale-105 transition-all duration-300 hover:rotate-1 hover:shadow-2xl">
            <img
              src={studentImages.technology.online}
              alt="Technologie d'apprentissage pour 9e AF"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Card 4 */}
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-3 flex flex-col rounded-2xl p-8 text-white/90 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:-rotate-1"
            style={{ backgroundColor: "#8b5cf6" }}>
            <div className="mb-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold !text-white mb-3">
                Objectifs Ciblés
              </h3>
            </div>
            <p className="text-sm leading-relaxed mt-auto">
              Accompagnement personnalisé avec des objectifs adaptés à votre
              niveau et aux exigences spécifiques de la 9e AF.
            </p>
          </div>
        </div>

        {/* Additional benefits section */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Une Préparation Complète pour la 9e AF
              </h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Rejoignez les Meilleurs
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Plus de <strong>96%</strong> de nos élèves réussissent leurs
                    examens de 9e AF
                  </p>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Note moyenne de nos élèves
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "Contenu Actualisé",
    description:
      "Programme toujours à jour avec les dernières réformes du ministère de l'éducation.",
  },
  {
    title: "Suivi Personnalisé",
    description:
      "Accompagnement individuel adapté à vos forces et faiblesses en 9e AF.",
  },
  {
    title: "Communauté Active",
    description:
      "Échangez avec d'autres élèves de 9e AF et partagez vos expériences.",
  },
  {
    title: "Support Technique",
    description:
      "Assistance disponible 7j/7 pour tous vos besoins techniques et pédagogiques.",
  },
];
