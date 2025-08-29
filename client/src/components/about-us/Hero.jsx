export default function Hero() {
  return (
    <header className="min-h-[15rem] mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col bg-white p-6 space-y-10 rounded-lg">
            <div>
              <small className="text-indigo-500">Notre rêve</small>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Transformation de l'apprentissage mondial
              </h1>
            </div>
            <div className="mt-auto">
              <p className="text-gray-600">
                Nous sommes passionnés par l'idée de démocratiser l'accès à une
                éducation de qualité et de révolutionner la façon dont les
                étudiants se préparent aux examens officiels. Notre plateforme
                offre des ressources complètes et innovantes pour garantir le
                succès académique de chaque apprenant.
              </p>
            </div>
          </div>
          <div className="grid space-y-6">
            <div className="bg-amber-gray">
              <img
                src="/src/assets/images/students.png"
                alt=""
                loading="lazy"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 bg-white p-3 rounded-lg">
              <div className="rounded-lg p-3 bg-gray-50 text-gray-600 flex flex-col items-center justify-center">
                <span className="text-xl font-bold">200+</span>
                <p className="text-sm">Examens</p>
              </div>
              <div className="rounded-lg p-3 bg-gray-50 text-gray-600 flex flex-col items-center justify-center">
                <span className="text-xl font-bold">5000+</span>
                <p className="text-sm">Étudiants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
