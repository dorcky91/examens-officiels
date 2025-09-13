import {
  getExamensByMatiere,
  getExamensByMatiereAndDate,
} from "@/services/examensAPI";
import { useQuery } from "@tanstack/react-query";

export function useExamensByMatiere(idClasse, nom) {
  const {
    data: examens,
    isPending,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["examens", idClasse, nom],
    queryFn: () => getExamensByMatiere(idClasse, nom),
    enabled: !!idClasse && !!nom,
  });

  return { examens, isPending, isSuccess, isError };
}

export function useExamensByMatiereAndDate(idClasse, nom, date) {
  const {
    data: examens,
    isPending,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["examens", idClasse, nom, date],
    queryFn: () => getExamensByMatiereAndDate(idClasse, nom, date),
    enabled: !!idClasse && !!nom && !!date,
  });

  return { examens, isPending, isSuccess, isError };
}
