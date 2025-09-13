import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header
      className="bg-gray-200 relative z-10"
      style={{
        background:
          "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center / cover",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-end py-5">
          <div className="w-full md:w-9/12 lg:w-6/12 min-h-[25rem] flex items-center rounded-lg backdrop-blur-2xl px-10 py-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Bienvenue sur <br /> Notre Plateforme
              </h1>
              <p className="mt-4 text-white/70">
                Découvrez une variété de fonctionnalités et de ressources pour
                améliorer votre expérience d'apprentissage.
              </p>
              <Link
                to="/a-propos"
                className="bg-blue-600 hover:bg-blue-800 hover:shadow text-white px-4 py-3 rounded hover:scale-105 transition-transform duration-500 inline-block">
                En savoir plus 👉
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0" style={{ zIndex: -1 }}>
        <div className="h-full w-full bg-gradient-to-t from-black/80"></div>
      </div>
    </header>
  );
}
