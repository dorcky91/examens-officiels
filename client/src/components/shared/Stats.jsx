import { useState, useEffect } from "react";

export default function Stats({ classType = "neuvieme" }) {
  const [isVisible, setIsVisible] = useState(false);
  const config = CLASS_CONFIGS[classType];
  const stats = getStats(classType, config);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`py-20 bg-gradient-to-r ${CLASS_CONFIGS.theme.bgGradient} relative overflow-hidden`}>
      <div className="px-6 lg:px-9">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-36 -translate-y-36"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold !text-white mb-4">
              {config.content.title}
            </h2>
            <p className="text-lg text-white/90">
              {config.content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>

                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter
                      target={stat.number}
                      isVisible={isVisible}
                      suffix={stat.suffix}
                      delay={index * 200}
                    />
                  </div>

                  <p className="text-white/90 font-medium text-lg mb-2">
                    {stat.label}
                  </p>

                  <p className="text-white/70 text-sm">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${CLASS_CONFIGS.theme.avatarGradient} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {i === 1 ? "👨‍🎓" : i === 2 ? "👩‍🎓" : i === 3 ? "🎓" : "📚"}
                  </div>
                ))}
              </div>
              <span className="text-white font-medium">
                Rejoignez notre communauté grandissante !
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ target, isVisible, suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const increment = target / 50;
      const interval = setInterval(() => {
        setCount((prev) => {
          const next = prev + increment;
          if (next >= target) {
            clearInterval(interval);
            return target;
          }
          return Math.floor(next);
        });
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function getStats(classType, config) {
  const statsData = {
    neuvieme: [
      {
        icon: "👨‍🎓",
        number: 2500,
        suffix: "+",
        label: `Élèves de ${config.content.level}`,
        description: "Inscrits sur notre plateforme",
      },
      {
        icon: "📚",
        number: 150,
        suffix: "+",
        label: "Examens Disponibles",
        description: `Pour toutes les matières de ${config.content.level}`,
      },
      {
        icon: "⭐",
        number: 96,
        suffix: "%",
        label: "Taux de Réussite",
        description: "De nos élèves aux examens officiels",
      },
      {
        icon: "🏆",
        number: 5,
        suffix: "",
        label: "Années d'Expérience",
        description: "Dans l'accompagnement scolaire",
      },
    ],
    ns4: [
      {
        icon: "🎓",
        number: 1800,
        suffix: "+",
        label: `Élèves ${config.content.level}`,
        description: "Inscrits sur notre plateforme",
      },
      {
        icon: "📚",
        number: 120,
        suffix: "+",
        label: "Examens Disponibles",
        description: `Pour toutes les matières de ${config.content.level}`,
      },
      {
        icon: "⭐",
        number: 94,
        suffix: "%",
        label: "Taux de Réussite",
        description: "De nos élèves aux examens officiels",
      },
      {
        icon: "🏆",
        number: 6,
        suffix: "",
        label: "Années d'Expérience",
        description: `Dans l'accompagnement ${config.content.level}`,
      },
    ],
  };

  return statsData[classType];
}

const CLASS_CONFIGS = {
  theme: {
    bgGradient: "from-indigo-600 via-purple-600 to-pink-600",
    avatarGradient: "from-yellow-400 to-orange-500",
  },
  neuvieme: {
    content: {
      title: "Des Résultats qui Parlent",
      description:
        "Rejoignez des milliers d'élèves qui ont transformé leur parcours scolaire grâce à notre plateforme dédiée à la 9e AF.",
      level: "9e AF",
    },
  },
  ns4: {
    content: {
      title: "Des Résultats Exceptionnels",
      description:
        "Rejoignez des milliers d'élèves qui ont transformé leur parcours scolaire grâce à notre plateforme dédiée au NS4.",
      level: "NS4",
    },
  },
};
