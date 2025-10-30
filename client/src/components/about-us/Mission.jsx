export default function Mission() {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-6 rounded-lg group hover:bg-gradient-to-b from-indigo-500 to-indigo-800 transition-all duration-300">
            <div className="inline-flex group-hover:hidden bg-gradient-to-b from-indigo-500 to-indigo-800 rounded-lg p-3 mb-7">
              <img
                src="/icons/goal.png"
                alt="Goal"
                loading="lazy"
                className="w-10 h-10"
              />
            </div>
            <div className="group-hover:inline-flex hidden rounded-lg p-3 mb-7">
              <img
                src="/icons/goal.png"
                alt="Goal"
                loading="lazy"
                className="w-10 h-10"
              />
            </div>
            <h5 className="text-2xl mb-2 group-hover:text-white">
              Notre mission
            </h5>
            <p className="text-gray-600 group-hover:text-white">
              Offrir une plateforme éducative accessible et complète pour aider
              les étudiants à exceller dans leurs examens officiels grâce à des
              ressources pédagogiques de qualité et un accompagnement
              personnalisé.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg group hover:bg-gradient-to-b from-teal-500 to-teal-800 transition-all duration-300">
            <div className="inline-flex group-hover:hidden bg-gradient-to-b from-teal-500 to-teal-800 rounded-lg p-3 mb-7">
              <img
                src="/icons/eye.png"
                alt="Vision"
                loading="lazy"
                className="w-10 h-10"
              />
            </div>
            <div className="group-hover:inline-flex hidden rounded-lg p-3 mb-7">
              <img
                src="/icons/eye.png"
                alt="Vision"
                loading="lazy"
                className="w-10 h-10"
              />
            </div>
            <h5 className="text-2xl mb-2 group-hover:text-white">
              Notre vision
            </h5>
            <p className="text-gray-600 group-hover:text-white">
              Devenir la référence en matière de préparation aux examens
              officiels, en démocratisant l'accès à une éducation de qualité et
              en contribuant à la réussite académique de chaque étudiant.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg group hover:bg-gradient-to-b from-orange-500 to-orange-800 transition-all duration-300">
            <div className="inline-flex group-hover:hidden bg-gradient-to-b from-orange-500 to-orange-800 rounded-lg p-3 mb-7">
              <img
                src="/icons/diamond.png"
                alt="Valeurs"
                className="w-10 h-10"
              />
            </div>
            <div className="group-hover:inline-flex hidden rounded-lg p-3 mb-7">
              <img
                src="/icons/diamond.png"
                alt="Valeurs"
                className="w-10 h-10"
              />
            </div>
            <h5 className="text-2xl mb-2 group-hover:text-white">
              Nos valeurs
            </h5>
            <p className="text-gray-600 group-hover:text-white">
              Excellence académique, innovation pédagogique, accessibilité pour
              tous, intégrité dans nos contenus et engagement envers la réussite
              de nos étudiants sont les piliers de notre action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
