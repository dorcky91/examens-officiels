import { useClasseByName } from "@/hooks/classes/queries";
import { Link } from "react-router-dom";

export default function QuickLinks({ name, url }) {
  //#region Hooks
  const { classe } = useClasseByName(name);
  const matiereLinks = classe?.matieres?.map((m) => {
    const encodeName = encodeURIComponent(encodeURIComponent(m.nom));
    return { nom: m.nom, url: `/${url}/${encodeName}` };
  });
  //#endregion

  return (
    <div className="col-span-1 lg:col-span-4">
      <div className="sticky top-20">
        <div className="mb-5">
          <h4 className="text-gray-700">Autres matières</h4>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg mb-10">
          <ul className="space-y-3 divide-y-1 divide-gray-300 text-sm">
            {matiereLinks?.map(({ nom, url }) => (
              <li className="py-1" key={nom}>
                <Link
                  to={url}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-800">
                  <span>👉</span>
                  <span>{nom}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex flex-col rounded-lg p-6 text-white/80 hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          style={{ backgroundColor: "#f94f10" }}>
          <div>
            <p className="text-2xl">⚡</p>
            <h4 className="font-semibold">
              Notre contenu vous aidera à apprendre plus rapidement.
            </h4>
          </div>
          <p className="text-sm mt-auto">
            Bénéficiez de méthodes d'apprentissage innovantes et efficaces pour
            progresser plus vite.
          </p>
        </div>
      </div>
    </div>
  );
}
