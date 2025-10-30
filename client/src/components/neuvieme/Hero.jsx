import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero({ classe, id, subheading }) {
  return (
    <header
      id={id}
      className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-white/10 rounded-full animate-bounce"
          style={{ animationDuration: "4s" }}></div>
        <div
          className="absolute bottom-20 left-1/4 w-48 h-48 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute bottom-40 right-1/3 w-64 h-64 bg-white/10 rounded-full animate-bounce"
          style={{ animationDuration: "6s", animationDelay: "1s" }}></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20">
            <span className="text-yellow-400 mr-2">🎓</span>
            <span className="text-sm font-medium">
              Plateforme Officielle • 9e Année Fondamentale
            </span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">
              {classe?.nom || "9e Année Fondamentale"}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">
              Votre Réussite
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed">
            {subheading}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              <span className="mr-3">Explorer les Matières</span>
              <ChevronDownIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>

            <button className="group inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105">
              <span className="mr-3">Commencer un Test</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
            </button>
          </div>

          {/* Stats preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {heroStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.number}
                </div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="w-6 h-6 text-white/60" />
      </div>
    </header>
  );
}

const heroStats = [
  { number: "150+", label: "Examens Disponibles" },
  { number: "2500+", label: "Élèves Inscrits" },
  { number: "96%", label: "Taux de Réussite" },
];
