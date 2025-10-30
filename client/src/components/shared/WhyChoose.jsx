import { studentImages } from "@/utils/studentImages";

export default function WhyChoose({ classType = "neuvieme" }) {
  const config = CLASS_CONFIGS[classType];
  const benefits = getBenefits(classType);

  return (
    <section className="py-20 bg-white">
      <div className="px-6 lg:px-9">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {config.content.title}
          </h2>
          <p className="text-lg text-gray-600">{config.content.description}</p>
        </div>

        <div className="grid grid-cols-12 sm:gap-5 space-y-5 sm:space-y-0">
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: config.theme.cardColors[0] }}>
            <div>
              <div className="text-2xl">🚀</div>
              <h4 className="font-semibold !text-white">
                {config.content.cardTitle1}
              </h4>
            </div>
            <p className="text-sm leading-relaxed mt-auto">
              {config.content.cardText1}
            </p>
          </div>
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: config.theme.cardColors[1] }}>
            <div>
              <div className="text-2xl">🎯</div>
              <h3 className="font-semibold !text-white">
                {config.content.cardTitle2}
              </h3>
            </div>
            <p className="text-sm leading-relaxed mt-auto">
              {config.content.cardText2}
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <img
              src={studentImages.collaboration.group3}
              alt={config.content.imageAlt}
              style={{ height: "340px" }}
              loading="lazy"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                {config.content.sectionTitle}
              </h3>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 ${config.theme.numberBgColor} rounded-lg flex items-center justify-center`}>
                      <span
                        className={`${config.theme.numberTextColor} font-bold text-sm`}>
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
              <div
                className={`absolute inset-0 bg-gradient-to-br ${config.theme.cardGradient} rounded-2xl rotate-3`}></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {config.content.ctaTitle}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Plus de <strong>{config.content.successRate}</strong> de nos
                    élèves réussissent leurs {config.content.examText}
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

function getBenefits(classType) {
  const benefitsData = {
    neuvieme: [
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
    ],
    ns4: [
      {
        title: "Contenu Académique Rigoureux",
        description:
          "Programme avancé toujours à jour avec les standards académiques les plus élevés.",
      },
      {
        title: "Mentorat Spécialisé",
        description:
          "Accompagnement par des experts du niveau NS4 pour maximiser votre potentiel.",
      },
      {
        title: "Réseau d'Excellence",
        description:
          "Connectez-vous avec des étudiants ambitieux et partagez des stratégies de réussite.",
      },
      {
        title: "Support Académique Avancé",
        description:
          "Assistance spécialisée pour tous vos défis académiques et méthodologiques.",
      },
    ],
  };

  return benefitsData[classType];
}

const CLASS_CONFIGS = {
  neuvieme: {
    theme: {
      cardColors: ["#f94f10", "#8b5cf6"],
      numberBgColor: "bg-indigo-100",
      numberTextColor: "text-indigo-600",
      cardGradient: "from-indigo-400 to-purple-500",
    },
    content: {
      title: "Pourquoi Choisir Notre Programme 9e AF ?",
      description:
        "Découvrez les avantages uniques qui font de notre plateforme le choix idéal pour réussir votre 9e Année Fondamentale.",
      level: "9e AF",
      sectionTitle: "Une Préparation Complète pour la 9e AF",
      cardTitle1: "Apprentissage Accéléré",
      cardText1:
        "Méthodes d'enseignement innovantes spécialement adaptées au programme de 9e AF pour un apprentissage plus rapide et plus efficace.",
      cardTitle2: "Objectifs Ciblés",
      cardText2:
        "Accompagnement personnalisé avec des objectifs adaptés à votre niveau et aux exigences spécifiques de la 9e AF.",
      imageAlt: "Élèves de 9e AF travaillant ensemble",
      ctaTitle: "Rejoignez les Meilleurs",
      successRate: "96%",
      examText: "examens de 9e AF",
    },
  },
  ns4: {
    theme: {
      cardColors: ["#8b5cf6", "#ec4899"],
      numberBgColor: "bg-purple-100",
      numberTextColor: "text-purple-600",
      cardGradient: "from-purple-400 to-pink-500",
    },
    content: {
      title: "Pourquoi Choisir Notre Programme NS4 ?",
      description:
        "Découvrez les avantages uniques qui font de notre plateforme le choix idéal pour réussir votre Niveau Secondaire 4.",
      level: "NS4",
      sectionTitle: "Une Préparation Excellence pour NS4",
      cardTitle1: "Apprentissage Avancé",
      cardText1:
        "Méthodes d'enseignement sophistiquées spécialement adaptées au programme de NS4 pour un apprentissage approfondi et efficace.",
      cardTitle2: "Excellence Ciblée",
      cardText2:
        "Accompagnement personnalisé avec des objectifs d'excellence adaptés aux exigences élevées du niveau NS4.",
      imageAlt: "Élèves de NS4 travaillant ensemble",
      ctaTitle: "Rejoignez l'Excellence",
      successRate: "94%",
      examText: "examens de NS4",
    },
  },
};
