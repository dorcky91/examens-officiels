import { Link } from "react-router";
import { studentImages } from "@/utils/studentImages";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Neuvieme() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border border-blue-100/50">
      <div className="relative overflow-hidden ">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-100/40 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

        <div className="relative flex flex-col md:flex-row gap-12 px-8 sm:px-12 lg:px-16 py-16 lg:py-20 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={studentImages.studying.focused1}
                  alt="Estudiantes de 9º grado estudiando"
                  className="w-full h-[400px] lg:h-[450px] object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg animate-bounce"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-md animate-pulse"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8 relative z-10">
            <div className="space-y-3">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                9AF
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed">
                Accédez aux{" "}
                <span className="font-semibold text-blue-700">
                  examens de 9ème année fondamentale
                </span>{" "}
                avec nos supports pédagogiques complets et exercices
                d'entraînement adaptés.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  <span>Examens officiels et corrections détaillées</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  <span>Exercices d'entraînement interactifs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <span>Suivi de progression personnalisé</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link
                to="/neuvieme"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-4 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden">
                <span>Voir les examens</span>
                <ArrowLongRightIcon className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" />

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>50+ examens disponibles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Mis à jour régulièrement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
