import { COLORS } from "@/utils/helpers";
import { Link } from "react-router";

export default function Courses({ matieres, url }) {
  return (
    <section
      id="courses"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {matieres.map((course, index) => {
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
                className="card-courses group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}>
                <div
                  className={`card-inner bg-gradient-to-br ${
                    COLORS[index % COLORS.length]
                  } relative overflow-hidden`}>
                  <div className="shine-effect"></div>

                  <div className="card-content">
                    <div className="icon-container">
                      <div
                        className="course-icon"
                        dangerouslySetInnerHTML={{ __html: svgIcon }}
                      />
                    </div>

                    <h3 className="course-title">{course.nom}</h3>

                    <div className="card-decoration">
                      <div className="decoration-dot"></div>
                      <div className="decoration-dot"></div>
                      <div className="decoration-dot"></div>
                    </div>
                  </div>

                  <div className="particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
