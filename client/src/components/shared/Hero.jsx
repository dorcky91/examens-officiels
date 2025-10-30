import { Link } from "react-router";
import {
  ArrowLongRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Hero({ classe, id, subheading }) {
  return (
    <header
      id={id}
      className="relative min-h-96 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 overflow-hidden px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-center">
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

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

      <div className="text-center z-10 text-white max-w-3xl mx-auto">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
          <span className="text-yellow-400 mr-2">🎓</span>
          <span className="text-sm font-medium">
            {classe?.nom || "9e Année Fondamentale"}
          </span>
        </div>
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">
            Votre Réussite
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-medium opacity-90 mb-10 leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#courses"
            className="group inline-flex items-center px-4 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span className="mr-3">Explorer les Matières</span>
            <ChevronDownIcon className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
          </a>

          <Link
            to="/essai"
            className="group inline-flex items-center px-4 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 hover:scale-105">
            <span className="mr-3">Commencer un Test</span>
            <ArrowLongRightIcon className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </header>
  );
}
