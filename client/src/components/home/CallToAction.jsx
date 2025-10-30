import { Link } from "react-router";
import { ArrowLongRightIcon, PlayIcon } from "@heroicons/react/24/outline";
import { studentImages } from "@/utils/studentImages";

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(99, 102, 241, 0.9) 100%), url(${studentImages.classroom.presentation})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>

      <div className="px-6 lg:px-9 relative">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Prêt à transformer vos résultats ?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Rejoignez des milliers d'étudiants qui ont déjà amélioré leurs
            performances avec notre plateforme d'excellence académique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/neuvieme"
              className="group font-semibold bg-white text-blue-600 px-4 py-3 rounded-full transition-all duration-300 hover:scale-95 flex items-center gap-1">
              <span>Commencer l'examen 9AF</span>
              <ArrowLongRightIcon className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/ns4"
              className="group font-semibold bg-transparent border-2 border-white text-white px-4 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-95 flex items-center gap-1">
              <span>Commencer l'examen NS4</span>
              <ArrowLongRightIcon className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8">
            <button className="group text-blue-100 hover:text-white transition-colors duration-300 flex items-center space-x-2 mx-auto">
              <PlayIcon className="h-5 w-5" />
              <span className="border-b border-blue-200 group-hover:border-white">
                Voir une démonstration (2 min)
              </span>
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Gratuit pour commencer</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Résultats immédiats</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
