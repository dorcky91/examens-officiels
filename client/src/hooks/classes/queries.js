import { getClasseByIdAPI, getClassesAPI } from "@/services/classesAPI";
import { useQuery } from "@tanstack/react-query";

export function useClasses() {
  const {
    data: classes,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: getClassesAPI,
  });

  return { classes, isPending, isSuccess };
}

export function useClasseById(idClasse) {
  const {
    data: classe,
    isPending,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ["classe", idClasse],
    queryFn: () => getClasseByIdAPI(idClasse),
    enabled: !!idClasse,
  });

  return { classe, isPending, isSuccess, isError };
}

export function useClasseByName(name) {
  const { classes } = useClasses();
  const searchByName = classes?.find((c) =>
    c.nom.toLowerCase().includes(name.toLowerCase())
  );

  const { classe, isPending, isSuccess, isError } = useClasseById(
    searchByName?._id
  );
  return { classe, isPending, isSuccess, isError };
}
