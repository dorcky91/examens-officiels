import { StarIcon } from "@heroicons/react/24/solid";
import { studentImages } from "@/utils/studentImages";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="px-6 lg:px-9">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ce que disent nos étudiants
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les témoignages de ceux qui ont réussi leurs examens grâce
            à notre plateforme.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.grade}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Marie Claire Jean",
    grade: "9AF - Réussie avec mention",
    image: "https://i.pravatar.cc/150?img=16",
    rating: 5,
    text: "Grâce à cette plateforme, j'ai pu m'exercer avec de vrais examens. Les explications détaillées m'ont beaucoup aidée à comprendre mes erreurs et à m'améliorer.",
  },
  {
    name: "Jean-Baptiste Pierre",
    grade: "NS4 - Admis à l'université",
    image: "https://i.pravatar.cc/150?img=7",
    rating: 5,
    text: "Les simulations en temps réel m'ont préparé parfaitement aux conditions d'examen. J'ai gagné en confiance et obtenu d'excellents résultats.",
  },
  {
    name: "Farah Alexis",
    grade: "9AF - Première de classe",
    image: studentImages.diversity.diverse1,
    rating: 5,
    text: "L'interface est intuitive et les ressources sont de qualité. Le suivi des progrès m'a permis de cibler mes révisions efficacement.",
  },
  {
    name: "Richardson Paul",
    grade: "NS4 - Mention très bien",
    image: "https://i.pravatar.cc/150?img=51",
    rating: 5,
    text: "Les guides d'étude sont excellents et les conseils d'experts m'ont donné des stratégies gagnantes pour aborder chaque matière.",
  },
];
