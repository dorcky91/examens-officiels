import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="grid grid-cols-12 space-y-5 sm:space-y-0 gap-5 justify-center text-center text-white">
          <Link
            to="/neuvieme/anglais"
            className="col-span-6 md:col-span-4 xl:col-span-3 bg-gradient-to-b from-blue-500 to-blue-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center">
            <div>
              <img
                src="/icones/langue.png"
                alt="Anglais"
                loading="lazy"
                className="w-14 h-14 mb-2 mx-auto"
              />
              <p className="text-lg lg:text-xl">Anglais</p>
            </div>
          </Link>
          <Link
            to="/neuvieme/espagnol"
            className="col-span-6 md:col-span-4 xl:col-span-3 bg-gradient-to-b from-teal-500 to-teal-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center">
            <div>
              <img
                src="/icones/langue.png"
                alt="Créole"
                loading="lazy"
                className="w-14 h-14 mb-2 mx-auto"
              />
              <p className="text-lg lg:text-xl">Créole</p>
            </div>
          </Link>
          <Link
            to="/neuvieme/espagnol"
            className="col-span-6 md:col-span-4 xl:col-span-3 bg-gradient-to-b from-purple-500 to-purple-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center">
            <div>
              <img
                src="/icones/langue.png"
                alt="Espagnol"
                loading="lazy"
                className="w-14 h-14 mb-2 mx-auto"
              />
              <p className="text-lg lg:text-xl">Espagnol</p>
            </div>
          </Link>
          <Link
            to="/neuvieme/espagnol"
            className="col-span-6 md:col-span-4 xl:col-span-3 bg-gradient-to-b from-fuchsia-500 to-fuchsia-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center">
            <div>
              <img
                src="/icones/langue.png"
                alt="Français"
                loading="lazy"
                className="w-14 h-14 mb-2 mx-auto"
              />
              <p className="text-lg lg:text-xl">Français</p>
            </div>
          </Link>
          <Link
            to="/neuvieme/anglais"
            className="col-span-6 md:col-span-4 xl:col-span-3 bg-gradient-to-b from-indigo-500 to-indigo-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center">
            <div>
              <img
                src="/icones/maths.png"
                alt="Mathématiques"
                loading="lazy"
                className="w-14 h-14 mb-2 mx-auto"
              />
              <p className="text-lg lg:text-xl">Mathématiques</p>
            </div>
          </Link>
          <Link
            to="/neuvieme/anglais"
            className="col-span-6 md:col-span-4 xl:col-span-3 bg-gradient-to-b from-red-500 to-red-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center">
            <div>
              <img
                src="/icones/sciences.png"
                alt="Sciences Sociales"
                loading="lazy"
                className="w-14 h-14 mb-2 mx-auto"
              />
              <p className="text-lg lg:text-xl">Sciences Sociales</p>
            </div>
          </Link>
          <Link
            to="/neuvieme/anglais"
            className="col-span-6 md:col-span-4 xl:col-span-3 bg-gradient-to-b from-orange-500 to-orange-800 rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center">
            <div>
              <img
                src="/icones/sciences.png"
                alt="Sciences Éxpérimentales"
                loading="lazy"
                className="w-14 h-14 mb-2 mx-auto"
              />
              <p className="text-lg lg:text-xl">Sciences Éxpérimentales</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
