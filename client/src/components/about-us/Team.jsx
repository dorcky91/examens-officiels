import { TEAM } from "@/utils/helpers";

export default function Team() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 lg:pr-20 text-center max-w-xl mx-auto mb-10">
          <h2 className="text-4xl font-bold">Notre équipe</h2>
          <p className="text-gray-600 -mt-2">
            Découvrez nos experts passionnés qui vous accompagnent tout au long
            de votre apprentissage.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="bg-gray-100 p-6 rounded-lg border border-gray-200 hover:shadow-2xl hover:bg-white transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <img
                  src={member.image}
                  alt="Membre de l'équipe"
                  loading="lazy"
                  className="w-20 h-20 rounded-full"
                />
                <div className="text-center lg:text-left">
                  <h3 className="text-sm">{member.name}</h3>
                  <p className="text-xs text-gray-500">{member.role}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {member.socialLinks.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.platform}>
                        <img
                          src={`/src/assets/images/${link.platform}.png`}
                          alt={link.platform}
                          loading="lazy"
                          className="h-6 w-6"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 lg:text-left md:text-center">
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
