import { studentImages } from "@/utils/studentImages";

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="px-6 lg:px-9">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pourquoi apprendre avec nous ?
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez nos avantages uniques pour une expérience d'apprentissage
            optimale.
          </p>
        </div>
        <div className="grid grid-cols-12 sm:gap-5 space-y-5 sm:space-y-0">
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: "#f94f10" }}>
            <div>
              <p className="text-2xl">⚡</p>
              <h4 className="font-semibold !text-white">
                Notre contenu vous aidera à apprendre plus rapidement.
              </h4>
            </div>
            <p className="text-sm mt-auto">
              Bénéficiez de méthodes d'apprentissage innovantes et efficaces
              pour progresser plus vite.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 hover:scale-105 transition-transform duration-300 hover:rotate-1 hover:shadow-2xl">
            <img
              src={studentImages.collaboration.group2}
              alt="Estudiantes colaborando en el aprendizaje"
              style={{ height: "340px" }}
              loading="lazy"
              className="w-full object-cover rounded-lg"
            />
          </div>
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: "#3974ff" }}>
            <div>
              <p className="text-2xl">📅</p>
              <h4 className="font-semibold !text-white">
                Planification flexible et organisation optimale de vos études.
              </h4>
            </div>
            <p className="text-sm mt-auto">
              Organisez votre apprentissage selon votre rythme et vos
              disponibilités.
            </p>
          </div>
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: "#c9bcab" }}>
            <div>
              <p className="text-2xl">🔒</p>
              <h4 className="font-semibold !text-white">
                Sécurité et confidentialité garanties pour tous vos examens.
              </h4>
            </div>
            <p className="text-sm mt-auto">
              Processus sécurisé pour la gestion de chaque examen et de ses
              résultats.
            </p>
          </div>
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ backgroundColor: "#4c1526" }}>
            <div>
              <p className="text-2xl">🎯</p>
              <h4 className="font-semibold !text-white">
                Résultats ciblés et objectifs personnalisés pour réussir.
              </h4>
            </div>
            <p className="text-sm mt-auto">
              Atteignez vos objectifs grâce à un accompagnement personnalisé et
              adapté.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-6 rounded-lg order-1 lg:order-none hover:scale-105 transition-transform duration-300 hover:-rotate-1 hover:shadow-2xl">
            <img
              src={studentImages.technology.online}
              alt="Estudiantes usando tecnología para estudiar"
              style={{ height: "340px" }}
              loading="lazy"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
