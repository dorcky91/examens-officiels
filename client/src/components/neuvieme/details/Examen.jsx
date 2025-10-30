import Creole from "@/components/structures/Creole";
import { exam9e } from "@/utils/data";

export default function Examen({ courseName }) {
  //#region Prueba
  const filteredExamensByName = exam9e.filter((exam) =>
    exam.nom
      .toLowerCase()
      .includes(decodeURIComponent(courseName.toLowerCase()))
  );
  let getYears = filteredExamensByName.map((exam) => {
    return {
      id: exam._id,
      ...exam,
    };
  });

  getYears = getYears.filter(
    (year, index, self) => index === self.findIndex((y) => y.date === year.date)
  );
  //#endregion

  return (
    <div className="col-span-1 lg:col-span-8">
      <form className="mb-5">
        <select className="block w-full lg:w-auto bg-white border border-gray-300 rounded-md p-2">
          <option value="">Sélectionner une année...</option>
          {getYears.map((year) => (
            <option
              key={year.id}
              value={year.id}
              selected={year.id === getYears[0]?.id}>
              {year.date}
            </option>
          ))}
        </select>
      </form>

      <div className="p-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4k">
          {decodeURIComponent(courseName)}
        </h2>
        <p className="mb-4">{getYears[0]?.date}</p>

        <Creole examen={getYears[0]} />
      </div>
    </div>
  );
}
