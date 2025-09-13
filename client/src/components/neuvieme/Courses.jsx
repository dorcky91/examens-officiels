import { COLORS } from "@/utils/helpers";
import { Link } from "react-router-dom";

export default function Courses({ matieres, url }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="grid grid-cols-12 space-y-5 sm:space-y-0 gap-5 justify-center text-center text-white">
          {matieres.map((course) => {
            const svgIcon = course.icone
              .replace(/width="[^"]*"/, `width="50"`)
              .replace(/height="[^"]*"/, `height="50"`);

            const encodeName = encodeURIComponent(
              encodeURIComponent(course.nom)
            );

            return (
              <Link
                key={course.nom}
                to={`/${url}/${encodeName}`}
                className={`col-span-6 md:col-span-4 xl:col-span-3 bg-gradient-to-b ${
                  COLORS[matieres.indexOf(course) % COLORS.length]
                } rounded-lg p-6 hover:scale-105 transition-transform duration-300 hover:shadow-2xl flex items-center justify-center h-full`}>
                <div>
                  <div
                    className="flex justify-center text-center mb-2"
                    dangerouslySetInnerHTML={{ __html: svgIcon }}
                  />

                  {/* <img
                      src={course.icon}
                      alt={course.nom}
                      loading="lazy"
                      className="w-10 h-10 sm:w-14 sm:h-14 mb-2 mx-auto"
                    /> */}
                  <p className="text-sm sm:text-lg lg:text-xl">{course.nom}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const courses = [
  {
    classe: "neuvieme",
    to: "/neuvieme/anglais",
    label: "Anglais",
    icon: "/matieres/langue.png",
  },
  {
    classe: "neuvieme",
    to: "/neuvieme/creole",
    label: "Créole",
    icon: "/matieres/langue.png",
  },
  {
    classe: "neuvieme",
    to: "/neuvieme/espagnol",
    label: "Espagnol",
    icon: "/matieres/langue.png",
  },
  {
    classe: "neuvieme",
    to: "/neuvieme/francais",
    label: "Français",
    icon: "/matieres/langue.png",
  },
  {
    classe: "neuvieme",
    to: "/neuvieme/mathematiques",
    label: "Mathématiques",
    icon: "/matieres/maths.png",
  },
  {
    classe: "neuvieme",
    to: "/neuvieme/sciences-sociales",
    label: "Sciences Sociales",
    icon: "/matieres/sciences.png",
  },
  {
    classe: "neuvieme",
    to: "/neuvieme/sciences-experimentales",
    label: "Sciences Éxpérimentales",
    icon: "/matieres/sciences.png",
  },
  {
    classe: "ns4",
    to: "/ns4/art-musique",
    label: "Art-Musique",
    icon: "/matieres/musique.png",
  },
  {
    classe: "ns4",
    to: "/ns4/anglais",
    label: "Anglais",
    icon: "/matieres/langue.png",
  },
  {
    classe: "ns4",
    to: "/ns4/biologie-geologie",
    label: "Biologie-Géologie",
    icon: "/matieres/biotech.png",
  },
  {
    classe: "ns4",
    to: "/ns4/chimie",
    label: "Chimie",
    icon: "/matieres/chimie.png",
  },
  {
    classe: "ns4",
    to: "/ns4/creole",
    label: "Créole",
    icon: "/matieres/langue.png",
  },
  {
    classe: "ns4",
    to: "/ns4/economie",
    label: "Économie",
    icon: "/matieres/economie.png",
  },
  {
    classe: "ns4",
    to: "/ns4/espagnol",
    label: "Espagnol",
    icon: "/matieres/langue.png",
  },
  {
    classe: "ns4",
    to: "/ns4/informatique",
    label: "Informatique",
    icon: "/matieres/informatique.png",
  },
  {
    classe: "ns4",
    to: "/ns4/mathematiques",
    label: "Mathématiques",
    icon: "/matieres/maths.png",
  },
  {
    classe: "ns4",
    to: "/ns4/philosophie",
    label: "Philosophie",
    icon: "/matieres/philosophie.png",
  },
  {
    classe: "ns4",
    to: "/ns4/physiques",
    label: "Physiques",
    icon: "/matieres/physiques.png",
  },
  {
    classe: "ns4",
    to: "/ns4/sciences-sociales",
    label: "Sciences Sociales",
    icon: "/matieres/sciences.png",
  },
];
