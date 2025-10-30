import { Link } from "react-router";
import { ArrowRightIcon, PlayIcon } from "@heroicons/react/24/outline";

export default function NeuviemeCallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/4 right-0 w-48 h-48 bg-white/10 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}></div>
        <div
          className="absolute bottom-0 left-1/3 w-32 h-32 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à Exceller en
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              9e Année Fondamentale ?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Rejoignez des milliers d'élèves qui transforment leur parcours
            scolaire grâce à notre plateforme innovante et complète.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">
              2500+
            </div>
            <div className="text-sm text-white/80">Élèves Actifs</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">
              150+
            </div>
            <div className="text-sm text-white/80">Examens</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/20"></div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">96%</div>
            <div className="text-sm text-white/80">Réussite</div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            to="/neuvieme"
            className="group inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
            <span className="mr-3">Commencer Maintenant</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <button className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105">
            <PlayIcon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
            <span>Voir la Démo</span>
          </button>
        </div>

        {/* Features highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-3xl mb-3">{highlight.icon}</div>
              <h3 className="font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-white/80 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <p className="text-white/70 mb-4">
            Approuvé par des milliers d'élèves et parents
          </p>
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-400 text-xl">
                ⭐
              </span>
            ))}
            <span className="text-white/90 ml-2 font-medium">4.9/5</span>
          </div>

          {/* Testimonial */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white/90 italic mb-4">
              "Grâce à cette plateforme, j'ai réussi mon examen de 9e AF avec
              mention. Les exercices sont variés et les explications très
              claires !"
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Marie L.</div>
                <div className="text-white/70 text-sm">
                  Élève de 9e AF, Promotion 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const highlights = [
  {
    icon: "🚀",
    title: "Démarrage Rapide",
    description: "Commencez immédiatement avec nos exercices guidés",
  },
  {
    icon: "📱",
    title: "Accès Mobile",
    description: "Étudiez partout, à tout moment sur tous vos appareils",
  },
  {
    icon: "👥",
    title: "Support Communautaire",
    description: "Bénéficiez de l'aide de la communauté et des experts",
  },
];
