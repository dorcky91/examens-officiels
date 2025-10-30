import { Link } from "react-router";
import { studentImages } from "@/utils/studentImages";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function NS4() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100/50">
      <div className="relative overflow-hidden ">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-100/30 to-transparent rounded-full -translate-y-32 -translate-x-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-pink-100/40 to-transparent rounded-full translate-y-24 translate-x-24"></div>

        <div className="relative flex flex-col md:flex-row gap-12 px-8 sm:px-12 lg:px-16 py-16 lg:py-20 items-center">
          <div className="w-full md:w-1/2 space-y-8 relative z-10">
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight">
                NS4
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Préparez-vous aux{" "}
                <span className="font-semibold text-purple-700">
                  examens NS4
                </span>{" "}
                avec nos ressources complètes et nos exercices pratiques
                spécialement adaptés au niveau secondaire.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span>Examens officiels avec solutions complètes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"></div>
                  <span>Exercices de révision par matière</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                  <span>Préparation ciblée aux épreuves</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                to="/ns4"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
                <span>Voir les examens</span>
                <ArrowLongRightIcon className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" />

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>40+ examens disponibles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Contenu actualisé</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative group">
            <div className="relative transform transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={studentImages.diversity.diverse1}
                  alt="Estudiantes preparándose para exámenes NS4"
                  className="w-full h-[400px] lg:h-[450px] object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-lg animate-bounce"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-pink-500 to-red-600 rounded-full shadow-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
